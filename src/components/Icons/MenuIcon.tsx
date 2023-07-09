import { ComponentPropsWithRef, FC } from 'react'

export const MenuIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='black'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M3,13h18v-2H3V13z M3,17h18v-2H3V17z M3,9h18V7H3V9z' />
  </svg>
)
