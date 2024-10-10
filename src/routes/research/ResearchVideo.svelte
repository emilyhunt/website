<video
	autoplay
	muted
	loop
	playsinline
	id="background-video"
	poster="/assets/video/research-background-thumbnail.jpg"
>
	<source src="/assets/video/research-background-1080p.mp4" type="video/mp4" />	
	<source src="/assets/video/research-background-1080p.webm" type="video/webm" />
</video>

<div class="video-overlay">
	<p style="margin-top: calc(30vh - 110px); text-shadow: 0 0 10px black; font-weight: 600;">
		Modern methods <br />for modern astronomy.
	</p>
	<p class="arrow" style="margin-top: 5vh; font-size: 120px"><a href="#info">↓</a></p>
</div>

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
		position: relative;
        z-index: 0;
		left: 0;
		top: 0px;
		color: white;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
		width: 100%;
		height: calc(100vh - 200px);
		text-align: center;
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
    @media only screen and (max-height: 700px) {
        .arrow {
            display: none;
        }
    }
</style>
