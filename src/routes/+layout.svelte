<script>
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';

	import '../app.postcss';
	import { onMount } from 'svelte';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
	import { themeChange } from 'theme-change';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Navbar />

<!-- {#if Boolean($navigating)}
	<div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
		<div class="absolute w-full h-full bg-white dark:bg-cyan-800 opacity-50 z-10" />
		<div class="absolute w-full h-full flex justify-center items-center z-20">
			<Loader />
		</div>
	</div>
{/if} -->

<main class="container mx-auto px-4">
	<slot />
</main>

<Footer />
