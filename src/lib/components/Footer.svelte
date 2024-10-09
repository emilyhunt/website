<script>
	import { socials } from '$lib/config.js';
	import { icons } from '$lib/icons.js';
	import { getPosts } from '$lib/js/posts.js';

	const year = new Date().getFullYear();

	async function fetchRecentPosts() {
		return getPosts({ limit: 3 });
	}
	let recentPosts = fetchRecentPosts();
</script>

<footer>
	<div class="footer">
		<div class="footer-item">
			<h6>Get in touch:</h6>
			<div class="socials-container">
				<div class="socials">
					{#each Object.entries(socials) as [platform, url]}
						<div class="social-logo">
							<a href={url}>
								<svelte:component this={icons[platform]} />
							</a>
						</div>
					{/each}
				</div>
			</div>
			<p style="margin-top: 35px; margin-bottom: 0px"><a href="https://github.com/emilyhunt/website-v2">Website source code</a></p>
			<p style="margin-top: 5px; margin-bottom: 25px">© Emily L. Hunt {year}</p>
			
		</div>
		<div class="footer-item">
			<h6>Recent posts:</h6>
			<ul>
				{#await recentPosts then { posts }}
					{#each posts as post}
						<li><a href="/posts/{post.slug}">{post.title}</a></li>
					{/each}
				{/await}
			</ul>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 100px;
		padding-top: 30px;
		border-top: 1px solid black;
	}
	.footer {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-flow: row wrap;
		width: min(1000px, 85vw);
	}
	.footer-item {
		flex: 1 0 auto;
		max-width: min(400px, 85vw);
	}
	.socials {
		display: flex;
		flex-flow: row wrap;
		justify-content: left;
		align-items: center;
		gap: 25px;
		width: 100%;
	}
	.social-logo {
		flex: 0 0 auto;
		font-size: 25px;
	}

	h6 {
		margin-top: 0px;
		margin-bottom: 10px;
	}

	@media only screen and (min-width : 1000px){

    }
    /* Tablets */
    @media screen and (min-width: 801px) and (max-width: 999px) {
		.social-logo {
			font-size: 35px
		}
		.socials {
			gap: 28px;
		}
		.footer-item {
			flex: 1 0 auto;
			max-width: min(250px, 85vw);
		}
    }
    /* Phones */
    @media screen and (max-width: 800px) {
		.socials {
			justify-content: center;
		}
		.social-logo {
			font-size: 35px
		}
		.footer-item {
			text-align: center;
		}
		li {
			list-style-type: none;
			margin: 10px 0px 10px 0px;
		}
		ul {
			padding-left: 0px;
		}
		h6 {
			margin-top: 10px;
		}
    }
</style>
