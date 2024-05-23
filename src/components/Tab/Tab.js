'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import arrow from '../../../public/Images/arrow.svg'
import check from '../../../public/Images/check.svg'
import customizeTwo from '../../../public/Images/customize-small.svg'
import customizeOne from '../../../public/Images/customize.svg'
import widgetTwo from '../../../public/Images/tab-widget-small.svg'
import widgetOne from '../../../public/Images/tab-widget.svg'
import ConversionRate from '../ConversionRate/ConversionRate'
import MonthlyRevenue from '../MonthlyRevenue/MonthlyRevenue'
import Sales from '../Sales/Sales'
import TotalRevenue from '../TotalRevenue/TotalRevenue'
import styles from './Tab.module.css'
const Tab = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [counterOn, setCounterOn] = useState(false)

  const openTab = (tabName) => {
    setActiveTab(tabName)
  }

  useEffect(() => {
    activeTab == 'tab3' ? setCounterOn(true) : setCounterOn(false)
  }, [setCounterOn, activeTab])
  return (
    <div className='py-20'>
      <div className='text-white flex flex-col justify-center items-center md:w-[70%] sm:w-[80%] w-full mx-auto text-center'>
        <p className='text-[14px] sm:text-[15px] md:text-[16px] font-semibold'>
          QUICK AND SIMPLE
        </p>
        <h2 className='mt-2 font-medium'>
          3 Steps to Elevate Your Conversion Rate with Dynamatics Magic! ✨
        </h2>
      </div>
      <div className='flex sm:gap-x-6 xs:gap-x-3 gap-x-2 my-10'>
        <button
          className={`w-1/2 sm:py-4 py-2 px-2 text-center bg-gray-100 focus:outline-none rounded-lg text-[12px] md:text-[17px] lg:text-[24px] font-semibold ${activeTab === 'tab1' ? `${styles.brandBlue} text-white` : ''
            }`}
          onClick={() => openTab('tab1')}>
          1. Choose widget
        </button>
        <button
          className={`w-1/2 sm:py-4 py-2 px-2 text-center bg-gray-100 focus:outline-none rounded-lg text-[12px] md:text-[17px] lg:text-[24px] font-semibold ${activeTab === 'tab2' ? `${styles.brandBlue} text-white` : ''
            }`}
          onClick={() => openTab('tab2')}>
          2. Customize
        </button>
        <button
          className={`w-1/2 sm:py-4 py-2 px-2 text-center bg-gray-100 focus:outline-none rounded-lg text-[12px] md:text-[17px] lg:text-[24px] font-semibold ${activeTab === 'tab3' ? `${styles.brandBlue} text-white` : ''
            }`}
          onClick={() => openTab('tab3')}>
          3. Publish
        </button>
      </div>
      <div>
        <div
          id='tab1'
          className={`tabcontent  bg-white rounded-lg overflow-hidden  ${activeTab === 'tab1' ? '' : 'hidden'
            }`}>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='md:p-6 p-4 w-full lg:w-[45%]'>
              <h3 className='md:leading-10 leading-7 font-semibold w-[90%]'>
                Boost Conversions with Over a Dozen Built-in Widgets
              </h3>
              <ul className='list-inside w-[90%]'>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Maximize Sales Potential: Elevate Your Store with
                    Personalized In-Cart Upsells and Cross-Selling Widgets!
                  </li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Celebrate Every Customer: Harness the Power of Birthdays,
                    Custom Banners, Magnificent themes.
                  </li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Enjoy the Giant Collections, and Subscriptions for
                    Personalized Shopping Experiences.
                  </li>
                </div>

                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Smooth Sailing to Conversions: Over a Dozen Widgets to
                    Minimize Friction in Your Shopping Experience.
                  </li>
                </div>
              </ul>
              <Link href="/widgets" >
                <div className='bg-[#3A7DFF] inline-flex items-center px-[20px] py-[14px] font-semibold text-[18px] gap-[8px] text-white rounded-xl mt-6'>
                  <button>Discover all widgets</button>
                  <Image src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            <div className='relative flex xs:justify-end justify-center bg-[#ECF8FF] h-[680px] xl:h-[575px] w-full lg:w-[55%]'>
              <Image
                className='lg:w-[70%] md:w-[75%] sm:w-[80%] xs:w-[90%] w-full'
                src={widgetOne}
                alt='widget image'
              />
              <Image
                className='absolute lg:left-20 md:left-[190px] sm:left-[-10px] left-[10px] md:top-[155px] sm:top-[170px] top-[300px] w-[45%]'
                src={widgetTwo}
                alt='widget image'
              />
            </div>
          </div>
        </div>
        <div
          id='tab2'
          className={`tabcontent  bg-white rounded-lg overflow-hidden   ${activeTab === 'tab2' ? '' : 'hidden'
            }`}>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='md:p-6 p-4 w-full lg:w-[45%]'>
              <h3 className='md:leading-10 leading-7 font-semibold w-[90%]'>
                Advanced Personalization Features for Your Store&apos;s Success
              </h3>
              <ul className='list-inside w-[90%]'>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Connecting Audiences to Tailored Widgets for True Cart
                    Perfection.
                  </li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>Advanced Personalization Scope for Your Store.</li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Connect Specific Audiences to Widgets Tailored Just for
                    Them.
                  </li>
                </div>

                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Personalized In-Cart Strategies for Maximum Sales Impact
                  </li>
                </div>
              </ul>
              <Link href="/widgets" >
                <div className='bg-[#777CF6] inline-flex items-center px-[20px] py-[14px] font-semibold text-[18px] gap-[8px] text-white rounded-xl mt-6'>
                  <button>Discover all widgets</button>
                  <Image src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            <div className='relative flex xs:justify-end justify-center bg-[#ECF8FF] h-[680px] xl:h-[575px] w-full lg:w-[55%]'>
              <Image
                className='lg:w-[70%] md:w-[75%] sm:w-[80%] xs:w-[90%] w-full'
                src={customizeOne}
                alt='widget image'
              />
              <Image
                className='absolute md:left-[80px] left-[10px] md:top-[280px] top-[350px] sm:w-[45%] w-[50%]'
                src={customizeTwo}
                alt='widget image'
              />
            </div>
          </div>
        </div>
        <div
          id='tab3'
          className={`tabcontent  bg-white rounded-lg overflow-hidden ${activeTab === 'tab3' ? '' : 'hidden'
            }`}>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='md:p-6 p-4 w-full lg:w-[45%]'>
              <h3 className='md:leading-10 leading-7 font-semibold w-[90%]'>
                Implement Advanced Personalization Features for Unmatched
                Shopping Experiences
              </h3>
              <ul className='list-inside w-[90%]'>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    The user-friendly interface allows developers to navigate
                    the publishing process with ease.
                  </li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    While end-users can effortlessly discover and install
                    software that aligns with their needs.
                  </li>
                </div>
                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Gain valuable insights into your software&apos;s performance
                    with Dynamatic&apos;s comprehensive analytics.
                  </li>
                </div>

                <div className='flex items-start gap-[10px] mt-[20px]'>
                  <Image src={check} alt='check mark' />
                  <li>
                    Dynamatic evolves alongside your creations, ensuring a
                    dynamic and supportive ecosystem.
                  </li>
                </div>
              </ul>
              <Link href="/widgets" >
                <div className='bg-[#777CF6] inline-flex items-center px-[20px] py-[14px] font-semibold text-[18px] gap-[8px] text-white rounded-xl mt-6'>
                  <button>Discover all widgets</button>
                  <Image src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            <div className='relative flex justify-end bg-[#ECF8FF] h-[680px] xl:h-[575px] w-full lg:w-[55%]'>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}>
                <div className='absolute left-6 top-48 xl:top-28 shadow-xl rounded-xl'>
                  {counterOn && <MonthlyRevenue />}
                </div>
                <div className='absolute right-3 xl:right-4 top-6 xl:top-10 shadow-xl rounded-xl'>
                  {counterOn && <TotalRevenue />}
                </div>
                <div className='absolute right-2 bottom-40 xl:bottom-44 shadow-xl rounded-3xl'>
                  {counterOn && <Sales />}
                </div>
                <div className='absolute left-5 lg:left-44 bottom-10 xl:bottom-16 shadow-xl rounded-3xl'>
                  {counterOn && <ConversionRate />}
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tab
