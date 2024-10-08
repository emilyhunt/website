<script>
	import { page } from '$app/stores';
	import '$lib/css/main.css';
	import '$lib/css/variables.css';
	import '$lib/css/fonts.css';
	const year = new Date().getFullYear();

	function pathIs(string) {
		return $page.url.pathname === string;
	}

	function pathStartsWith(string) {
		return $page.url.pathname.startsWith(string);
	}
</script>

<header>
    <div class="logo">
	    <h2 class="site-heading">Dr. Emily L. Hunt</h2>
	    <p class="site-subheading">ASTRONOMER & SCIENCE COMMUNICATOR</p>
    </div>
	<div class="navigation">
		<a href="/" class:current-page={pathIs('/')}>Home</a>
		<a href="research/" class:current-page={pathStartsWith('/research')}>Research</a>
		<a href="blog/" class:current-page={pathStartsWith('/blog')}>Blog</a>
		<a href="https://cv.emily.space" target="_blank">CV</a>
		<a href="about/" class:current-page={pathStartsWith('/about')}>About</a>
	</div>
</header>

<div class="slot-container">
	<slot />
</div>

<footer>
	<div class="footer">
		<p>© Emily L. Hunt {year}</p>
	</div>
</footer>

<style>
	header {
		width: 100%;
		text-align: center;
	}
	.navigation,
	.footer {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
		justify-items: center;
		flex-flow: row wrap;
		width: min(1300px, 85vw);
	}
	.navigation {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.navigation > a:link,
	.navigation > a:visited {
		color: black;
	}
	.navigation > a:hover {
		color: var(--emilyred);
	}
	.navigation > a:not(:first-child) {
		margin-left: 30px;
	}
	.current-page {
		color: var(--emilyred) !important;
	}
	.footer {
		margin-top: 100px;
		border-top: 1px solid black;
	}
	.slot-container {
		margin-left: auto;
		margin-right: auto;
		width: min(800px, 95vw);
	}
    .navigation > a {
		text-transform: uppercase;
		font-size: 20pt;
		font-weight: 400;
	}
    .site-heading {
        margin-top: 0px;
        padding: 0px;
        font-size: 40pt;
        font-weight: 500;
        margin-bottom: 0px;
    }
    .site-subheading {
        font-size: 14pt;
        font-weight: 700;
        margin-top: 5px;
        margin-bottom: 0px;
    }
    .logo {
        margin-top: 5px;
        margin-bottom: 20px;
    }
</style>
