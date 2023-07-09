import { ComponentPropsWithRef, FC } from 'react'

export const FacebookIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='white'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M16 13.1l.5-3.1h-3V8c0-.8.4-1.7 1.7-1.7h1.3V3.7s-1.2-.2-2.4-.2c-2.4 0-4 1.5-4 4.2V10H7.4v3.1h2.7v7.5h3.3v-7.5H16z' />
  </svg>
)
