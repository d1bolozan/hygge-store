import { motion } from 'framer-motion'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { FooterSubmenuItem } from './data'

interface FooterMenuDropDownProps {
  items: FooterSubmenuItem[]
}

const animationVariants = {
  animate: { height: '100%', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  initial: { height: 0, opacity: 0 }
}

const FooterMenuDropdown: FC<FooterMenuDropDownProps> = ({ items }) => {
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <motion.ul
      animate='animate'
      className='flex flex-col gap-4 py-4 md:gap-1'
      exit='exit'
      initial='initial'
      transition={{ duration: 0.15 }}
      variants={isMobile ? animationVariants : undefined}
    >
      {items.map((item) => (
        <li key={item.title}>
          <Link className='hover:underline' to={item.href}>
            <span className='text-base md:text-sm'>{item.title}</span>
          </Link>
        </li>
      ))}
    </motion.ul>
  )
}

export default FooterMenuDropdown
