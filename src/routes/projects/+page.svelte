<script>
	import { resolve } from '$app/paths';
	import Footer from '$lib/Footer.svelte';
	import Project from '$lib/Project.svelte';
</script>

<div class="mx-auto max-w-3xl px-6 md:px-10">
	<header class="flex items-center justify-between pt-10 pb-16">
		<a href={resolve('/')} class="font-mono text-xs tracking-widest text-muted hover:text-ink"
			>← TOOTHYJARL</a
		>
	</header>
	<h1 class="mb-3 font-display text-4xl font-semibold sm:text-5xl">Projects</h1>
	<p class="mb-14 max-w-md text-lg text-muted">
		A curated list of things I've built — sites, tools, whatever I'm into at the moment.
	</p>
	<section class="mb-14">
		<p class="mb-4 font-mono text-xs tracking-widest text-accent">WEBSITES</p>
		<div class="border-t border-line">
			<Project
				date="Aug 2026"
				title="ToothyJarl"
				description="The site you're looking at right now..."
			/>
			<Project
				href="https://cutsbyranbir.com"
				date="Jul 2026"
				title="Cuts by Ranbir"
				description="A local barber site showcasing cuts, pricing, and services."
			/>
			<Project
				href="https://aeries.toothyjarl.com"
				date="Dec 2025"
				title="Aeries Portal"
				description="A custom portal that brings Aeries grades and class information into a simpler interface."
			/>
			<Project
				href="https://radiusproductions.com"
				date="Oct 2024"
				title="Radius Productions"
				description="Marketing site for a video production studio."
			/>
		</div>
	</section>
	<section class="mb-14">
		<p class="mb-4 font-mono text-xs tracking-widest text-accent">TOOLS</p>
		<div class="border-t border-line">
			<Project
				href="https://minga.toothyjarl.com"
				date="Aug 2026"
				title="Minga for Apple Wallet"
				description="Lets students add their Minga ID to Apple Wallet."
			/>
		</div>
	</section>
	<Footer />
</div>
