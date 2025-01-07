<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

interface Props {
	to: string;
}

const props = defineProps<Props>();
</script>

<template>
	<RouterLink class="flex items-center gap-2 font-semibold" :to="props.to">
		<GraduationCap class="h-6 w-6" />
		<span class="">AttendMe</span>
	</RouterLink>
</template>
