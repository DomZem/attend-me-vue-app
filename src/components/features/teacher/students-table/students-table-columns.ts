import type { CourseSessionAttendanceRecord } from '@/api/api-client-base';
import Badge from '@/components/ui/badge/Badge.vue';
import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';
import CopyRegisterStudentDeviceLinkButton from './CopyRegisterStudentDeviceLinkButton.vue';

export const studentAttendanceColumns: ColumnDef<CourseSessionAttendanceRecord>[] = [
	{
		accessorKey: 'userName',
		header: () => h('div', { class: '' }, 'Name'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.userName);
		},
	},
	{
		accessorKey: 'userSurname',
		header: () => h('div', { class: '' }, 'Surname'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.userSurname);
		},
	},
	{
		accessorKey: 'studentAlbumIdNumber',
		header: () => h('div', { class: '' }, 'Album ID'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.studentAlbumIdNumber);
		},
	},
	{
		accessorKey: 'wasUserPresent',
		header: () => h('div', { class: '' }, 'Present'),
		cell: ({ row }) => {
			return h(Badge, { variant: row.original.wasUserPresent ? 'secondary' : 'destructive' }, row.original.wasUserPresent ? 'Present' : 'Absent');
		},
	},
	{
		id: 'registerStudentDevice',
		header: () => h('div', { class: '' }, 'Register device link'),
		cell: ({ row }) => {
			const student = row.original;

			return h(CopyRegisterStudentDeviceLinkButton, { userId: student.attenderUserId! }, 'Copy');
		},
	},
];
