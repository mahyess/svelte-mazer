<script lang="ts">
	export let type: String
	export let source: 'di' | 'fa' | 'bi'
	export let size:
		| 'xs'
		| 'sm'
		| 'lg'
		| '2x'
		| '3x'
		| '4x'
		| '5x'
		| '6x'
		| '7x'
		| '8x'
		| '9x'
		| '10x' = 'sm'
	export let variant:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| '' = ''
	export let color: string = '#000000'

	let classname: string = ''
	$: if (source == 'bi') {
		classname = 'bi bi-' + type
	} else if (source == 'fa') {
		classname = 'fab fa-' + type
	} else if (source == 'di') {
		classname = 'icon dripicons-' + type
	}
</script>

<!-- <i class="fab fa-{type}" /> -->
<i
	class="{classname} fa-{size} {variant ? `text-${variant}` : ''}"
	style="--theme-color: {color}"
/>

<style>
	i {
		color: var(--theme-color);
	}
</style>
