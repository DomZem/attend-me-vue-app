<script setup lang="ts">
import type { CourseSessionListItem } from '@/api/api-client-base';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { apiClient } from '@/main';
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const data = ref<CourseSessionListItem | null>(null);
const route = useRoute();
const lessonId = route.params.id as string;

async function getData(): Promise<CourseSessionListItem> {
	const response = await apiClient.courseSessionGet(parseInt(lessonId));

	return response;
}

onMounted(async () => {
	data.value = await getData();
});
</script>

<template>
	<Card class="lg:max-w-sm w-full h-fit">
		<CardHeader class="bg-muted/50">
			<CardTitle>Lesson Details</CardTitle>
		</CardHeader>

		<CardContent class="p-6 text-sm">
			<div class="grid gap-3">
				<div class="font-semibold">Base Information</div>
				<ul class="grid gap-3">
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Name</span>
						<span>{{ data?.courseName ?? '' }}</span>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Group</span>
						<span>{{ data?.courseGroupName }}</span>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Location</span>
						<span>{{ data?.locationName }}</span>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">Start At</span>
						<span>{{ dayjs(data?.dateStart).format('YYYY-MM-DD HH:mm') }}</span>
					</li>
					<li class="flex items-center justify-between">
						<span class="text-muted-foreground">End At</span>
						<span>{{ dayjs(data?.dateEnd).format('YYYY-MM-DD HH:mm') }}</span>
					</li>
				</ul>
			</div>

			<Separator class="my-6" />
			<Button as-child class="w-full" variant="outline">
				<RouterLink :to="`${lessonId}/register-attendance`">Go to Screen Reader</RouterLink>
			</Button>
		</CardContent>
	</Card>
</template>
