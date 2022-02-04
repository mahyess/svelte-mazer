<script lang="ts">
	export let src: string
	export let alt: string
	export let fluid: Boolean = true
</script>

<img class="{$$props.class} {fluid ? 'img-fluid w-100' : ''}" {src} {alt} />
