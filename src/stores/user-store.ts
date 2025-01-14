import type { User } from '@/api/api-client-base';
import { apiClient } from '@/main';
import { router } from '@/router';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: window.localStorage.getItem('attend-me:userInfo') ? (JSON.parse(window.localStorage.getItem('attend-me:userInfo')!) as User) : null,
	}),
	getters: {
		getUser(): User | null {
			return this.user;
		},
	},
	actions: {
		async login(loginName: string, password: string) {
			const response = await apiClient.userLogin(loginName, password);

			if (!response.token) {
				throw new Error('Invalid login or password');
			}

			const user = await apiClient.userGet(undefined);

			this.user = user;
			window.localStorage.setItem('attend-me:userInfo', JSON.stringify(user));

			if (user.isStudent) {
				router.push('/student/dashboard');
			} else {
				router.push('/teacher/dashboard');
			}
		},

		logout() {
			this.user = null;
			apiClient.userTokenResult = undefined;
			window.localStorage.removeItem('attend-me:userAuthData');
			window.localStorage.removeItem('attend-me:userInfo');
			router.push('/');
		},
	},
});
