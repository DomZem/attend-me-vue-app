<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { apiClient } from '@/main';

interface Props {
	userId: number;
}

const props = defineProps<Props>();

const handleCopy = async () => {
	const response = await apiClient.userDeviceRegisterTokenGet(props.userId);
	await navigator.clipboard.writeText(`http://localhost:5173/register-student-device/${response.token}`);
};
</script>

<template>
	<Button @click="handleCopy">Copy</Button>
</template>
