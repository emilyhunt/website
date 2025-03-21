<script>
	import ImageWithText from '$lib/blocks/ImageWithText.svelte';
	import Button from '../../lib/blocks/Button.svelte';
	import CallToAction from '../../lib/blocks/CallToAction.svelte';
	import ResearchVideo from './ResearchVideo.svelte';
	import { socials } from '$lib/config.js';

	let spacing = '70px';
</script>

<!-- Video encoded with ffmpeg, see: -->
<!-- https://jshakespeare.com/encoding-browser-friendly-video-files-with-ffmpeg/ -->

<ResearchVideo />

<div style="height: 50px"></div>

<h1 id="info">My research themes</h1>

<ImageWithText src="/assets/video/research-background-thumbnail.jpg">
	<h2>Computer science x astronomy</h2>
	<p>
		Modern astronomical datasets are huge. I'm always looking to use the latest advances in computer
		science to better understand data on our universe.
	</p>
	<Button short alt href="/blog/machine learning">Relevant papers</Button>
</ImageWithText>

<ImageWithText swap src="/assets/posts/230324-gaia-cluster-catalogue/age_distribution_800.webp" margin={spacing}>
	<h2>Star clusters</h2>
	<p>
		Most of my time is spent on improving understanding of our galaxy's star clusters. The video on
		this page shows the locations of the clusters from <a
			href="https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract"
			>my recent star cluster catalogue.</a
		>
	</p>
	<Button short alt href="/blog/star clusters">Relevant papers</Button>
</ImageWithText>

<ImageWithText src="/assets/content/pl_relation.jpg" style="height: 300px;" margin={spacing}>
	<h2>Stellar physics</h2>
	<p>
		You'll also find me using modern data in new ways to better understand our galaxy's stars. I'm
		particularly interested in better stellar ages and stellar variability.
	</p>
	<Button short alt href="/blog/variable stars">Relevant papers</Button>
</ImageWithText>

<ImageWithText swap src="/assets/content/ocelot.png" margin={spacing}>
	<h2>Open source software</h2>
	<p style="margin-bottom: 10px">
		Last off, I'm also strongly committed to open-source software principles. I think that science
		is stronger when we all work together.
	</p>
	<Button short alt href="https://github.com/emilyhunt" target="_blank">Check out my GitHub</Button>
</ImageWithText>

<CallToAction padding="60px" margin="100px">
	<h2>Find out more:</h2>
	<Button
		href="https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0002-5555-8058&sort=date+desc"
		target="_blank">My publications on ADS</Button
	>
	<Button href="https://cv.emily.space" target="_blank">Check out my CV</Button>
	<Button href="/blog/paper summaries">Blog posts about my papers</Button>
</CallToAction>

<h2>Want to work together? Email me!</h2>

<p>
	I strongly believe in collaborative science. <a href={socials.email}>Send me an email</a> if you want
	to work together!
</p>

<style>
	h2 {
		margin-top: 0px;
	}
</style>
