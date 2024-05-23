'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu'
import ReactStars from 'react-rating-stars-component'
import rightIcon from '../../../public/Icons/right-arrow.svg'
import blackStar from '../../../public/Images/black-star.svg'
import companyLogo1 from '../../../public/Images/company-1.png'
import companyLogo2 from '../../../public/Images/company-2.png'
import companyLogo3 from '../../../public/Images/company-3.png'
import styles from './Testimonial.module.css'

export const homeTestimonialData = [
  {
    id: 1,
    clientSays:
      "I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
    companyLogo: companyLogo1,
    ownerName: 'Kya klark',
    rating: 4.5,
    comapnyName: 'xyz'
  },
  {
    id: 2,
    clientSays:
      "I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
    companyLogo: companyLogo2,
    ownerName: 'Kya klark',
    rating: 4.5,
    comapnyName: 'xyz'
  },
  {
    id: 3,
    clientSays:
      "I've been using Dynamatics for a few months now, and it has truly transformed the way customers interact with my online store. The customizable slide-out cart and the array of upselling and cross-selling widgets have had a significant impact on both user engagement and sales.",
    companyLogo: companyLogo3,
    ownerName: 'Kya klark',
    rating: 4.5,
    comapnyName: 'xyz'
  }
]

const animation = { duration: 20000, easing: (t) => t }

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1.87,
      spacing: 15
    },
    loop: true,
    renderMode: 'performance',
    drag: true,
    // created(s) {
    //   s.moveToIdx(5, true, animation)
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation)
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation)
    // },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 1.87,
          spacing: 32
        }
      },
      '(max-width: 1023px)': {
        slides: {
          perView: 1
        }
      }
    }
  })
  return (
    <div>
      <div>
        <h2 className='xl:text-[44px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] leading-tight font-semibold xl:w-[60%] lg:w-[70%] w-full'>
          Meet the companies leveling up with dynamatics
        </h2>
      </div>
      <div ref={sliderRef} className='keen-slider'>
        {homeTestimonialData?.map((item) => (
          <div
            className='keen-slider__slide bg-white p-[30px] mt-[40px] rounded-lg'
            key={item.id}>
            <p className='md:text-[18px] font-semibold'>“{item.clientSays}”</p>
            <div className='flex justify-between items-center mt-[39px]'>
              <div className='flex justify-center items-center gap-3'>
                <Image
                  className='w-[49px] h-[49px] rounded-full'
                  src={item.companyLogo}
                  alt='company image'
                />
                <div>
                  <p className='md:text-[18px] text-[14px] font-semibold'>
                    {item.ownerName}
                  </p>
                  <p>
                    <small className='md:text-[14px] text-[12px]'>
                      Founder of {item.comapnyName}
                    </small>
                  </p>
                </div>
              </div>
              <div className='flex items-center mr-5'>
                <ReactStars
                  value={item.rating}
                  size={20}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<Image src={blackStar} alt='icon' />}
                  halfIcon={<Image src={blackStar} alt='icon' />}
                  filledIcon={<Image src={blackStar} alt='icon' />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between mt-[40px] maxWidth sm:pr-6'>
        <div className='flex items-center gap-2 bg-[#ECF8FF] py-[12px] px-[20px] rounded-lg'>
          <button className='font-medium text-[#3A7DFF]'>
            Read more stories
          </button>
          <Image src={rightIcon} alt='right icon' />
        </div>
        {loaded && instanceRef.current && (
          <div className='flex items-center gap-2'>
            <button
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className={`${
                currentSlide === 0 ? styles.disableBtn : ''
              } bg-white p-[12px] rounded-full ${styles.btn}`}>
              <LuMoveLeft className='text-[24px]' />
            </button>
            <button
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className={`${
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
                  ? styles.disableBtn
                  : ''
              } bg-white p-[12px] rounded-full`}>
              <LuMoveRight className='text-[24px]' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonial
