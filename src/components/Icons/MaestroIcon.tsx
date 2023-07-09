import { ComponentPropsWithRef, FC } from 'react'

export const MaestroIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg height='24' width='40' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M14.251 2.566H24.75v18.867H14.251z' fill='#7374CB' />
    <path
      d='M14.832 12.001a11.978 11.978 0 014.583-9.434 12 12 0 100 18.867 11.979 11.979 0 01-4.583-9.433z'
      fill='#CA0020'
    />
    <path d='M39 12a12 12 0 01-19.414 9.434 12 12 0 000-18.867A12 12 0 0139 12z' fill='#5BA0E2' />
  </svg>
)
