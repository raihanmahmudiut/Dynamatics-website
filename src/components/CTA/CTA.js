import Image from 'next/image'
import ctaImg from '../../../public/Images/CTA Image.svg'
import shoffyIcon from '../../../public/Images/shopify-white.svg'

const CTA = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center bg-[#ECF8FF] px-3  rounded-2xl gap-5 lg:gap-[30px]'>
        <div className='flex justify-center items-end w-full md:w-[50%] md:pt-[100px] pt-3'>
          <Image className='w-full lg:w-[90%] mx-auto' src={ctaImg} alt='' />
        </div>
        <div className='w-full md:w-[50%] space-y-5 pb-3'>
          <h2 className='font-semibold'>
            Boost Your Sales Game, With Dynamatic
          </h2>
          <p className='text-[14px] md:text-[15px] lg:text-[18px]'>
            Unlock Profitable Potential Through Expertly Crafted Personalized
            Sales Strategies
          </p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://apps.shopify.com/navidium-cart-and-upsells'>
            <button className='flex items-center gap-5 bg-[#00070B] text-white px-5 py-3 rounded-lg mt-5'>
              <Image src={shoffyIcon} alt='' />
              <div className='text-start'>
                <p className='text-[10px] md:text-[12px]'>Get it on</p>
                <p className='text-[12px] md:text-[14px] lg:text-[15px]'>
                  Shopify App Store
                </p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA
