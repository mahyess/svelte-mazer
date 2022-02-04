<script lang="ts">
	import type { Size, Variant } from './types'

	export let variant: Variant = 'primary'
	export let outline: Boolean = false
	export let light: Boolean = false
	export let rounded: Boolean = false
	export let size: Size = 'md'
	export let disabled: Boolean = false
</script>

<button
	class="
		{$$props.class} 
		btn 
		btn{outline ? '-outline' : light ? '-light' : ''}-{variant} 
		{rounded ? 'rounded-pill' : ''} 
		btn-{size} 
		{disabled ? 'disabled' : ''} 
"
>
	<slot />
</button>
