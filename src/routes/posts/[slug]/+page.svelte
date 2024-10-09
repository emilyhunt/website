<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/blocks/Image.svelte';
	import { formatDate } from '$lib/js/dates';
	let { data } = $props();

	const metadata = data.metadata;

	let dateInformation = 'Date undefined';
	if (metadata.date) {
		dateInformation = formatDate(metadata.date);
		if (metadata.updated) {
			dateInformation += ` | Updated: ${formatDate(metadata.updated)}`;
		}
	}
	let categories = ['Uncategorised'];
	if (data.metadata.categories) {
		categories = data.metadata.categories;
	}
	let readingTime = Math.max(Math.round(metadata.readingTime.minutes), 1);
	readingTime = readingTime === 1 ? '1 minute' : `${readingTime} minutes`;
</script>

<article>
	{#if metadata.image !== undefined}
		<div class="header-image">
			<Image
				src={metadata.image}
				alt={'Article header image.'}
				style="margin: auto; width: min(600px, 90vw); height: 250px; object-fit: cover; object-position: 50%"
			/>
		</div>
	{/if}
	<div class="info">
		<h1 class="heading">{data.metadata.title}</h1>
		<p class="category">
			{#each categories as category, i}
				{#if i !== 0}
					,
				{/if}
				<a href="/blog/{category.toLowerCase()}">{category}</a>
			{/each}
		</p>
		<p class="date">{dateInformation} | Reading time: {readingTime}</p>
	</div>
	{@render data.content()}
</article>

<style>
	.header-image {
		text-align: center;
	}
	.info {
		margin-bottom: 50px;
	}
	.heading {
		margin-bottom: 8px;
	}
	.category {
		text-transform: uppercase;
		color: var(--emilyred);
		font-weight: 800;
		font-size: 17px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.date {
		font-weight: 600;
		font-size: 17px;
		margin-top: 5px;
		margin-bottom: 0px;
	}
</style>
