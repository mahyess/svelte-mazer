<script lang="ts">
	import Sidebar from './Sidebar.svelte'
	import '$lib/assets/css/app.css'
	import '$lib/assets/css/bootstrap.css'
	import '$lib/assets/css/bootstrap.css'
	import type { MenuCategory } from '$lib/types'

	export let sidebarItems: MenuCategory[] = []
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/dripicons/2.0.0/webfont.min.css"
	/>
</svelte:head>

<template>
	<div id="app" class={$$props.class}>
		{#if sidebarItems}
			<Sidebar {sidebarItems} active={true} />
		{/if}

		<div id="main">
			<header class="mb-3">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="burger-btn d-block d-xl-none">
					<i class="bi bi-justify fs-3" />
				</a>
			</header>

			<slot />

			<footer>
				<div class="footer clearfix mb-0 text-muted">
					<div class="float-start">
						<p>2021 &copy; Mazer</p>
					</div>
					<div class="float-end">
						<p>
							Crafted with <span class="text-danger"><i class="bi bi-heart" /></span> by
							<a href="http://ahmadsaugi.com">A. Saugi</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	</div>
</template>
