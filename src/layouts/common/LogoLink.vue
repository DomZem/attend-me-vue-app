<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import { RouterLink } from 'vue-router';
interface Props {
	to: string;
}

const props = defineProps<Props>();
</script>

<template>
	<RouterLink class="flex items-center gap-2 font-semibold" :to="props.to">
		<Logo />
		<span class="">AttendMe</span>
	</RouterLink>
</template>
