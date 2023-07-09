import { ComponentPropsWithRef, FC } from 'react'

export const CloseIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='black'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M6.3,19.1L19.1,6.3l-1.4-1.4L4.9,17.7L6.3,19.1z' />
    <path d='M4.9,6.3l12.7,12.7l1.4-1.4L6.3,4.9L4.9,6.3z' />
  </svg>
)
