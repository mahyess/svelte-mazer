<script>
	import CardTitle from './CardTitle.svelte'
</script>

<div class="card-header {$$props.class}">
	<CardTitle>
		<slot />
	</CardTitle>
</div>

<style>
	.hello {
		color: red;
	}
</style>
