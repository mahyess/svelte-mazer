<script lang="ts">
	import { fly } from 'svelte/transition'
	import type { Size, Variant } from './types'

	export let variant: Variant = 'primary'
	export let outline: Boolean = false
	export let light: Boolean = false
	export let rounded: Boolean = false
	export let size: Size = 'md'
	export let dismissible: Boolean = false

	let isVisible: Boolean = true
</script>

{#if isVisible}
	<div
		transition:fly
		class:rounded-pill={rounded}
		class:alert-dismissible={dismissible}
		class="
		{$$props.class}
		alert
		alert-{size}
		alert-{outline ? 'outline-' : light ? 'light-' : ''}{variant}
	"
		role="alert"
	>
		<slot />
		{#if dismissible}
			<button
				on:click={() => (isVisible = !isVisible)}
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			/>
		{/if}
	</div>
{/if}
