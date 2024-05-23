'use client'
import CartConversion from './CartConversion'
import CartDisplayed from './CartDisplayed'
import WidgetRevenue from './WidgetRevenue'
const Growth = () => {
  return (
    <div className='relative flex flex-row justify-center items-center'>
      <div className='relative bg-[#ECF8FF] lg:w-96 md:w-[70%] sm:w-[80%] w-full h-[600px] rounded-xl z-10'>
        <div className='absolute top-40 left-4 lg:top-32 xl:-left-20 lg:-left-6'>
          <WidgetRevenue />
        </div>
        <div className='absolute top-2 right-0 lg:top-12 sm:-right-[60px] md:-right-20 xl:right-[-176px] lg:right-[-170px]'>
          <CartConversion />
        </div>
        <div className='absolute sm:top-96 top-[26rem] right-0 sm:-right-[60px] md:-right-24 lg:-right-32'>
          <CartDisplayed />
        </div>
      </div>
    </div>
  )
}

export default Growth
