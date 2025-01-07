<script setup lang="ts">
import QrcodeVue from 'qrcode.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const token = ref('Initial Token');

const fetchToken = async () => {
	try {
		// const response = await apiClient.userAttendanceTicketGet();
		// console.log('=== response ===', response);
		// token.value = response.value;
	} catch (error) {
		console.error('Error fetching token:', error);
	}
};

onMounted(() => {
	fetchToken();
	const intervalId = setInterval(fetchToken, 3000);

	onUnmounted(() => {
		clearInterval(intervalId);
	});
});
</script>

<template>
	<div class="h-full flex items-center justify-center">
		<QrcodeVue :value="token" :size="200" level="H" />
	</div>
</template>
