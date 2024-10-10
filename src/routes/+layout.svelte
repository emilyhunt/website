<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	/* SITEWIDE CSS IMPORTS */
	import '$lib/css/main.css';
	import '$lib/css/variables.css';
	import '$lib/css/fonts.css';
	import '$lib/css/code.css';
</script>

<Header/>

<div class="slot-container">
	<slot />
</div>

<Footer/>

<style>
	.slot-container {
		margin-left: auto;
		margin-right: auto;
		width: var(--content-width);  /* PAGE WIDTH */
	}
</style>
