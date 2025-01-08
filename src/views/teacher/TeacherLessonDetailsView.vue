<script setup lang="ts">
import TeacherLessonDetailsCard from '@/components/features/teacher/TeacherLessonDetailsCard.vue';
import TeacherLessonStudentsTable from '@/components/features/teacher/students-table/TeacherLessonStudentsTable.vue';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-vue-next';
</script>

<template>
	<div class="flex flex-col lg:flex-row gap-6">
		<TeacherLessonDetailsCard />

		<div class="flex-1 space-y-6">
			<div class="flex items-center justify-between">
				<h2 class="text-lg font-semibold">Students List</h2>
				<Button size="icon">
					<RotateCcw />
				</Button>
			</div>

			<TeacherLessonStudentsTable />
		</div>
	</div>
</template>
