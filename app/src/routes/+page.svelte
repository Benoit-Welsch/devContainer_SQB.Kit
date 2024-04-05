<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data && data.todos}
	{@const todos = data.todos}
	<div class="todos">
		{#each todos as todo}
			<div class="todo" class:completed={todo.completed}>
				{todo.id} - {todo.title}
			</div>
		{/each}
	</div>
{/if}

<style>
	.todos {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 0.5rem;
		flex-direction: column;
		font-weight: bold;
		color: #333;
	}

	.todo {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.todo.completed {
		text-decoration: line-through;
		color: #ccc;
	}
</style>
