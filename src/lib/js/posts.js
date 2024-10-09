import { dev } from '$app/environment';
import { postsPerPage } from '../config';

/* Adapted from https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/lib/assets/js/fetchPosts.js */
export async function getPosts({ cursor = 0, limit = postsPerPage, category = '' }) {
	let posts = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	// Sort by date
	posts.forEach((post) => post.date = new Date(post.date));
	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Remove posts based on criteria
	if (!dev) {
		sortedPosts = sortedPosts.filter((post) => post.published !== false);
	}
	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}
	const totalPosts = sortedPosts.length;
	if (cursor) {
		sortedPosts = sortedPosts.slice(cursor);
	}
	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	// Select only desired metadata information
	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		date: post.date,
		updated: post.updated,
		published: post.published === undefined ? true : post.published,
		// authors: post.authors,
		tags: post.tags,
		categories: post.categories,
		description: post.description,
		thumbnail: post.thumbnail,
		image: post.image,
		slug: post.slug
	}));

	return {
		posts: sortedPosts,
		totalPosts: totalPosts
	};
}
