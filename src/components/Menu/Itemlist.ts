export const itemList = [
  {
    label: 'Catalogo',
    logo: '/product-logo.png',
    ruta: '/catalogo',
    open: false,
    children: [
      {
        label: 'Listar productos',
        ruta: '',
        icon: 'list'
      },
      {
        label: 'Configuracion',
        ruta: '/ruta2',
        icon: 'settings'
      }
    ]
  },
  {
    label: 'Mercadolibre',
    logo: 'mercadolibre-logo.png',
    ruta: '/mercadolibre',
    open: false,
    children: [
      {
        label: 'Ruta 1',
        ruta: '/ruta1',
        icon: 'shopping_cart'
      },
      {
        label: 'Configuracion',
        ruta: '/ruta2',
        icon: 'settings'
      }
    ]
  },
  {
    label: 'Tienda nube',
    logo: 'tiendanube-logo.png',
    ruta: '/tiendaNube',
    open: false,
    children: [
      {
        label: 'Ruta 1',
        ruta: '/ruta1',
        icon: 'shopping_cart'
      },
      {
        label: 'Ruta 2',
        ruta: '/ruta2',
        icon: 'shopping_bag'
      },
      {
        label: 'Ruta 3',
        ruta: '/ruta2',
        icon: 'store'
      }
    ]
  },
  {
    label: 'Google shopping',
    ruta: '/googleShopping',
    logo: 'googleshopping-logo.png',
    open: false,
    children: [
      {
        label: 'Ruta 1',
        ruta: '/ruta1',
        icon: 'shopping_cart'
      }
    ]
  },
  {
    label: 'Magento',
    ruta: '/magento',
    logo: '/magento-logo.png',
    open: false,
    children: [
      {
        label: 'Ruta 1',
        ruta: '/ruta1',
        icon: 'shopping_cart'
      },
      {
        label: 'Ruta 2',
        ruta: '/ruta2',
        icon: '/shopping_basket'
      },
      {
        label: 'Ruta 3',
        ruta: '/ruta3',
        icon: 'list'
      },
      {
        label: 'Ruta 4',
        ruta: '/ruta4',
        icon: 'home'
      }
    ]
  }
]
