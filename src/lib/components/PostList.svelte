<script>
	import { postsPerPage } from '$lib/config.js';
	import PostCard from './PostCard.svelte';
	let { posts, page, total } = $props();

	const totalPages = Math.ceil(total / postsPerPage);
</script>

<!-- Display posts -->
{#if posts}
	{#each posts as post}
		<PostCard {post} />
	{/each}
{:else}
	<h2>Oops!</h2>
	<p>No posts found.</p>
	<a href="/blog">Return to blog</a>
{/if}

<!-- Next page options -->

<div class="page-container">
	<div class="button-container" style="text-align: left">
		{#if page > 1}
		 <p><a href="/blog/pages/{page - 1}">Previous page</a></p>
		{/if}
	</div>
	
	<div class="button-container" style="text-align: center">
		<p>Page {page} of {totalPages}</p>
	</div>
	
	<div class="button-container" style="text-align: right">
		{#if page < totalPages}
		 <p><a href="/blog/pages/{page + 1}">Next page</a></p>
		{/if}
	</div>
</div>

<style>
	.page-container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin-top: 20px;
	}
	.button-container {
		width: 30%;
		flex: 0 0 30%;
	}
</style>
