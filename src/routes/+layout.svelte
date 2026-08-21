<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="icon" href="/profile.webp" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>

	<title>ToothyJarl — Aidan Gill</title>
</svelte:head>

{@render children()}
