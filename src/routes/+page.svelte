<script>
	import image from 'markdown-it/lib/rules_inline/image';
	import { each } from 'svelte/internal';

	export let data;
	const { projects } = data;
	console.log(projects);
</script>

<!-- <pre>{JSON.stringify(projects, null, 2)}</pre> -->

<svelte:head>
	<title>Timothy Njagi | Developer</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 class="text-5xl font-bold">Hey, I'm Tim Njagi</h1>
			<p class="py-6">Web developer from Nairobi, Kenya</p>
			<button class="btn btn-primary">About me</button>
		</div>
	</div>
</div>
<div class="container my-24 px-6 mx-auto">
	<section class="mb-32 text-gray-800">
		<style>
			.zoom:hover img {
				transform: scale(1.1);
			}
		</style>

		<h2 class="text-3xl font-bold mb-12 text-center">Projects</h2>

		<div class="grid lg:grid-cols-3 gap-6">
			{#each projects as project}
				<div
					class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
					style="background-position: 50%;"
					data-mdb-ripple="true"
					data-mdb-ripple-color="dark"
				>
					<img
						src={project.image[0].url}
						alt={project.name}
						class="w-full transition duration-300 ease-linear align-middle"
					/>
					<a href={`/projects/${project.slug}`}>
						<div
							class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
							style="background-color: rgba(0, 0, 0, 0.3)"
						>
							<div class="flex justify-start items-end h-full">
								<h5 class="text-lg font-bold text-white m-6">{project.name}</h5>
							</div>
						</div>
						<div class="hover-overlay">
							<div
								class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
								style="background-color: rgba(253, 253, 253, 0.15)"
							/>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>
</div>
