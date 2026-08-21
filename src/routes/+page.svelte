<script>
	import { resolve } from '$app/paths';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col bg-paper font-body text-ink antialiased md:flex-row">
	<aside
		class="flex flex-col items-start justify-center gap-6 border-b border-line px-8 py-14 md:w-[38%] md:border-r md:border-b-0 md:px-14"
	>
		<img
			src="/profile.webp"
			alt="Aidan"
			class="h-40 w-40 rounded-2xl border border-line object-cover sm:h-44 sm:w-44"
		/>

		<div>
			<h1 class="mb-2 font-display text-4xl leading-none font-semibold sm:text-5xl">
				ToothyJarl
			</h1>

			<p class="font-mono text-xs tracking-widest text-muted">AIDAN GILL</p>
		</div>
	</aside>

	<main class="flex flex-1 flex-col justify-center px-8 py-14 md:px-16">
		<p class="mb-8 max-w-md font-display text-2xl leading-snug sm:text-3xl">
			I like coding stuff.
			<span class="text-muted"> Sites, tools, frameworks — whatever interests me. </span>
		</p>

		<ul class="mb-10 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
			<li>C++</li>
			<li class="text-line">·</li>
			<li>TypeScript</li>
			<li class="text-line">·</li>
			<li>Lua</li>
		</ul>

		<a
			href={resolve('/projects')}
			class="mb-16 inline-flex w-fit items-center gap-2 font-display text-lg font-medium text-ink transition-colors duration-150 hover:text-accent"
		>
			See my work
			<span aria-hidden="true">→</span>
		</a>

		<Footer />
	</main>
</div>
