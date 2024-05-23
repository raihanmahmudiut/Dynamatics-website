import Image from 'next/image'
import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import GrowthVector from '../../../public/Images/growth-vector.svg'
import styles from './Cart.module.css'

const CartDisplayed = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}>
      {counterOn && (
        <div className='flex flex-row bg-white rounded-xl p-4 gap-4 items-center shadow-[0px_4.33px_75.7px_0px_#0000001A]				'>
          <div className='flex flex-col gap-5'>
            <h6 className='text-brandBlue'> Cart Displayed</h6>
            <h5 className='font-semibold flex flex-row gap-2 w-[50px]'>
              <CountUp end={13} duration={2} />
              Times{' '}
            </h5>
            <div className='flex flex-row gap-3 items-center'>
              <h6>%ROI</h6>
              <div className='bg-[#E7FFEB] flex flex-row w-fit px-4 py-2 rounded-2xl'>
                <Image src={GrowthVector} alt='growth-vector' />
                <h6 className='w-[50px]'>
                  +<CountUp end={88} duration={2} />%
                </h6>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h6 className='font-semibold'>Cart Conversion Ratio</h6>

              <div className='flex flex-row gap-4 items-center'>
                <div
                  className={styles.progressBarWrapper}
                  role='progressbar'
                  aria-valuenow={50}
                  aria-valuemin='0'
                  aria-valuemax='100'>
                  <div className={styles.progressBar}></div>
                </div>
                <p className='text-[16px] text-[#00C767] '>
                  <CountUp end={88} duration={2} />%
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 '>
              <h6 className='font-semibold'>Total Purchase Ratio</h6>
              <div className='flex flex-row gap-4 items-center'>
                <div
                  className={styles.progressBarWrapper}
                  role='progressbar'
                  aria-valuenow={50}
                  aria-valuemin='0'
                  aria-valuemax='100'>
                  <div className={styles.progressBar2}></div>
                </div>
                <h6 className='text-[16px] text-[#00C767] '>
                  <CountUp end={92} duration={2} />%
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </ScrollTrigger>
  )
}

export default CartDisplayed
