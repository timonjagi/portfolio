<script>
	export let data;

	const { page } = data;
	console.log(page);
	const { title, slug, content } = page;
</script>

<svelte:head>
	<title>Timothy Njagi | {title}</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold">{page.title}</h1>
<article class="prose">{@html page.content.html}</article>
