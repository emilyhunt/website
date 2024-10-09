<script>
	import PostList from "../../lib/components/PostList.svelte";

	let { data } = $props();
</script>

<h1>Blog</h1>

<PostList posts={data.posts} page={1} total={data.total}/>
