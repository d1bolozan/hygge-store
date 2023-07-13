import { Link } from 'react-router-dom'

import { FooterMenu } from '@/components/Footer/FooterMenu'
import {
  FacebookIcon,
  InstagramIcon,
  MaestroIcon,
  MasterCardIcon,
  TwitterIcon,
  VisaIcon
} from '@/components/Icons'

import { footerMenuItems } from './data'

export const Footer = () => (
  <footer className='bg-gray-950 font-primary text-gray-200'>
    <div className='mx-auto w-full max-w-screen-2xl px-5 lg:px-10'>
      <div className='flex w-full flex-col items-center gap-8 border-b border-gray-600 py-8 md:flex-row md:gap-4 lg:py-6'>
        <ul className='mr-auto flex flex-wrap items-center gap-4 lg:gap-x-4'>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/careers'>Careers</Link>
          </li>
          <li>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <ul className='flex w-full items-center gap-4 md:w-auto'>
          <li className='flex items-center rounded bg-gray-500 hover:opacity-75'>
            <Link className='inline-block p-2' target='_blank' to='https://facebook.com'>
              <FacebookIcon />
            </Link>
          </li>
          <li className='flex items-center rounded bg-gray-500 hover:opacity-75'>
            <Link className='inline-block p-2' target='_blank' to='https://instagram.com'>
              <InstagramIcon />
            </Link>
          </li>
          <li className='flex items-center rounded bg-gray-500 hover:opacity-75'>
            <Link className='inline-block p-2' target='_blank' to='https://twitter.com'>
              <TwitterIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div className='py-8 lg:py-6'>
        <FooterMenu items={footerMenuItems} />
      </div>
      <div className='border-t border-gray-600  py-8 lg:py-6'>
        <div className='flex flex-col flex-wrap gap-4 md:flex-row md:items-center'>
          <span className='order-2 mr-auto text-xs md:order-1 md:text-sm'>
            © Copyright Hygge 2023. All rights reserved
          </span>
          <div className='order-1 flex h-8 w-full space-x-4 md:order-2 md:h-10 md:w-auto md:justify-center'>
            <div className='inline-flex  items-center rounded bg-white p-2'>
              <MasterCardIcon />
            </div>
            <div className='inline-flex items-center rounded bg-white p-2'>
              <MaestroIcon />
            </div>
            <div className='inline-flex items-center rounded bg-white p-2'>
              <VisaIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
