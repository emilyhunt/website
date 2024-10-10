// Even though this site is static, this actually has to be a .server.js:
// https://www.reddit.com/r/sveltejs/comments/1892xq6/i_need_some_help_with_sveltekits_dynamic_routing/

import { getPosts } from '../../lib/js/posts';
import { redirect } from '@sveltejs/kit';

// src/routes/blog/[category]/[page]
export async function load({ params }) {
	const { category, page } = checkPath(params);
	return await getPosts({
		category: category,
		page: page
	});
}

/* 
Function that checks path validity and is able to perform redirects. 
Returns default values for category and page if they are missing.
*/
function checkPath(params) {
	deduplicateIndexPages(params);
	const { category, page } = getParametersOrGetDefault(params);
	deduplicateMixedCasePages(category, page);
	return { category, page };
}

function getParametersOrGetDefault(params) {
	const category = params.category ? params.category : 'all';
	const page = params.page ? parseInt(params.page) : 1;
	return { category, page };
}

function deduplicateMixedCasePages(category, page) {
	const categoryLowerCase = category.toLowerCase();
	if (categoryLowerCase !== category) {
		redirect(301, `/blog/${categoryLowerCase}/${page}`);
	}
}

function deduplicateIndexPages(params) {
	// /blog/all -> /blog
	if (params.page === undefined && params.category === 'all') {
		redirect(301, '/blog');
	}
	// /blog/[category]/{1, 0, -1, ...} -> /blog/[category]
	if (params.page <= 1) {
		const categoryLowerCase = params.category.toLowerCase();
		// SHORTCUT: skip a second redirect if we're also in 'all' cat
		if (categoryLowerCase === 'all') {
			redirect(301, '/blog');
		}
		redirect(301, `/blog/${categoryLowerCase}`);
	}
}
