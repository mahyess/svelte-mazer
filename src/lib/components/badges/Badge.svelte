<script lang="ts">
	export let variant:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'transparent'
		| '' = ''
	export let light: boolean = false
	export let color: string = ''
	$: if (!color && !variant) {
		variant = 'primary'
	}
	// export let size: 'sm' | 'lg' | 'xl' | 'xs' | 'sm-only' | 'lg'
</script>

<span class="badge bg-{light ? 'light-' : ''}{variant}" style="--theme-color: {color}">
	<slot />
</span>

<style>
	span {
		background-color: var(--theme-color);
	}
</style>
