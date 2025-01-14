<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Props {
	currentUserShortName: string;
	currentUserFullName: string;
}

defineProps<Props>();
</script>

<template>
	<span class="flex flex-1 items-center gap-2">
		<Avatar class="size-8 rounded-lg inline-flex items-center justify-center bg-primary">
			<AvatarFallback class="rounded-lg text-xs font-medium text-primary-foreground"> {{ currentUserShortName }} </AvatarFallback>
		</Avatar>

		<span class="truncate font-semibold text-sm leading-tight">{{ currentUserFullName }}</span>
	</span>
</template>
