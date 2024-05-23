const objects = [
  {
    heading: 'STARTER',
    subheading: 'Up to 50 Total Orders a Month',
    price: '$0',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  },
  {
    heading: 'BASIC',
    subheading: 'Up to 500 Total Orders a Month',
    price: '$29.99',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  },
  {
    heading: 'GROWTH',
    subheading: 'Up to 1500 Total Store Orders a Month',
    price: '$49.99 ',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  },
  {
    heading: 'SCALE',
    subheading: 'Up to 3000 Total Orders a Month',
    price: '$99.99',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  },
  {
    heading: 'ADVANCED',
    subheading: 'Up to 3000 Total Orders a Month',
    price: '$199.99 ',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  },
  {
    heading: 'ENTERPRISE+',
    subheading: 'Up to 3000 Total Orders a Month',
    price: '$399.99',
    per_time: 'Monthly',
    list_1: 'All Features Included',
    list_2: '30-Day Money Back Guarantee',
    list_3: '14-Day Free Trial'
  }
]

const Pricing = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-4 lg-mx-0'>
        {objects.map((price, index) => (
          <div
            key={index}
            className='relative overflow-hidden group rounded-xl p-4 md:p-6 divide-y divide-gray-200 hover:border-[#3A7DFF] border-gray-200 border-2'>
            <div className='space-y-2'>
              {price.heading === 'GROWTH' ? (
                <span className='absolute top-6 -right-12 inline-flex items-center rotate-45 bg-blue-500 w-48 pl-20 py-3 h-8 text-[14px] font-medium text-white ring-1 ring-inset ring-blue-700/10'>
                  Popular
                </span>
              ) : (
                ''
              )}
              <h4 className='font-semibold'>{price.heading}</h4>
              <p className='text-[14px] md:text-[15px] lg:text-[17px]'>
                Up to 50 Total Orders a Month
              </p>
              <div className='py-6'>
                <span className='lg:text-[45px] md:text-[28px] text-[24px] font-bold'>
                  {price.price}
                  <span className='text-[12px]  md:text-[16px] text-[#767676]'>
                    /{price.per_time}
                  </span>
                </span>
              </div>
            </div>
            <div>
              <ul className='py-6'>
                <li className='flex items-center py-1 md:py-2 lg-py-4 space-x-2'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z'
                      fill='#00C767'
                    />
                    <path
                      d='M6 10.75C6 10.75 7.6 11.6625 8.4 13C8.4 13 10.8 7.75 14 6'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-[14px] md:text-[15px] lg:text-[17px]'>
                    {price.list_1}
                  </span>
                </li>
                <li className='flex items-center py-1 md:py-2 lg-py-4 space-x-2'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z'
                      fill='#00C767'
                    />
                    <path
                      d='M6 10.75C6 10.75 7.6 11.6625 8.4 13C8.4 13 10.8 7.75 14 6'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-[14px] md:text-[15px] lg:text-[17px]'>
                    {price.list_2}
                  </span>
                </li>
                <li className='flex items-center py-1 md:py-2 lg-py-4 space-x-2'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z'
                      fill='#00C767'
                    />
                    <path
                      d='M6 10.75C6 10.75 7.6 11.6625 8.4 13C8.4 13 10.8 7.75 14 6'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-[14px] md:text-[15px] lg:text-[17px]'>
                    {price.list_3}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <button className='w-full bg-[#6161FF] p-[15px] rounded-xl text-[14px] md:text-[15px] lg:text-[17px] font-medium text-white mt-6'>
                Choose Monthly
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
