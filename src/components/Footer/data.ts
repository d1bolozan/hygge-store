export type FooterSubmenuItem = {
  title: string
  href: string
}

export type FooterMenuItemProps = {
  title: string
  submenu?: FooterSubmenuItem[]
}

export const footerMenuItems: FooterMenuItemProps[] = [
  {
    submenu: [
      { href: 'delivery', title: 'Delivery' },
      { href: 'returns-refunds', title: 'Returns & Refunds' }
    ],
    title: 'Delivery'
  },
  {
    submenu: [
      { href: 'terms-conditions', title: 'Terms & Conditions' },
      { href: 'privacy-policy', title: 'Privacy Policy' },
      { href: 'cookies', title: 'Cookies' }
    ],
    title: 'Website'
  },
  {
    submenu: [
      { href: 'new-arrivals', title: 'New Arrivals' },
      { href: 'living-room/armchairs', title: 'Armchairs' },
      { href: 'living-room/occasion-chairs', title: 'Occasion chairs' }
    ],
    title: 'Store'
  },
  {
    submenu: [
      { href: 'living-room', title: 'Living room' },
      { href: 'dining-room', title: 'Dining room' },
      { href: 'decor', title: 'Decor' }
    ],
    title: 'SALE'
  }
]
