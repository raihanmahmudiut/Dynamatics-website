import Image from 'next/image'
import visualTOur from '../../../public/Images/Visual-Tour.svg'

const VisualTour = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-[80px]'>
      <div className='text-center mb-[40px] text-white'>
        <p className='mb-6 font-medium text-[#D4D5FF]'>QUICK AND SIMPLE</p>
        <h2 className='font-semibold xl:text-[44px] lg:text-[32px] md:text-[28px] sm:text-[24px] xs:text-[22px] xsm:text-[20px] leading-tight'>
          Experience Dynamatics in Action
        </h2>
        <p className='mt-2 md:text-[16px] sm:text-[15px] text-[14px]'>
          A Visual Tour of Our Powerful App Features
        </p>
        <button className='mt-6 bg-[#3A7DFF] px-9 py-3 rounded-md text-[12px] md:text-[14px] lg:text-[15px]'>
          Get started
        </button>
      </div>
      <div>
        <Image src={visualTOur} alt='visual TOur' />
      </div>
    </div>
  )
}

export default VisualTour
