<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/ui/mode-toggle/ModeToggle.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-vue-next';
import AppHeader from '../common/AppHeader.vue';
import AppMain from '../common/AppMain.vue';
import AppWrapper from '../common/AppWrapper.vue';
import LogoLink from '../common/LogoLink.vue';
import UserDropdown from '../common/UserDropdown.vue';
import TeacherMenu from './TeacherMenu.vue';
</script>

<template>
	<AppWrapper>
		<div class="hidden border-r bg-muted/40 md:block">
			<div class="flex h-full max-h-screen flex-col gap-2">
				<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<LogoLink to="/teacher/dashboard" />
				</div>
				<div class="flex-1">
					<TeacherMenu class="px-2 lg:px-4" />
				</div>
				<div class="mt-auto p-4">
					<UserDropdown />
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<AppHeader>
				<Sheet>
					<SheetTrigger as-child>
						<Button variant="outline" size="icon" class="shrink-0 md:hidden">
							<Menu class="h-5 w-5" />
							<span class="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" class="flex flex-col">
						<TeacherMenu class="px-2 lg:px-4" />
						<div class="mt-auto"></div>
					</SheetContent>
				</Sheet>
				<div class="w-full flex-1 flex items-center justify-end">
					<ModeToggle />
				</div>
			</AppHeader>
			<AppMain>
				<router-view />
			</AppMain>
		</div>
	</AppWrapper>
</template>
