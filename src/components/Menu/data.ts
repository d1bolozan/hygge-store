export interface IMenuItem {
  title: string
  href?: string
}

export const root: IMenuItem[] = [
  { href: 'living-room', title: 'Living Room' },
  { href: 'dining-room', title: 'Dining Room' },
  { href: 'office', title: 'Office' },
  { href: 'sale', title: 'Sale' },
  { href: 'accessories', title: 'Accessories' }
]
