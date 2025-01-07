import type { CourseSessionAttendanceRecord } from '@/api/api-client-base';
import type { ColumnDef } from '@tanstack/vue-table';
import { h } from 'vue';

export const studentAttendanceColumns: ColumnDef<CourseSessionAttendanceRecord>[] = [
	{
		accessorKey: 'userName',
		header: () => h('div', { class: '' }, 'Name'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('userName'));
		},
	},
	{
		accessorKey: 'userSurname',
		header: () => h('div', { class: '' }, 'Surname'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('userSurname'));
		},
	},
	{
		accessorKey: 'studentAlbumIdNumber',
		header: () => h('div', { class: '' }, 'Album ID'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('studentAlbumIdNumber'));
		},
	},
	{
		accessorKey: 'wasUserPresent',
		header: () => h('div', { class: '' }, 'Present'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('wasUserPresent'));
		},
	},
];
