<script setup lang="ts">
import type { CourseSessionAttendanceRecord } from '@/api/api-client-base';
import DataTable from '@/components/ui/data-table/DataTable.vue';
import { apiClient } from '@/main';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { studentAttendanceColumns } from './students-table-columns';

const route = useRoute();
const lessonId = route.params.id as string;

const data = ref<CourseSessionAttendanceRecord[]>([]);

async function getData(): Promise<CourseSessionAttendanceRecord[]> {
	const studentsAttendence = await apiClient.courseSessionAttendanceListGet(parseInt(lessonId));
	return studentsAttendence;
}

onMounted(async () => {
	data.value = await getData();
});
</script>

<template>
	<DataTable :columns="studentAttendanceColumns" :data="data" />
</template>
