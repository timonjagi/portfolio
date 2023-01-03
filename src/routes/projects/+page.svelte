<script>
	import Loader from '../../components/Loader.svelte';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Timothy Njagi | Projects</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold">Projects</h1>

{#if !data.projects}
	<div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
		<div class="absolute w-full h-full flex justify-center items-center z-20">
			<Loader />
		</div>
	</div>
{:else}
	{#each data.projects as { name, description, slug, image, tags }}
		<div class="card text-center shadow-2xl mb-20">
			<figure class="px-10 pt-10">
				<img class="rounded-xl" src={image[0].url} alt={`Cover image for ${name}`} />
			</figure>

			<div class="card-body">
				<h2 class="title">{name}</h2>
				<p>{description}</p>
				<div class="flex justify-center mt-5 space-x-2">
					{#each tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>

				<div class="justify-center card-actions">
					<a href={`/projects/${slug}`} class="btn btn-outline btn-primary">Read &rArr;</a>
				</div>
			</div>
		</div>
	{/each}
{/if}
