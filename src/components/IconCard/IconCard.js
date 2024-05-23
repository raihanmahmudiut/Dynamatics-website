"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import arrow from '../../../public/Icons/arrowblue.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const IconCard = ({card}) => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="flip-down" data-aos-duration="1000"
            key={card.id}
            className={`px-4 pt-4 ${card.button ? 'pb-0' : 'pb-4'} rounded-xl flex flex-col ${(card.logo && card.id < 6) ? 'items-center text-center' : 'items-start text-start border-2 border-gray-100 bg-white'}`}>
            {card.logo ? <div className='h-10 w-10 md:h-16 md:w-16'>
                <Image className='w-full h-full' src={card.logo} alt='' />
            </div> : ''}
            <h1 className='text-[14px] md:text-[17px] font-semibold my-4'>
                {card.heading}
            </h1>
            <p className='text-[12px] md:text-[14px] pr-4 w-full'>{card.description}</p> 
            {card.button ? (<button className=' my-5 text-[#3A7DFF]'>
            {card.button}
            <Image className='inline-block mx-3' src={arrow} alt='' />{' '}
          </button>) : ''}  
        </div>
    )
}

export default IconCard