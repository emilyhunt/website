import { postsPerPage } from '$lib/config';
import { getPosts } from '$lib/js/posts';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async ({ params }) => {
	const { page } = params || 1;

	const options = {
		cursor: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await getPosts(options);

	return json(posts);
};
