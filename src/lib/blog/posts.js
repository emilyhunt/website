async function getPosts() {
    let posts = [];

    const paths = import.meta.glob("/src/routes/posts/*.md", {eager: true});

    for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			console.log(metadata)
		}
	}

}