'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../public/Icons/arrow left.svg'
import check from '../../../public/Icons/check framed.svg'
import addImg from '../../../public/Images/toy addvertise (1).svg'
import { widgets } from '../../../public/Widget'

const WidgetTab = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 6,
      spacing: 15
    },
    breakpoints: {
      '(max-width: 1242px)': {
        slides: {
          origin: 'center',
          perView: 5
        }
      },
      '(max-width: 984px)': {
        slides: {
          origin: 'center',
          perView: 4
        }
      },
      '(max-width: 510px)': {
        slides: {
          origin: 'center',
          perView: 3
        }
      },
      '(max-width: 404px)': {
        slides: {
          origin: 'center',
          perView: 2
        }
      }
    }
  })
  const [activeTab, setActiveTab] = useState('all')
  const [loadedWidgets, setLoadedWidgets] = useState(widgets.slice(0, 5))
  const [allWidgetsLoaded, setAllWidgetsLoaded] = useState(false)

  const openTab = (tabName) => {
    setActiveTab(tabName)
  }

  const carts = widgets.filter((widget) => widget.category === 'Cart page')
  const webs = widgets.filter((widget) => widget.category === 'Web page')
  const posts = widgets.filter((widget) => widget.category === 'Post')
  const checks = widgets.filter((widget) => widget.category === 'Checkout page')
  const thanks = widgets.filter(
    (widget) => widget.category === 'Thank you page'
  )

  // console.log(loadedWidget)
  const handleWidget = () => {
    setLoadedWidgets(widgets)
    setAllWidgetsLoaded(true)
  }

  return (
    <div className=' mx-auto px-2 lg:px-0'>
      <div className='md:w-[75%] w-full bg-gray-100 rounded-xl mx-auto my-10 px-[10px] py-2'>
        <div ref={sliderRef} className='keen-slider'>
          <button
            className={`keen-slider__slide py-1 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-lg hover:text-white hover:bg-[#8fb4ff] focus:outline-none ${
              activeTab === 'all' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('all')}>
            All
          </button>
          <button
            className={`keen-slider__slide py-1 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-lg hover:text-[#3A7DFF] hover:bg-[#D0EEFF] focus:outline-none ${
              activeTab === 'cart' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('cart')}>
            Cart page
          </button>
          <button
            className={` keen-slider__slide py-1 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-lg hover:text-[#3A7DFF] hover:bg-[#D0EEFF] focus:outline-none ${
              activeTab === 'web' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('web')}>
            Web page
          </button>
          <button
            className={`keen-slider__slide py-1 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-lg hover:text-[#3A7DFF] hover:bg-[#D0EEFF] focus:outline-none ${
              activeTab === 'check' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('check')}>
            Checkout page
          </button>
          <button
            className={`keen-slider__slide py-1 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-lg hover:text-[#3A7DFF] hover:bg-[#D0EEFF] focus:outline-none ${
              activeTab === 'post' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('post')}>
            Post purchase
          </button>
          <button
            className={`keen-slider__slide py-1 lg:py-2 px-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-[#3A7DFF] hover:bg-[#D0EEFF] focus:outline-none ${
              activeTab === 'thanks' ? 'bg-[#3A7DFF] text-white' : ''
            }`}
            onClick={() => openTab('thanks')}>
            Thank you page
          </button>
        </div>
      </div>
      <div
        id='all'
        className={`tabcontent ${activeTab === 'all' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {loadedWidgets?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-6  pb-2 mb-2'>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {!allWidgetsLoaded && (
          <div className='text-center my-6'>
            <button
              onClick={handleWidget}
              className='bg-[#ECF8FF] text-[#3A7DFF] text-[14px] font-medium px-6 py-3 rounded-lg'>
              Load more widgets
            </button>
          </div>
        )}
      </div>
      <div
        id='cart'
        className={`tabcontent p-4 ${activeTab === 'cart' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {carts?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-4 pb-[16px]  '>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='web'
        className={`tabcontent p-4 ${activeTab === 'web' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {webs?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-6 pb-2 mb-2'>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='check'
        className={`tabcontent p-4 ${activeTab === 'check' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {checks?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-6 pb-2 mb-2'>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='post'
        className={`tabcontent p-4 ${activeTab === 'post' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-6 pb-2 mb-2'>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id='thanks'
        className={`tabcontent p-4 ${activeTab === 'thanks' ? '' : 'hidden'}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {thanks?.map((widget) => (
            <WidgetContet key={widget.id} widget={widget} />
          ))}
          <div className='overflow-hidden shadow-lg rounded-xl bg-[#FEFFD3]'>
            <div className='flex justify-center items-center'>
              <Image className='object-fill w-full' src={addImg} alt='' />
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                  Looking for a custom widget tailored to your unique needs?
                </div>
              </div>
              <div className='px-6 pb-2 mb-2'>
                <button className='w-full flex justify-center text-[14px] md:text-[16px] lg:text-[18px] bg-[#3A7DFF] py-2 rounded-lg text-white'>
                  Contact Us
                  <Image className='ms-2' src={arrow} alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetTab

const WidgetContet = ({ widget }) => {
  return (
    <div>
      <div className='overflow-hidden shadow-lg rounded-xl'>
        <div className=' h-[220px] bg-[#EBEBEB] flex justify-center items-center p-4'>
          <Image className='object-fill md:w-full' src={widget?.image} alt='' />
        </div>
        <div className='flex flex-row justify-between w-full items-center px-4 mt-4'>
          <div className=''>
            <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
              {widget?.title}
            </div>
          </div>
          <button className='text-brandBlue md:block border-brandBlue border-[1px] px-4 py-[7px] rounded-lg xs:text-[14px] text-[13px] md:text-[15px] font-medium'>
            Try for free
          </button>
        </div>
        <div className=' px-4 pb-2 pt-4 flex flex-wrap'>
          <span className=' flex border-2 border-[#EBEBEB] rounded-full p-2 text-[8px] sm:text-[11px] md:text-[12px] font-semibold text-gray-700 mr-2 mb-2'>
            <Image className='mr-2' src={check} alt='' />
            {widget.subBtn1}
          </span>
          <span className='flex border-2 border-[#EBEBEB] rounded-full p-2 text-[8px] sm:text-[11px] md:text-[12px] font-semibold text-gray-700 mr-2 mb-2'>
            <Image className='mr-2' src={check} alt='' />
            {widget.subBtn2}
          </span>
          <span className='flex border-2 border-[#EBEBEB] rounded-full p-2 text-[8px] sm:text-[11px] md:text-[12px] font-semibold text-gray-700 mr-2 mb-2'>
            <Image className='mr-2' src={check} alt='' />
            {widget.subBtn3}
          </span>
        </div>
      </div>
    </div>
  )
}
