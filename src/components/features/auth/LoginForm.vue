<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Logo from '@/components/ui/Logo.vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { useUserStore } from '@/stores/user-store';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const formSchema = toTypedSchema(
	z.object({
		loginName: z.string().nonempty(),
		password: z.string().nonempty(),
	})
);

const userStore = useUserStore();
const { toast } = useToast();
const { handleSubmit } = useForm({
	validationSchema: formSchema,
});

const onSubmit = handleSubmit(async ({ loginName, password }) => {
	try {
		await userStore.login(loginName, password);

		toast({
			title: 'Login successful',
			description: "You're now logged in",
		});
	} catch (e) {
		toast({
			title: 'Login failed',
			description: e instanceof Error ? e.message : 'An unknown error occurred',
			variant: 'destructive',
		});
	}
});
</script>

<template>
	<Card class="w-full max-w-md">
		<CardHeader class="flex items-center justify-center">
			<div class="inline-flex flex-col items-center gap-2">
				<Logo />
				<CardTitle class="font-semibold text-base">AttendMe</CardTitle>
			</div>
		</CardHeader>
		<form @submit="onSubmit">
			<CardContent class="grid gap-4">
				<FormField v-slot="{ componentField }" name="loginName">
					<FormItem>
						<FormLabel>Login</FormLabel>
						<FormControl>
							<Input type="text" placeholder="shadcn" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>

				<FormField v-slot="{ componentField }" name="password">
					<FormItem>
						<FormLabel>Password</FormLabel>
						<FormControl>
							<Input type="password" placeholder="shadcn" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>
			</CardContent>
			<CardFooter>
				<Button class="w-full">Login</Button>
			</CardFooter>
		</form>
	</Card>
</template>
