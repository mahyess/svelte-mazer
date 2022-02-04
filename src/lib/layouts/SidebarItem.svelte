<script lang="ts">
	import type { Menu } from '$lib/types'

	export let menu: Menu
</script>

<template>
	<li class="{$$props.class} sidebar-item {menu?.submenus?.length > 0 ? 'has-sub' : ''}">
		<a href={menu?.submenus?.length ? '#' : menu.route} class="sidebar-link">
			<i class={menu.icon} />
			<span>{menu.title}</span>
		</a>
		{#if menu?.submenus?.length > 0}
			<ul class="submenu">
				{#each menu.submenus as sub}
					<li class="submenu-item">
						<i class={sub.icon} />
						<a href={sub.route}>{sub.title}</a>
					</li>
				{/each}
			</ul>
		{/if}
	</li>
</template>
