// src/routes/posts/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	return {
		content: post.default,
		metadata: post.metadata
	};
}
