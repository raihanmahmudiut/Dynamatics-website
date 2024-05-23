import { FaCircle } from 'react-icons/fa'

const StepCard = ({ subHeading, heading, description, items }) => {
  return (
    <div className='lg:py-[60px] '>
      <p className='uppercase bg-[#ECF8FF] text-[#3A7DFF] inline-block md:px-6 px-4 md:py-2 py-1 rounded-full md:text-[16px] text-[14px]'>
        {subHeading}
      </p>
      <h2 className='font-semibold xl:text-[44px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] md:my-[16px] my-[12px] leading-tight'>
        {heading}
      </h2>
      <p className='text-[#374144] md:mb-[16px] mb-[10px]'>{description}</p>
      <ul>
        {items?.map((item, index) => (
          <li
            key={index}
            className='md:text-[15px] text-[13px] list-inside md:mb-[16px] mb-[8px] flex items-center gap-2'>
            <FaCircle className='text-[8px] ' />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StepCard
