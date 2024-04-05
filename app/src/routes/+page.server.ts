import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {};

export const actions = {
	login: async ({ cookies, request, url }) => {},
	register: async ({ cookies, request, url }) => {},
	logout: async ({ cookies, request, url }) => {}
} satisfies Actions;
