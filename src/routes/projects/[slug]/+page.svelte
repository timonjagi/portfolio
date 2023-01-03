<script>
	import MarkdownIt from 'markdown-it';
	export let data;

	const { project } = data;
	const { name, description, tags, content, image, sourceCode, demo, publishedAt } = project;
	console.log(image);
	// const md = new MarkdownIt();
	// const renderedContent = md.render(content);
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx:20 xl:-mx-38 mb-5">
	<img src={image[0].url} alt={`Cover image for ${name}`} class="max-h-fit w-full" />
</div>

<h1 class="text-4xl font-semibold mb-5">{name}</h1>

<!-- {#each authors as author}
	<a href="/" class="inline-flex items-center mb-3">
		<img
			src={author.picture.url}
			alt={author.name}
			class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
		/>

		<span class="flex-grow flex flex-col pl-4">
			<span class="title-font font-medium">{author.name}</span>
			<span class="text-secondary text-xs tracking-width mt-0.5">{authorTitle}</span>
		</span>
	</a>
{/each} -->

<p class="text-secondary text-xs tracking-widest font-semibold">
	{new Date(publishedAt).toDateString()}
</p>

<div class="mb-5 flex justify-between">
	<div>
		{#if tags}
			<div class="mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">
						{tag}
					</span>{/each}
			</div>
		{/if}
	</div>
</div>

<article class="prose">
	{description}
</article>
.
