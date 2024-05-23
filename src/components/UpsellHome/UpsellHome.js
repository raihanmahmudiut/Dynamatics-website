'use client'

import 'aos/dist/aos.css'
import Image from 'next/image'

import upsellmainimage from '../../../public/Images/upsell-main-image.svg'
import upsellsmallimage from '../../../public/Images/upsell-small-image.svg'
const UpsellHome = () => {
  return (
    <div>
      <div className='pt-20'>
        <Image className='w-full' src={upsellmainimage} alt='upsell' />
      </div>
      <div className='relative'>
        <Image
          src={upsellsmallimage}
          alt='upsell'
          className='absolute -bottom-4 -left-8 lg:-left-24 shadow-lg'
        />
      </div>
    </div>
  )
}

export default UpsellHome
