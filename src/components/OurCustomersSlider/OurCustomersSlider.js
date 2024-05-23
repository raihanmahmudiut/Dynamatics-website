'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import brandOne from '../../../public/Images/our-customers/1.svg'
import brandTwo from '../../../public/Images/our-customers/2.svg'
import brandThree from '../../../public/Images/our-customers/3.svg'
import brandFour from '../../../public/Images/our-customers/4.svg'
import brandFive from '../../../public/Images/our-customers/5.svg'
import brandSix from '../../../public/Images/our-customers/6.svg'
import brandSeven from '../../../public/Images/our-customers/7.svg'
import brandEight from '../../../public/Images/our-customers/8.svg'

const animation = { duration: 10000, easing: (t) => t }

const OurCustomersSlider = ({ title, subHeading, desc }) => {
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 6
    },
    breakpoints: {
      '(max-width: 471px)': {
        slides: {
          perView: 2
        }
      },
      '(min-width: 472px)': {
        slides: {
          perView: 3
        }
      },
      '(min-width: 768px)': {
        slides: {
          perView: 4
        }
      },
      '(min-width: 905px)': {
        slides: {
          perView: 5
        }
      },
      '(min-width: 1032px)': {
        slides: {
          perView: 6
        },
        mode: 'free-snap'
      }
    },
    loop: true,
    renderMode: 'performance',
    drag: false,

    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    }
  })

  const t = title.split(' ')
  console.log(t)
  return (
    <div className='flex flex-col justify-center'>
      <div className='text-center'>
        <p className='uppercase text-[#3A7DFF] font-semibold'>{subHeading}</p>
        <h2 className=' font-bold mt-[24px]'>{title}</h2>
        <p className='lg:w-[65%] md:w-[75%] sm:w-[90%] w-[100%] mx-auto mt-[16px]'>
          {desc}
        </p>
      </div>
      <div ref={sliderRef} className='keen-slider mt-[40px]'>
        <div className='keen-slider__slide number-slide1'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandOne}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide2'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandTwo}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide3'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandThree}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide4'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandFour}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide5'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandFive}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide6'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandSix}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandSeven}
              alt='brand one'
            />
          </div>
        </div>
        <div className='keen-slider__slide number-slide2'>
          <div className='flex justify-center items-center'>
            <Image
              className='w-[150px] h-[30px]'
              src={brandEight}
              alt='brand one'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCustomersSlider
