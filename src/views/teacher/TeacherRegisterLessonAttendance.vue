<script setup lang="ts">
const handleDetect = (detectedCode) => {
	console.log(detectedCode);
};
</script>

<template>
	<qrcode-stream @detect="handleDetect"></qrcode-stream>
</template>
