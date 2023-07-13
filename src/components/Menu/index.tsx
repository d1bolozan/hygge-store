import { FC, HTMLProps, useEffect, useState } from 'react'

import { MenuIcon, SearchIcon } from '@/components/Icons'
import { Menu } from '@/components/Menu/Menu'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { root } from './data'

interface MenuProps extends HTMLProps<HTMLDivElement> {}

export const MenuContainer: FC<MenuProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    setIsOpen(isDesktop)
  }, [isDesktop])

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div {...props}>
      <div className='mobile-icons flex items-center gap-4 lg:hidden'>
        <button className='cursor-none' onClick={handleClick}>
          <MenuIcon className='h-6 w-6' />
        </button>
        <button className='cursor-none'>
          <SearchIcon className='h-6 w-6' />
        </button>
      </div>
      <Menu data={root} handleClick={handleClick} isDesktop={isDesktop} isOpen={isOpen} />
    </div>
  )
}
