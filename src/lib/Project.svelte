<script>
	let { href, date, title, description } = $props();
</script>

{#if href}
	<a
		{href}
		target="_blank"
		rel="noopener noreferrer"
		class="row group -mx-3 flex items-center justify-between gap-4 border-b border-line px-3 py-5"
	>
		<div>
			<span class="font-mono text-xs text-muted">{date}</span>
			<h3 class="mt-1 mb-1 font-display text-lg font-medium">{title}</h3>
			<p class="max-w-sm text-sm text-muted">{description}</p>
		</div>

		<span class="shrink-0 font-mono text-muted group-hover:text-accent">↗</span>
	</a>
{:else}
	<div class="-mx-3 flex items-center gap-4 border-b border-line px-3 py-5">
		<div>
			<span class="font-mono text-xs text-muted">{date}</span>
			<h3 class="mt-1 mb-1 font-display text-lg font-medium">{title}</h3>
			<p class="max-w-sm text-sm text-muted">{description}</p>
		</div>
	</div>
{/if}
