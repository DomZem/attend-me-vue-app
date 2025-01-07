<script setup lang="ts">
import { cn } from '@/lib/utils';
import { BookOpenCheck, Home } from 'lucide-vue-next';
import StyledRouterLink from '../common/StyledRouterLink.vue';

interface Props {
	class?: string;
}

const props = defineProps<Props>();
</script>

<template>
	<nav :class="cn('grid items-start text-sm font-medium', props.class)">
		<StyledRouterLink to="/student/dashboard" :active="(route) => route.startsWith('/student/dashboard')">
			<Home class="h-4 w-4" />
			Dashboard
		</StyledRouterLink>
		<StyledRouterLink to="/student/lessons" :active="(route) => route.startsWith('/student/lessons')"> <BookOpenCheck class="h-4 w-4" /> Lessons</StyledRouterLink>
	</nav>
</template>
