<script>
	import { page } from '$app/stores';

	function pathIs(string) {
		return $page.url.pathname === string;
	}

	function pathStartsWith(string) {
		return $page.url.pathname.startsWith(string);
	}

	const needsWhiteBackground = $derived($page.url.pathname === '/research');
	const textColor = $derived(needsWhiteBackground ? 'white' : 'black');
	const currentPageColor = $derived(needsWhiteBackground ? 'var(--emilylightishgrey)' : 'var(--emilyred)');
</script>

<header style:--textColor={textColor} style:--currentPageColor={currentPageColor}>
	<div class="logo">
		<h2 class="site-heading">Dr. Emily L. Hunt</h2>
		<p class="site-subheading">ASTRONOMER & SCIENCE COMMUNICATOR</p>
	</div>
	<div class="navigation">
		<a href="/" class:current-page={pathIs('/')}>Home</a>
		<a href="/research/" class:current-page={pathStartsWith('/research')}>Research</a>
		<a href="/blog/" class:current-page={pathStartsWith('/blog')}>Blog</a>
		<a href="https://cv.emily.space" target="_blank">CV</a>
		<a href="/about/" class:current-page={pathStartsWith('/about')}>About</a>
	</div>
</header>

<style>
	header {
		width: 100%;
		text-align: center;
		margin-bottom: 30px;
		color: var(--textColor);
	}
	.navigation {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		justify-items: center;
		flex-flow: row wrap;
		width: min(1300px, 85vw);
		border-top: 1px solid var(--textColor);
		border-bottom: 1px solid var(--textColor);
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.navigation > a:link,
	.navigation > a:visited {
		color: var(--textColor);
	}
	.navigation > a:hover {
		color: var(--currentPageColor);
	}
	.navigation > a:not(:first-child) {
		margin-left: 30px;
	}
	.current-page {
		color: var(--currentPageColor) !important;
	}
	.navigation > a {
		text-transform: uppercase;
		font-size: 18pt;
		font-weight: 650;
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
		margin-top: 5px;
		margin-bottom: 20px;
	}
	/* Computers */
	@media only screen and (min-width: 1000px) {
		.site-heading {
			font-size: 53px;
		}
		.site-subheading {
			font-size: 19px;
		}
	}
	/* Tablets */
	@media screen and (min-width: 801px) and (max-width: 999px) {
		.site-heading {
			font-size: 53px;
		}
		.site-subheading {
			font-size: 19px;
		}
	}
	/* Phones */
	@media screen and (max-width: 800px) {
		.site-heading {
			font-size: 40px;
		}
		.site-subheading {
			font-size: 16px;
		}
	}
</style>
