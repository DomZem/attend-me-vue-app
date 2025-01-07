import type { CourseSessionListItem } from '@/api/api-client-base';
import Button from '@/components/ui/button/Button.vue';
import type { ColumnDef } from '@tanstack/vue-table';
import dayjs from 'dayjs';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

export const studentLessonsColumns: ColumnDef<CourseSessionListItem>[] = [
	{
		accessorKey: 'courseName',
		header: () => h('div', { class: '' }, 'Name'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('courseName'));
		},
	},
	{
		accessorKey: 'locationName',
		header: () => h('div', { class: '' }, 'Location'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.getValue('locationName'));
		},
	},
	{
		accessorKey: 'dateStart',
		header: () => h('div', { class: '' }, 'Start Date'),
		cell: ({ row }) => {
			const formatedDate = dayjs(row.getValue('dateStart')).format('YYYY-MM-DD HH:mm');
			return h('div', { class: '' }, formatedDate);
		},
	},
	{
		accessorKey: 'dateEnd',
		header: () => h('div', { class: '' }, 'End Date'),
		cell: ({ row }) => {
			const formatedDate = dayjs(row.getValue('dateEnd')).format('YYYY-MM-DD HH:mm');
			return h('div', { class: '' }, formatedDate);
		},
	},
	{
		id: 'attendanceStatus',
		header: () => h('div', { class: '' }, 'Attendance Status'),
		cell: ({ row }) => {
			return h('div', { class: '' }, 'asda');
		},
	},
	{
		id: 'details',
		header: () => h('div', { class: '' }, 'Details'),
		cell: ({ row }) => {
			return h(
				Button,
				{
					asChild: true,
				},
				h(
					RouterLink,
					{
						to: `lessons/10`,
					},
					'Details'
				)
			);
		},
	},
	{
		id: 'registerAttendance',
		header: () => h('div', { class: '' }, 'Register Attendance'),
		cell: ({ row }) => {
			return h(
				Button,
				{
					asChild: true,
				},
				h(
					RouterLink,
					{
						to: `lessons/10/register-attendance`,
					},
					'Register'
				)
			);
		},
	},
];
