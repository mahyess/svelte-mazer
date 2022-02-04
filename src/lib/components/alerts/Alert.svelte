<script lang="ts">
	import Icon from '../icons/Icon.svelte'

	import type { Size, Variant } from './types'

	export let variant: Variant = 'primary'
	export let outline: Boolean = false
	export let light: Boolean = false
	export let rounded: Boolean = false
	export let size: Size = 'md'
	export let dismissible: Boolean = false
</script>

<div
	class="
		{$$props.class} 
		alert 
		alert{outline ? '-outline' : light ? '-light' : ''}-{variant} 
		{rounded ? 'rounded-pill' : ''} 
		alert-{size} 
		{dismissible ? 'alert-dismissible' : ''} 
"
>
	<Icon />
	<slot />
</div>
