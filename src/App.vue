<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';
import LoginForm from './components/features/auth/LoginForm.vue';
</script>

<template>
	<div class="h-screen flex items-center justify-center">
		<LoginForm />
	</div>
	<Toaster />
</template>
