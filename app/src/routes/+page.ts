import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = true;
export const csr = true;

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const load: PageLoad = async ({ fetch }) => {
	const todos: Todo[] = await fetch('https://jsonplaceholder.typicode.com/todos/').then(
		(response) => response.json()
	);
	return { todos };
};
