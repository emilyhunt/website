<!-- svelte-ignore non_reactive_update -->
<script>
	import Image from '$lib/blocks/Image.svelte';
	let { data } = $props();

	const metadata = data.metadata;

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
	}

	let dateInformation = 'Date undefined';
	if (metadata.date) {
		dateInformation = formatDate(metadata.date);
		if (metadata.updated) {
			dateInformation += ` | Last updated: ${formatDate(metadata.updated)}`;
		}
	}
	let primaryCategory = 'Uncategorised';
	if (data.metadata.categories) {
		primaryCategory = data.metadata.categories[0];
	}
</script>

<article>
	{#if metadata.image !== undefined}
		<div class="header-image">
			<Image
				src={metadata.image}
				alt={"Article header image."}
				style="margin: auto; width: min(600px, 90vw); height: 250px; object-fit: cover; object-position: 50%"
			/>
		</div>
	{/if}
	<div class="info">
		<h1 class="heading">{data.metadata.title}</h1>
		<p class="category">{primaryCategory}</p>
		<p class="date">{dateInformation}</p>
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
	}
</style>
