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
			<span class="text-muted"> Sites, tools, games. Anything that interests me. </span>
		</p>

		<div class="mb-10 flex max-w-md flex-col gap-4">
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="font-mono text-[10px] text-muted/60">web</span>
				<span class="font-mono text-xs text-ink">TypeScript</span>
				<span class="font-mono text-xs text-ink">React</span>
				<span class="font-mono text-xs text-ink">Svelte</span>
				<span class="font-mono text-xs text-ink">Next.js</span>
			</div>
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="font-mono text-[10px] text-muted/60">systems</span>
				<span class="font-mono text-xs text-ink">C++</span>
			</div>
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="font-mono text-[10px] text-muted/60">scripting</span>
				<span class="font-mono text-xs text-ink">Lua</span>
				<span class="font-mono text-xs text-ink">GSC</span>
			</div>
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="font-mono text-[10px] text-muted/60">reversing</span>
				<span class="font-mono text-xs text-ink">IDA</span>
			</div>
		</div>

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
