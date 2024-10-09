<script>
	import PostCard from './PostCard.svelte';
	let { posts, page, total, category } = $props();
</script>

<!-- Display posts -->
{#if posts && posts.length}
	{#each posts as post}
		<PostCard {post} />
	{/each}
{:else}
	<h2>Oops!</h2>
	<p>No posts were found under this category.</p>
	{#if category === 'all'}
		<p><a href="/blog">Return to blog</a></p>
	{/if}
{/if}

<!-- "Back to main blog" on last page, when we have 3 or more pages -->
{#if page === total && page > 2}
	<p style="text-align: center; margin: 30px 0px 30px 0px">
		<a href="/blog/{category}">↻ Return to first page</a>
	</p>
{/if}

<!-- Next page options -->
<div class="page-container">
	<div class="button-container" style="text-align: left">
		{#if page > 1}
			<p><a href="/blog/{category}/{page - 1}">Previous page</a></p>
		{/if}
	</div>

	<div class="button-container" style="text-align: center">
		<p>Page {page} of {total}</p>
	</div>

	<div class="button-container" style="text-align: right">
		{#if page < total}
			<p><a href="/blog/{category}/{page + 1}">Next page</a></p>
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
