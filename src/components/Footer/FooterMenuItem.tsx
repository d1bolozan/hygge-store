import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import FooterMenuDropdown from '@/components/Footer/FooterMenuDropdown'
import { ChevronRight } from '@/components/Icons'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { FooterMenuItemProps } from './data'

export const FooterMenuItem: FC<FooterMenuItemProps> = ({ title, submenu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isDesktop = useMediaQuery('(min-width: 768px)')

  const handleClick = () => {
    if (!isDesktop) {
      setIsOpen((prevState) => !prevState)
    }
  }

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true)
    }
  }, [isDesktop])

  return (
    <li>
      <button className='flex w-full cursor-none items-center lg:cursor-auto' onClick={handleClick}>
        {!isDesktop && (
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ bounce: 0.25 }}>
            <ChevronRight className='fill-white' />
          </motion.span>
        )}
        <span className='font-secondary uppercase'>{title}</span>
      </button>
      <AnimatePresence>{isOpen && <FooterMenuDropdown items={submenu!} />}</AnimatePresence>
    </li>
  )
}
