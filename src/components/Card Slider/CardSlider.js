"use client"

import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import React, { useState } from 'react'
import Image from 'next/image'
import { resources } from '../../../public/resource'
import clock from '../../../public/Icons/clock.svg'
import { LuMoveLeft, LuMoveRight } from 'react-icons/lu'
import styles from './CardSlider.module.css'

const CardSlider = ({handleDetails}) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3.25,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3.25,
          spacing: 20,
        },
      },
      '(min-width: 720px) and (max-width: 1023px)': {
        slides: {
          perView: 2.25,
          spacing: 15
        }
      },
      '(max-width: 719px)': {
        slides: {
          perView: 1.25,
          spacing: 10
        }
      }
    },
    
    loop: true
  },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  // const [sliderRef] = useKeenSlider({
  //   slides: {
  //     perView: 3.25,
  //     spacing: 15,
  //   },
  // })

  

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between maxWidth'>
        <div>
          <h2 className='my-2 md:my-5 lg:my-10 font-semibold'>Enjoyed this article? Try another!</h2>
        </div>
        {loaded && instanceRef.current && (
          <>
            <div className='flex items-center gap-2 my-4 md:my-0'>
              <button onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0} className='bg-white p-[12px] rounded-full'>
                <LuMoveLeft className='text-[24px]' />
              </button>

              <button onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              } className='bg-white p-[12px] rounded-full'>
                <LuMoveRight className='text-[24px]' />
              </button>
            </div>
          </>
        )}
      </div>
      <div ref={sliderRef} className="keen-slider">
        {resources?.map(resource => <SliderContent key={resource.id} resource={resource} handleDetails={handleDetails} />)}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.bars}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`${styles.bar} ${currentSlide === idx ? styles.active : ""}`}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CardSlider

const SliderContent = ({ resource, handleDetails }) => {

  const [expand, setExpand] = useState(false)

  const toggleDescription = () => {
    setExpand(!expand)
  }

  return (
    < div className="keen-slider__slide bg-white">
      <div onClick={() => handleDetails(resource.id)} className="overflow-hidden shadow-lg rounded-xl cursor-pointer bg-white">
        <div className='bg-[#EBEBEB] flex justify-center items-center'>
          <Image className='object-cover h-[250px]' src={resource?.image} alt='' />
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span className=" py-1 text-[10px] md:text-[12px] lg:text-[15px] text-[#B1B1B1] mr-2">
            {resource.date}
          </span>
          <span className="flex items-center py-1 text-[10px] md:text-[12px] lg:text-[15px] text-[#B1B1B1] mr-2">
            <Image className='mr-2' src={clock} alt='' />
            {resource.time}
          </span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-3">{resource?.title}</div>
          {(!expand) ? <p className='text-[12px] md:text-[14px] lg:text-[16px] mb-3'>{(resource?.description).slice(0, 103)} <button className='text-[#3A7DFF] font-semibold' onClick={toggleDescription}>Read more...</button></p> : <p className='text-[12px] md:text-[14px] lg:text-[16px] mb-3'>{resource?.description} <button className='text-[#3A7DFF] font-semibold' onClick={toggleDescription}>Show less...</button></p>}
          <div className='flex justify-between my-2 items-center'>
            <div className='flex space-x-2 items-center'>
              <Image src={resource.authorImage} alt='' />
              <p className='text-[10px] md:text-[12px] lg:text-[14px]'>{resource.author}</p>
            </div>
            <div>
              <span className="inline-flex items-center rounded-lg bg-[#E7FFEB] px-3 py-1 text-xs">{resource.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}