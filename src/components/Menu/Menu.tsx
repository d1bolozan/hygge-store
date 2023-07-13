import { AnimatePresence, motion } from 'framer-motion'
import { ComponentPropsWithRef, FC } from 'react'

import { CloseIcon } from '@/components/Icons'
import { MenuItem } from '@/components/Menu/MenuItem'

import { IMenuItem } from './data'

interface IMenu extends ComponentPropsWithRef<'nav'> {
  data: IMenuItem[]
  isOpen: boolean
  isDesktop: boolean
  handleClick: () => void
}

const navAnimationVariants = {
  hidden: { opacity: 0, translateX: '-100%' },
  visible: { opacity: 1, translateX: 0 }
}

export const Menu: FC<IMenu> = ({ data, isOpen, isDesktop, handleClick }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.nav
        animate='visible'
        className='no-scrollbar fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-scroll bg-white sm:w-2/3 lg:static lg:w-auto lg:bg-transparent'
        exit='hidden'
        initial='hidden'
        transition={{ bounce: 0.25 }}
        variants={isDesktop ? undefined : navAnimationVariants}
      >
        <ul className='z-30 mx-auto flex flex-col gap-4 px-5 py-6 lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:text-center'>
          <button
            className='mb-4 flex w-full cursor-none items-center gap-4 font-secondary text-base uppercase lg:hidden'
            onClick={handleClick}
          >
            <CloseIcon className='h-6 w-6' /> <span>Close</span>
          </button>
          {data.map((menuItem: IMenuItem) => (
            <MenuItem key={menuItem.title} {...menuItem} />
          ))}
        </ul>
      </motion.nav>
    )}
  </AnimatePresence>
)
