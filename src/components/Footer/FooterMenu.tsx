import { FC } from 'react'

import { FooterMenuItem } from '@/components/Footer/FooterMenuItem'

import { FooterMenuItemProps } from './data'

interface IFooterMenu {
  items: FooterMenuItemProps[]
}

export const FooterMenu: FC<IFooterMenu> = ({ items }) => (
  <ul className='flex flex-col gap-4 md:flex-row md:gap-8'>
    {items.map((item) => (
      <FooterMenuItem key={item.title} submenu={item.submenu} title={item.title} />
    ))}
  </ul>
)
