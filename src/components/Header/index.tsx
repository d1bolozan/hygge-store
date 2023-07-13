import { Link } from 'react-router-dom'

import { MenuContainer } from '@/components/Menu'

import { CartIcon, LogoIcon, ProfileIcon, SearchIcon } from '../Icons'

export const Header = () => (
  <header className='bg-gray-50 text-black'>
    <div className='mx-auto flex w-full max-w-screen-2xl items-center p-4 md:p-8 lg:px-10 lg:py-0'>
      <MenuContainer className='order-1 lg:order-2 lg:mx-auto' />
      <div className='header__logo order-2 mx-auto flex items-center justify-center lg:order-1  lg:mx-0 lg:justify-start'>
        <Link to='/'>
          <LogoIcon className='inline-block h-auto w-32' />
        </Link>
      </div>

      <div className='header__actions order-3 flex items-center gap-4'>
        <div className='hidden lg:inline-block'>
          <SearchIcon />
        </div>
        <div className='inline-block'>
          <ProfileIcon />
        </div>
        <div className='inline-block'>
          <Link to='/cart'>
            <CartIcon />
          </Link>
        </div>
      </div>
    </div>
  </header>
)
