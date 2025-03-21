<script>
	import { page } from '$app/stores';
	import Navigation from './Navigation.svelte';

	const needsWhiteBackground = $derived($page.url.pathname === '/research');
	const textColor = $derived(needsWhiteBackground ? 'white' : 'black');
</script>

<header style:--textColor={textColor}>
	<div class="logo">
		<a href="/">
			<h2 class="site-heading">Dr. Emily L. Hunt</h2>
			<p class="site-subheading">ASTRONOMER & SCIENCE COMMUNICATOR</p>
		</a>
	</div>

	<Navigation {textColor}/>
	
</header>

<style>
	header {
		width: 100%;
		text-align: center;
		margin-bottom: 30px;
		color: var(--textColor);
	}
	a {
		color: var(--textColor);
	}
	a:link,
	a:visited {
		color: var(--textColor);
	}
	a:hover {
		color: var(--currentPageColor);
	}
	
	.site-heading {
		margin-top: 0px;
		padding: 0px;
		font-weight: 500;
		margin-bottom: 0px;
	}
	.site-subheading {
		font-weight: 700;
		margin-top: 5px;
		margin-bottom: 0px;
	}
	.logo {
		padding-top: 5px;
		padding-bottom: 20px;
	}
	/* Computers */
	@media only screen and (min-width: 801px) {
		.site-heading {
			font-size: 53px;
		}
		.site-subheading {
			font-size: 19px;
		}
	}
	/* Tablets */
	/* @media screen and (min-width: 801px) and (max-width: 999px) {
		.site-heading {
			font-size: 53px;
		}
		.site-subheading {
			font-size: 19px;
		}
	} */
	/* Phones */
	@media screen and (max-width: 800px) {
		header {
			border-bottom: 1px solid var(--textColor);
		}
		.site-heading {
			width: calc(100vw - 100px);
			font-size: calc(100vw / 12);
		}
		.site-subheading {
			width: calc(100vw - 100px);
			font-size: calc(100vw / 30);
		}
		.logo {
			padding-bottom: 15px;
		}
	}
</style>
