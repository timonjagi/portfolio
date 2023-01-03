<script>
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';
	import me from '$lib/assets/img/me.jpeg';
	export let data;
	const projects = (data && data.projects) || [];
</script>

<svelte:head>
	<title>Timothy Njagi | Developer</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<img src={me} class="max-w-sm rounded-lg shadow-2xl" />
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

		<div>
			<h1 class="text-4xl font-bold mb-12 text-center">Projects</h1>
		</div>

		<div class="grid lg:grid-cols-3 gap-6">
			{#if !projects.length}
				<div class=" w-full h-full flex justify-center z-10" in:fade={{ duration: 150 }}>
					<Loader />
				</div>
			{:else}
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
			{/if}
		</div>
	</section>

	<section class="text-gray-600 body-font relative">
		<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="lg:w-2/3  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
					style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
				/>
				<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
					<div class="lg:w-1/2 px-6">
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
						<p class="mt-1">22344 - 00l00, Nairobi County, Nairobi, Kenya</p>
					</div>
					<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
						<a
							class="text-indigo-500 leading-relaxed"
							href="mailto:timothy.njagi@gmail.com"
							target="_blank">timothy.njagi@gmail..com</a
						>
						<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
							PHONE
						</h2>
						<p class="leading-relaxed">+254 719-679-177</p>
					</div>
				</div>
			</div>
			<div class="lg:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
				<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
				<p class="leading-relaxed mb-5 text-gray-600">
					Feel free to contact me for anything web-related. Let's work!
				</p>
				<div class="relative mb-4">
					<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
					<textarea
						id="message"
						name="message"
						class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<button
					class="btn btn-primary py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>Send</button
				>
				<p class="text-xs text-gray-500 mt-3">
					Usually replies with 24 hours. If I take longer to respond, Whatsapp me on the phone
					number listed.
				</p>
			</div>
		</div>
	</section>
</div>
