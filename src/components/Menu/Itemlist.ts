export type itemListProps = {
  label: string
  icon: string
  route: string
  open: boolean
  children: itemListChildrenProps[]
}

export type itemListChildrenProps = {
  label: string
  icon: string
  route: string
}

export const itemList: itemListProps[] = [
  {
    label: 'Publicaciones',
    icon: 'description',
    route: '/catalogo',
    open: false,
    children: [
      {
        label: 'Buscar Publicaciones',
        route: '',
        icon: 'list'
      }
    ]
  },
  {
    label: 'Estadisticas',
    icon: 'analytics',
    route: '/mercadolibre',
    open: false,
    children: []
  },
  {
    label: 'Registrar usuario',
    icon: 'manage_accounts',
    route: '/tiendaNube',
    open: false,
    children: []
  }
]
