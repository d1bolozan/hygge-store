import { ComponentPropsWithRef, FC } from 'react'

export const InstagramIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='white'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M12 7.6c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4zm0 7.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm5.6-7.3c0 .6-.5 1-1 1-.6 0-1-.5-1-1s.5-1 1-1c.5-.1 1 .4 1 1zm2.9 1c-.1-1.4-.4-2.6-1.4-3.6-1-1-2.2-1.3-3.6-1.4-1.4-.1-5.6-.1-7 0-1.4.1-2.6.4-3.6 1.4S3.6 7.1 3.5 8.5c-.1 1.4-.1 5.6 0 7 .1 1.4.4 2.6 1.4 3.6s2.2 1.3 3.6 1.4c1.4.1 5.6.1 7 0 1.4-.1 2.6-.4 3.6-1.4 1-1 1.3-2.2 1.4-3.6v-7zM18.6 17c-.3.7-.9 1.3-1.6 1.6-1.1.4-3.8.3-5 .3s-3.9.1-5-.3c-.7-.3-1.3-.9-1.6-1.6-.5-1.1-.4-3.8-.4-5s-.1-3.9.4-5c.3-.8.8-1.3 1.6-1.6 1.1-.5 3.8-.4 5-.4s3.9-.1 5 .3c.7.3 1.3.9 1.6 1.6.4 1.1.3 3.8.3 5s.2 4-.3 5.1z' />
  </svg>
)
