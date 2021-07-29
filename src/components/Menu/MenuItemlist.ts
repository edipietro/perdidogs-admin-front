export type MenuitemListProps = {
  label: string
  icon: string
  route: string
  open: boolean
  children: MenuitemListChildrenProps[]
}

export type MenuitemListChildrenProps = {
  label: string
  icon: string
  route: string
}

export const MenuitemList: MenuitemListProps[] = [
  {
    label: 'Publicaciones',
    icon: 'description',
    route: '/publicaciones',
    open: true,
    children: [
      {
        label: 'Administrar',
        icon: 'settings',
        route: '/administrar'
      }
    ]
  },
  {
    label: 'Estadisticas',
    icon: 'analytics',
    route: '/estadisticas',
    open: true,
    children: [
      {
        label: 'Razas perdidas',
        icon: 'pets',
        route: '/razasPerdidas'
      },
      {
        label: 'Estado de usuarios',
        icon: 'person',
        route: '/estadistica2'
      },
      {
        label: 'Estado de alertas',
        icon: 'notifications_active',
        route: '/estadistica3'
      },
      {
        label: 'Estado de publicaciones',
        icon: 'plagiarism',
        route: '/estadistica5'
      }
    ]
  }
  /*   {
    label: 'Registrar usuario',
    icon: 'manage_accounts',
    route: '/tiendaNube',
    open: false,
    children: []
  } */
]
