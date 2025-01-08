import StudentLayout from '@/layouts/student/StudentLayout.vue';
import TeacherLayout from '@/layouts/teacher/TeacherLayout.vue';
import LoginView from '@/views/LoginView.vue';
import StudentDashboardView from '@/views/student/StudentDashboardView.vue';
import StudentLessonDetailsView from '@/views/student/StudentLessonDetailsView.vue';
import StudentLessonsView from '@/views/student/StudentLessonsView.vue';
import StudentRegisterDevice from '@/views/student/StudentRegisterDevice.vue';
import StudentRegisterLessonAttendanceView from '@/views/student/StudentRegisterLessonAttendanceView.vue';
import TeacherDashboardView from '@/views/teacher/TeacherDashboardView.vue';
import TeacherLessonDetailsView from '@/views/teacher/TeacherLessonDetailsView.vue';
import TeacherLessonsView from '@/views/teacher/TeacherLessonsView.vue';
import TeacherRegisterLessonAttendance from '@/views/teacher/TeacherRegisterLessonAttendance.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{ path: '/', component: LoginView },
	{
		path: '/register-student-device/:token',
		component: StudentRegisterDevice,
	},
	{
		path: '/teacher',
		component: TeacherLayout,
		// beforeEnter: (to, from, next) => {
		// 	if (apiClient.isTokenExpired()) {
		// 		next({ path: '/' });
		// 	}

		// 	next();
		// },
		children: [
			{
				path: 'dashboard',
				component: TeacherDashboardView,
			},
			{
				path: 'lessons',
				component: TeacherLessonsView,
			},
			{
				path: 'lessons/:id',
				component: TeacherLessonDetailsView,
			},
			{
				path: 'lessons/:id/register-attendance',
				component: TeacherRegisterLessonAttendance,
			},
		],
	},
	{
		path: '/student',
		component: StudentLayout,
		// beforeEnter: (to, from, next) => {
		// 	if (apiClient.isTokenExpired()) {
		// 		console.log('Token expired');

		// 		next({ path: '/' });
		// 	}

		// 	next();
		// },
		children: [
			{
				path: 'dashboard',
				component: StudentDashboardView,
			},
			{
				path: 'lessons',
				component: StudentLessonsView,
			},
			{
				path: 'lessons/:id',
				component: StudentLessonDetailsView,
			},
			{
				path: 'lessons/:id/register-attendance',
				component: StudentRegisterLessonAttendanceView,
			},
		],
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
