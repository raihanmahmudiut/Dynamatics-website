import Link from 'next/link'

const HeroSection = ({ title, description, page }) => {
  return (
    <div className='flex flex-col justify-center items-center  text-center'>
      <h1 className='font-semibold xl:text-[64px] lg:text-[45px] md:text-[32px] sm:text-[28px] text-[24px]'>
        {title}
      </h1>
      <p className='xl:w-[65%] lg:w-[70%] sm:w-[80%] w-full lg:mt-9 md:mt-5 mt-3 lg:text-[18px] md:text-[16px] text-[14px] font-semibold'>
        {description}
      </p>

      {page === 'blog' || page === 'helpcenter' ? (
        <div className='xl:w-[65%] lg:w-[70%] sm:w-[80%] w-full mt-[54px]'>
          <div className='relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
            <div className='grid place-items-center h-full w-12 text-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>

            <input
              className='peer h-full w-full outline-none text-sm text-gray-700 pr-2'
              type='text'
              id='search'
              placeholder='Search here...'
            />
          </div>
        </div>
      ) : (
        ''
      )}
      {page === 'helpcenter' ? (
        <div className=' flex flex-row items-center text-black text-[14px] justify-center gap-5 xl:w-[65%] lg:w-[70%] sm:w-[80%] w-full mt-[54px]'>
          <Link
            className='bg-[#ECF8FF] rounded-lg py-2 px-4'
            href='/contact_us'>
            Getting Started
          </Link>
          <Link className='bg-[#ECF8FF] rounded-lg py-2 px-4' href='/widgets'>
            Widgets
          </Link>
          <Link className='bg-[#ECF8FF] rounded-lg py-2 px-4' href='/resources'>
            Dynamatics
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HeroSection
