<script lang="ts">
	import type { Size } from './types'

	export let size: Size = 'md'
	export let vertical: boolean = false
</script>

<div role="group" class="{$$props.class} btn-group{vertical ? '-vertical' : ''} btn-group-{size}">
	<slot />
</div>
