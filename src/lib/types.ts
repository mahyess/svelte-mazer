interface MenuBasics {
	id?: string
	title: string
	icon: string
}
export interface MenuWithoutSubmenus extends MenuBasics {
	route: string
	submenus?: MenuWithoutSubmenus[]
}
export interface MenuWithSubmenus extends MenuBasics {
	route?: string
	submenus: MenuWithoutSubmenus[]
}
export type Menu = MenuWithoutSubmenus | MenuWithSubmenus
export interface MenuCategory {
	title: string
	menus: Menu[]
}
