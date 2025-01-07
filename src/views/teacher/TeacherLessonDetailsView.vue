<script setup lang="ts">
import TeacherLessonDetailsCard from '@/components/features/teacher/TeacherLessonDetailsCard.vue';
import TeacherLessonStudentsTable from '@/components/features/teacher/students-table/TeacherLessonStudentsTable.vue';
</script>

<template>
	<div class="flex flex-col lg:flex-row gap-6">
		<TeacherLessonDetailsCard />

		<div class="flex-1 space-y-6">
			<div class="flex items-center justify-between">
				<h2>Students List</h2>
				<div>button</div>
			</div>

			<TeacherLessonStudentsTable />
		</div>
	</div>
</template>
