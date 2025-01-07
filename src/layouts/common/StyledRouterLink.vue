<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

interface Props {
	to: string;
	active: (route: string) => boolean;
}

const props = defineProps<Props>();

const router = useRoute();

console.log(router.fullPath);
</script>

<template>
	<RouterLink
		class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
		:class="{ 'text-primary bg-muted': props.active(router.fullPath) }"
		:to="props.to"
	>
		<slot />
	</RouterLink>
</template>
