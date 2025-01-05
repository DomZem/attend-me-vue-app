<script setup lang="ts">
import { ApiClient } from '@/api/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast/use-toast';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const formSchema = toTypedSchema(
	z.object({
		loginName: z.string().nonempty(),
		password: z.string().nonempty(),
	})
);

const { toast } = useToast();
const { handleSubmit } = useForm({
	validationSchema: formSchema,
});

const onSubmit = handleSubmit(async ({ loginName, password }) => {
	try {
		const client = new ApiClient('https://attendme-backend.runasp.net');
		const response = await client.userLogin(loginName, password);

		if (response.token) {
			toast({
				title: 'Login successful',
				description: "You're now logged in",
			});
			return;
		}

		toast({
			title: 'Login failed',
			description: 'Invalid login or password',
			variant: 'destructive',
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
	<Card class="w-full max-w-sm">
		<CardHeader>
			<CardTitle class="text-2xl">Login </CardTitle>
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
				<Button class="w-full"> Sign in </Button>
			</CardFooter>
		</form>
	</Card>
</template>
