<script>
	import { formatDate } from '$lib/js/dates';
	let { post } = $props();
	const link = `/posts/${post.slug}`;
</script>

<div class="container">
	<div class="image-item">
		<a href={link}><img src={post.thumbnail} alt="Post thumbnail for blog post {post.title}" /></a>
	</div>
	<div class="text-item">
		<h3 style="margin-top: 0px; margin-bottom: 10px"><a href={link}>{post.published ? "" : "(UNPUBLISHED) "}{post.title}</a></h3>
		<div class="red-line"></div>
		<p style="margin-top: 0px; margin-bottom: 0px;">
			<span class="category">{post.categories[0]}</span>
			<span class="date"> - {formatDate(post.date)}</span>
		</p>
	</div>
</div>

<style>
	.container {
		background-color: var(--emilylightgrey);
		border-radius: 20px;
		padding: 20px;
		width: calc(100% - 40px); /* Width - padding */
		margin-bottom: 20px;
	}
	.image-item {
		flex: 0 0 20%;
		padding: 0px;
	}
	.text-item {
		flex: 1 1 auto;
		/* max-width: calc(75% - 60px); */
		text-overflow: ellipsis;
	}
	.red-line {
		background-color: var(--emilyred);
		height: 3px;
		width: 80px;
		border-radius: 2px;
		margin: 0px;
	}
	.category {
		color: var(--emilyred);
		text-transform: uppercase;
		font-weight: 750;
		font-size: 14px;
	}
	.date {
		margin-left: 0px;
		font-weight: 500;
		font-size: 14px;
	}
	img {
		object-fit: cover;
		object-position: 50%;
		width: 100%;
	}
	a {
		color: black;
	}
	a:hover {
		color: var(--emilyred);
	}

	/* Computers */
	@media only screen and (min-width: 1000px) {
		.container {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 20px;
		}
		img {
			height: 120px;
		}
	}
	/* Tablets */
	@media screen and (min-width: 801px) and (max-width: 999px) {
		.container {
			display: flex;
			flex-flow: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 20px;
		}
		img {
			height: 120px;
		}
	}
	/* Phones */
	@media screen and (max-width: 800px) {
		.container {
			display: flex;
			flex-flow: column wrap;
			justify-content: flex-start;
			align-items: left;
			gap: 20px;
		}
		img {
			height: 100%;
		}
	}
</style>
