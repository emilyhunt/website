<script>
	import ImageWithText from '$lib/blocks/ImageWithText.svelte';
</script>

<!-- Video encoded with ffmpeg, see: -->
<!-- https://jshakespeare.com/encoding-browser-friendly-video-files-with-ffmpeg/ -->
<video
	autoplay
	muted
	loop
	id="background-video"
	poster="/assets/video/research-background-thumbnail.jpg"
>
	<source src="/assets/video/research-background-1080p.webm" type="video/webm" />
	<source src="/assets/video/research-background-1080p.mp4" type="video/mp4" />
</video>

<div class="video-overlay">
	<p style="margin-top: 150px">Modern astronomy needs modern methods.</p>
	<p style="text-align: center; font-size: 150px"><a>↓</a></p>
</div>



<ImageWithText src="/assets/video/research-background-thumbnail.jpg">
	<h2>Computer science x astronomy</h2>
	<p>
		Modern astronomical datasets are huge. I'm always looking to use the latest advances in computer
		science to better understand data on our universe.
	</p>
</ImageWithText>

<div style="height: 50px"></div>

<ImageWithText swap src="/assets/posts/230324-gaia-cluster-catalogue/age_distribution_800.webp">
	<h2>Star clusters</h2>
	<p>
		Most of my time is spent on improving understanding of our galaxy's star clusters. The video on
		this page shows the locations of the clusters from <a
			href="https://ui.adsabs.harvard.edu/abs/2023arXiv230313424H/abstract"
			>my recent star cluster catalogue.</a
		>
	</p>
</ImageWithText>

<div style="height: 50px"></div>

<ImageWithText src="/assets/posts/230324-gaia-cluster-catalogue/age_distribution_800.webp">
	<h2>Stellar physics</h2>
	<p>
		You'll also find me using modern data in new ways to better understand our galaxy's stars. I'm
		particularly interested in better stellar ages and stellar variability.
	</p>
</ImageWithText>

<div style="height: 50px"></div>

<ImageWithText swap src="/assets/posts/230324-gaia-cluster-catalogue/age_distribution_800.webp">
	<h2>Open source software</h2>
	<p>
		TODO
	</p>
</ImageWithText>

<style>
	#background-video {
		position: absolute;
		object-fit: cover;
		z-index: -1;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		filter: contrast(150%) brightness(50%) saturate(150%);
	}

	.video-overlay {
		color: white;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		height: calc(100vh - 250px);
	}

	.video-overlay > p {
		font-size: 50px;
		font-family: var(--font-monospace);
	}
	.video-overlay > p > a {
		color: white;
	}
	.video-overlay > p > a:hover {
		color: var(--emilylightishgrey);
	}
    h2 {
        margin-top: 0px;
    }
</style>
