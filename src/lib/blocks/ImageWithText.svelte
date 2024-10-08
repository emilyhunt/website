<script>
	import Image from '$lib/blocks/Image.svelte';
	export let swap = false;
	export let src = '/assets/default.webp';
	export let caption = '';
	export let alt = '';
	export let style = 'width: 100%; max-width: 350px';
</script>

<div class="flex-container">
	{#if !swap}
		<div class="flex-child">
			<slot />
		</div>
	{/if}
	<div class="flex-child">
		<Image {src} {caption} {alt} {style} />
	</div>
	{#if swap}
		<div class="flex-child">
			<slot />
		</div>
	{/if}
</div>

<style>
	.flex-container {
		display: flex;
        align-items: center;
	}
    /* Computers */
    @media only screen and (min-width : 1000px){
        .flex-container {
            justify-content: space-between;
            flex-flow: row wrap;
            gap: 50px;
        }
        .flex-child {
            flex: 0 0 50%;
            max-width: 375px;
        }
    }
    /* Tablets */
    @media screen and (min-width: 801px) and (max-width: 999px) {
        .flex-container {
            justify-content: space-between;
            flex-flow: column wrap;
            gap: 50px;
        }
        .flex-child {
            flex: 0 0 auto;
            max-width: 100%;
        }
    }
    /* Phones */
    @media screen and (max-width: 800px) {
        .flex-container {
            flex-flow: column;
            gap: 0px;
        }
        .flex-child {
            flex: 0 0 auto;
            max-width: 100%;
        }
    }
</style>
