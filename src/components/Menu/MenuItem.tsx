import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IMenuItem } from './data'

export const MenuItem: FC<IMenuItem> = ({ title, href }) => (
  <li className='flex w-full items-center'>
    {href && (
      <Link
        className='w-full whitespace-nowrap text-2xl font-bold lg:w-auto lg:cursor-pointer lg:px-4 lg:py-12 lg:text-sm'
        to={href}
      >
        {title}
      </Link>
    )}
  </li>
)
