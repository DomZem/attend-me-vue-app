<script setup lang="ts">
import Badge from '@/components/ui/badge/Badge.vue';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserStore } from '@/stores/user-store';
import { ChevronsUpDown, LogOut } from 'lucide-vue-next';
import { computed } from 'vue';
import UserAvatarFallback from './UserAvatarFallback.vue';

const userStore = useUserStore();

const currentUserShortName = computed(() => `${userStore.user?.name?.charAt(0)}${userStore.user?.surname?.charAt(0)}`);
const currentUserFullName = computed(() => `${userStore.user?.name} ${userStore.user?.surname}`);
const currentUserRoleName = computed(() => (userStore.user?.isStudent ? 'Student' : 'Teacher'));
</script>

<template>
	<DropdownMenu>
		<DropdownMenuTrigger class="flex items-center gap-2 w-full cursor-pointer rounded-lg">
			<UserAvatarFallback :currentUserShortName="currentUserShortName" :currentUserFullName="currentUserFullName" />
			<ChevronsUpDown class="size-4" />
		</DropdownMenuTrigger>

		<DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
			<DropdownMenuLabel class="p-0 font-normal flex items-center gap-2 px-1 py-1.5">
				<UserAvatarFallback :currentUserShortName="currentUserShortName" :currentUserFullName="currentUserFullName" />
				<Badge class="max-w-fit">{{ currentUserRoleName }}</Badge>
			</DropdownMenuLabel>

			<DropdownMenuSeparator />

			<DropdownMenuItem class="cursor-pointer" @click="userStore.logout">
				<LogOut />
				Log out
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>
