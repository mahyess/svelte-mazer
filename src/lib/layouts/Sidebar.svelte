<script lang="ts">
	import type { MenuCategory } from '$lib/types'

	import SidebarItem from './SidebarItem.svelte'

	export let sidebarItems: MenuCategory[]
	export let active: Boolean = true
</script>

<div id="sidebar" class={active && 'active'}>
	<div class="sidebar-wrapper active">
		<div class="sidebar-header">
			<div class="d-flex justify-content-between">
				<div class="logo">
					<a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" srcset="" /></a>
				</div>
				<div class="toggler">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle" /></a>
				</div>
			</div>
		</div>
		<div class="sidebar-menu">
			<ul class="menu">
				{#each sidebarItems as sidebarItemCategory}
					<li class="sidebar-title">{sidebarItemCategory.title}</li>
					{#each sidebarItemCategory.menus as menu}
						<SidebarItem {menu} />
					{/each}
				{/each}
			</ul>
		</div>
		<button class="sidebar-toggler btn x"><i data-feather="x" /></button>
	</div>
</div>
