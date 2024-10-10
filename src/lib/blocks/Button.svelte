<script>
	let { href, target = '_self', style = '', short, alt, children } = $props();
	const finalStyle = short
		? 'margin-top: 0px; padding-top: 3px; padding-bottom: 5px; ' + style
		: style;
	const mainColor = $derived(alt ? 'var(--emilylightishgrey)' : 'var(--emilyred)');
	const hoverColor = $derived(alt ? 'var(--emilygrey)' : 'var(--emilyred-hover)');
	const textColor = $derived(alt ? 'white' : 'white');
</script>

<a {href} {target}>
	<button
		style={finalStyle}
		style:--mainColor={mainColor}
		style:--hoverColor={hoverColor}
		style:--textColor={textColor}
	>
		<p>
			{#if children}
				{@render children()}
			{/if}
		</p>
	</button>
</a>

<style>
	p {
		margin: 0px;
	}
	button {
		background-color: var(--mainColor);
		color: var(--textColor);
		padding: 10px;
		border: none;
		border-radius: 10px;
		margin: 10px 10px 10px 0px;
	}
	button:hover {
		background-color: var(--hoverColor);
	}
</style>
