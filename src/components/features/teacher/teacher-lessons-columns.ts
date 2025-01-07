import type { CourseSessionListItem } from '@/api/api-client-base';
import Button from '@/components/ui/button/Button.vue';
import type { ColumnDef } from '@tanstack/vue-table';
import dayjs from 'dayjs';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

export const teacherLessonsColumns: ColumnDef<CourseSessionListItem>[] = [
	{
		accessorKey: 'courseName',
		header: () => h('div', { class: '' }, 'Name'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.courseName);
		},
	},
	{
		accessorKey: 'courseGroupName',
		header: () => h('div', { class: '' }, 'Group Name'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.courseGroupName);
		},
	},
	{
		accessorKey: 'locationName',
		header: () => h('div', { class: '' }, 'Location'),
		cell: ({ row }) => {
			return h('div', { class: '' }, row.original.locationName);
		},
	},
	{
		accessorKey: 'dateStart',
		header: () => h('div', { class: '' }, 'Start Date'),
		cell: ({ row }) => {
			const formatedDate = dayjs(row.original.dateStart).format('YYYY-MM-DD HH:mm');
			return h('div', { class: '' }, formatedDate);
		},
	},
	{
		accessorKey: 'dateEnd',
		header: () => h('div', { class: '' }, 'End Date'),
		cell: ({ row }) => {
			const formatedDate = dayjs(row.original.dateEnd).format('YYYY-MM-DD HH:mm');
			return h('div', { class: '' }, formatedDate);
		},
	},
	{
		id: 'Actions',
		header: () => h('div', { class: '' }, 'Actions'),
		cell: ({ row }) => {
			return h(
				Button,
				{
					asChild: true,
				},
				h(
					RouterLink,
					{
						to: `lessons/${row.original.courseSessionId}`,
					},
					'Details'
				)
			);
		},
	},
];
