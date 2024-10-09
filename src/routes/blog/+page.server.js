export const load = async ({ fetch }) => {
	const postRes = await fetch('/api/posts/page/1');
	const posts = await postRes.json();

	const totalRes = await fetch('/api/posts/count');
	const total = await totalRes.json();

	return { posts, total };
};
