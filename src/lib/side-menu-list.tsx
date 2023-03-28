import ExplicitIcon from '@mui/icons-material/Explicit'

type MatchFn = (path: string) => boolean

export interface IDivider {
    id: string
    type: 'divider'
}

export interface ILabel {
    id: string
    type: 'label'
    icon?: React.ReactNode
    title: string
    sectionId?: string
}

export interface IMenu {
    id: string
    type: 'menu'
    title: string
    href: string
    icon?: React.ReactNode
    sectionId?: string
    match?: MatchFn
}

export interface ISection {
    id: string
    type: 'section'
    icon?: React.ReactNode
    title: string
    submenus: (IDivider | IMenu)[]
}

// const nextSectionId = () => `section${++seq}`

const menusTemp: Omit<ILabel, 'id'> | Omit<IDivider, 'id'> | Omit<ISection, 'id'> | Omit<IMenu, 'id'>[] = [
    {
        type: 'menu',
        icon: <ExplicitIcon />, // TODO 아이콘 바꾸자
        title: '샘플',
        href: '/sample', // todo member-list
    },
]

export type ISideMenuItem = ILabel | IDivider | IMenu

let seq = 0
// const nextId = () => `section${++seq}`
const nextMenuId = () => `menu${++seq}`

const _isCurrentMenu = (menuHref: string, path: string | undefined | null, matchFn?: MatchFn): boolean => {
    // routerPath:/           일때, menuHref:/jobs             path:/faq
    // routerPath:/aimk-admin 일때, menuHref:/aimk-admin/jobs  path:/faq
    if (!path) return false

    if (path === menuHref) return true

    if (menuHref === '/') {
        return path.startsWith(`${menuHref}?`)
    }

    if (matchFn) {
        return matchFn(path)
    }

    return path.startsWith(`${menuHref}/`) || path.startsWith(`${menuHref}?`)
}

const menus: ISideMenuItem[] = menusTemp.map((it) => ({ ...it, id: nextMenuId() }))

export const isCurrentMenu = (menuHref: string, path: string | undefined | null, matchFn?: MatchFn): boolean => {
    const yes = _isCurrentMenu(menuHref, path, matchFn)
    // console.log({ yes: yes ? 'YES' : '', menuHref, path })
    return yes
}

export { menus }
