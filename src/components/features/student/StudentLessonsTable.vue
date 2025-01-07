<script setup lang="ts">
import type { CourseSessionListItemPagedList } from '@/api/api-client-base';
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { apiClient } from '@/main';
import { onMounted, ref } from 'vue';
import { studentLessonsColumns } from './student-lessons-columns';

const data = ref<CourseSessionListItemPagedList | null>(null);

async function getData(): Promise<CourseSessionListItemPagedList> {
	const response = await apiClient.courseStudentSessionsGet({
		pageSize: 10,
		pageNumber: 1,
	});

	return response;
}

onMounted(async () => {
	data.value = await getData();
});
</script>

<template>
	<div v-if="!data"></div>
	<DataTable v-else :columns="studentLessonsColumns" :data="data.items" />
</template>
