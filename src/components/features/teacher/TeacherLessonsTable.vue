<script setup lang="ts">
import type { CourseSessionListItem } from '@/api/api-client-base';
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { apiClient } from '@/main';
import { onMounted, ref } from 'vue';
import { teacherLessonsColumns } from './teacher-lessons-columns';

const data = ref<CourseSessionListItem[]>([]);

async function getData(): Promise<CourseSessionListItem[]> {
	const response = await apiClient.courseTeacherSessionsGet({
		pageSize: 10,
		pageNumber: 1,
	});

	console.log(response.items);

	return response.items;
}

onMounted(async () => {
	data.value = await getData();
});
</script>

<template>
	<DataTable :columns="teacherLessonsColumns" :data="data" />
</template>
