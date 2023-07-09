import { ComponentPropsWithRef, FC } from 'react'

export const ChevronLeft: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='black'
    height='24'
    viewBox='0 0 24 24'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
  </svg>
)
