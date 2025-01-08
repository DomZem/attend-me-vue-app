<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast/use-toast';
import { apiClient } from '@/main';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useRoute, useRouter } from 'vue-router';
import * as z from 'zod';

const registerDeviceSchema = toTypedSchema(
	z.object({
		deviceName: z.string().nonempty(),
		studentName: z.string().nonempty(),
		studentSurname: z.string().nonempty(),
		albumIdNumber: z.number(),
	})
);

const { toast } = useToast();
const router = useRouter();
const route = useRoute();
const token = route.params.token as string;

const { handleSubmit } = useForm({
	validationSchema: registerDeviceSchema,
});

const onSubmit = handleSubmit(async (data) => {
	try {
		const response = await apiClient.userDeviceRegisterWithToken(token, {
			deviceName: data.deviceName,
			studentName: data.studentName,
			studentSurname: data.studentSurname,
			albumIdNumber: data.albumIdNumber,
		});

		console.log('register device response', response);

		const isSuccess = !!response.token;

		toast({
			title: isSuccess ? 'Device registered' : 'Failed to register device',
			description: isSuccess ? 'Device has been registered successfully' : 'An unknown error occurred',
			variant: isSuccess ? 'default' : 'destructive',
		});

		if (isSuccess) {
			router.push('/student/dashboard');
		}
	} catch (e) {
		toast({
			title: 'Failded to register device',
			description: e instanceof Error ? e.message : 'An unknown error occurred',
			variant: 'destructive',
		});
	}
});
</script>

<template>
	<Card class="w-full max-w-md">
		<CardHeader>
			<CardTitle class="text-2xl">Register Device</CardTitle>
		</CardHeader>
		<form @submit="onSubmit">
			<CardContent class="grid gap-4">
				<FormField v-slot="{ componentField }" name="deviceName">
					<FormItem>
						<FormLabel>Device Name</FormLabel>
						<FormControl>
							<Input type="text" placeholder="Samsung Galaxy A10" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<FormField v-slot="{ componentField }" name="studentName">
					<FormItem>
						<FormLabel>Student Name</FormLabel>
						<FormControl>
							<Input type="text" placeholder="Anakin" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<FormField v-slot="{ componentField }" name="studentSurname">
					<FormItem>
						<FormLabel>Student Surname</FormLabel>
						<FormControl>
							<Input type="text" placeholder="Skywalker" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<FormField v-slot="{ componentField }" name="albumIdNumber">
					<FormItem>
						<FormLabel>Student Index</FormLabel>
						<FormControl>
							<Input type="number" placeholder="6666" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>
			</CardContent>
			<CardFooter>
				<Button class="w-full">Register Device</Button>
			</CardFooter>
		</form>
	</Card>
</template>
