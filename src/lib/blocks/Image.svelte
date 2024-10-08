<script>
	export let src = '/assets/default.webp';
	export let caption = '';
	export let alt = '';
	export let style = '';

	// If no alt text is set, default to just setting it to the caption
	const altText = alt ? alt : caption;
</script>

<!-- <p>{imagePath}</p> -->

<!-- <img class={revealClass} style={style} src={imagePath} alt={altText}/> -->

<div>
	<img style={style} src={src} alt={altText} />

	{#if caption}
		<p class="caption">{caption}</p>
	{/if}
</div>

<style>
	.caption {
		color: var(--emilylightishgrey);
		font-size: 15pt;
		text-align: center;
		margin-top: -15pt;
	}
</style>
