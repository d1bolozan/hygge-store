import DesktopImage from '@assets/images/hero/desktop_hero.webp'
import MobileImage from '@assets/images/hero/mobile_hero.jpg'
import TabletImage from '@assets/images/hero/tablet_hero.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (isMobile) {
      setBackgroundImage(MobileImage)
    }
    if (isTablet) {
      setBackgroundImage(TabletImage)
    }

    if (isDesktop) {
      setBackgroundImage(DesktopImage)
    }
  }, [isMobile, isTablet, isDesktop])

  return (
    <section className='hero_container relative mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-10'>
      <div className='relative flex w-full flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0 md:space-x-12 lg:grid lg:grid-cols-12'>
        <div className='hero__image w-full overflow-hidden rounded md:order-last lg:order-first lg:col-span-full lg:w-full'>
          <img alt='hero background' className='object-cover' src={backgroundImage!} />
        </div>
        <div className='hero__content flex w-full flex-col gap-y-4 text-left lg:pointer-events-none lg:absolute lg:col-span-5 lg:col-start-2 lg:gap-y-6 xl:col-span-4 xl:col-start-2'>
          <div className='space-y-2 text-left'>
            <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl'>
              Quirky Nostalgic Comfort
            </h1>
            <p className='text-sm opacity-75 lg:w-auto lg:text-base'>
              Add some comfort to your living space with our 1980s inspired snuggle chair.
            </p>
          </div>
          <Link className='self-start' to='/'>
            <Button label='Shop Armchairs' size='medium' />
          </Link>
        </div>
      </div>
    </section>
  )
}
