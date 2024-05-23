/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import CardSlider from '@/components/Card Slider/CardSlider'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi'
import calender from '../../../../../public/Icons/calender.svg'
import clock from '../../../../../public/Icons/clockblue.svg'
import facebook from '../../../../../public/Icons/facebook.svg'
import copy from '../../../../../public/Icons/link-01.svg'
import linkedin from '../../../../../public/Icons/linkedin.svg'
import twitter from '../../../../../public/Icons/twitter.svg'
import blogEmail from '../../../../../public/Images/blogEmail.svg'
import blogImg2 from '../../../../../public/Images/blogImg5.png'
import cantfind from '../../../../../public/Images/cant find.png'
import { resources } from '../../../../../public/resource'

const page = () => {
  const [cardDetails, setCardDetails] = useState(resources[19])
  const [email, setEmail] = useState('')

  const handleDetails = (id) => {
    const singleDetails = resources.find((single) => single.id === id)
    setCardDetails(singleDetails)
    console.log(singleDetails)
  }

  const [active, setActive] = useState(null)

  const introduction = useRef(null)
  const widget = useRef(null)
  const recommendation = useRef(null)
  const realtime = useRef(null)
  const conclusion = useRef(null)

  const scrollSelection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
    setActive(elementRef.current)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        introduction,
        widget,
        recommendation,
        realtime,
        conclusion
      ]
      const scrollPosition = window.scrollY
      let currentActive = null
      sections.forEach((sectionRef) => {
        if (sectionRef.current.offsetTop <= scrollPosition + 200) {
          currentActive = sectionRef.current
        }
      })
      setActive(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const router = useRouter()
  return (
    <div>
      <div className='heroSectionBg3 '>
        <section className='pb-[30px] pt-[130px]'>
          <div className='container mx-auto px-5 maxWidth flex flex-col gap-8'>
            <div className='flex flex-row items-center gap-2'>
              <button
                className='flex flex-row items-center gap-2 text-black'
                onClick={() => router.back()}>
                <FiArrowLeft />
                Go Back
              </button>
              <div className='mx-2'>
                <svg
                  width='2'
                  height='12'
                  viewBox='0 0 2 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <line
                    x1='0.75'
                    y1='-3.27835e-08'
                    x2='0.750001'
                    y2='12'
                    stroke='#00070B'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>

              <div className='text-[#B1B1B1] flex flex-row items-center gap-2'>
                <Link href='/resources'>Resources</Link> <FiChevronRight /> Blog
              </div>
            </div>
            <h1 className='font-semibold'>
              A Guide to Leveraging Dynamatics Widgets
            </h1>
          </div>
        </section>
        <section>
          <div className='container mx-auto px-5 maxWidth'>
            <div className='flex flex-col gap-6 lg:gap-10 items-center mb-6 md:mb-10 lg:mb-[80px]'>
              <div className='w-full '>
                <Image
                  className='w-full md:h-[450px] object-cover rounded-3xl'
                  src={cardDetails?.image}
                  alt=''
                />
              </div>
              <div className='w-full space-y-4'>
                {/* <h3 className='font-bold leading-tight'>{cardDetails?.title}</h3> */}
                <p className='text-[12px] md:text-[14px] lg:text-[16px]'>
                  {cardDetails?.description}
                </p>
                <div className='flex'>
                  <span className='flex items-center py-1 text-[10px] font-medium md:text-[12px] lg:text-[15px] rounded-full bg-[#EBEBEB] px-3 mr-2 text-[#374144]'>
                    <Image className='mr-2' src={calender} alt='' />
                    {cardDetails?.date}
                  </span>
                  <span className='flex items-center py-1 text-[10px] font-medium md:text-[12px] lg:text-[15px] rounded-full bg-[#ECF8FF] px-3 mr-2 text-[#3A7DFF]'>
                    <Image className='mr-2' src={clock} alt='' />
                    {cardDetails?.time}
                  </span>
                  <span className='inline-flex items-center rounded-full bg-[#E7FFEB] px-3 py-1 text-[10px] font-medium md:text-[12px] lg:text-[15px]'>
                    {cardDetails?.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <section className=''>
          <div className=' md:hidden mt-8 mb-4 px-3 space-x-2'>
            <button
              onClick={() => scrollSelection(introduction)}
              className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] ${
                active === introduction.current
                  ? 'text-[#3A7DFF] border-b-2 border-[#3A7DFF]'
                  : ''
              }`}>
              Introduction
            </button>
            <button
              onClick={() => scrollSelection(widget)}
              className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] ${
                active === widget.current
                  ? 'text-[#3A7DFF] border-b-2 border-[#3A7DFF]'
                  : ''
              }`}>
              Widget Customization
            </button>
            <button
              onClick={() => scrollSelection(recommendation)}
              className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] ${
                active === recommendation.current
                  ? 'text-[#3A7DFF] border-b-2 border-[#3A7DFF]'
                  : ''
              }`}>
              Recommendations
            </button>
            <button
              onClick={() => scrollSelection(realtime)}
              className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] ${
                active === realtime.current
                  ? 'text-[#3A7DFF] border-b-2 border-[#3A7DFF]'
                  : ''
              }`}>
              Real-Time Analytics
            </button>
            <button
              onClick={() => scrollSelection(conclusion)}
              className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] ${
                active === conclusion.current
                  ? 'text-[#3A7DFF] border-b-2 border-[#3A7DFF]'
                  : ''
              }`}>
              Conclusion
            </button>
          </div>
        </section>
        <div className='container mx-auto px-5 maxWidth'>
          <div className='grid grid-flow-dense grid-cols-9 gap-5 lg:gap-[80px] relative overflow-visible'>
            <section className='col-span-9 md:col-span-6'>
              <div ref={introduction}>
                <h3 className='font-bold mt-8 mb-4'>Introduction</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  In the ever-evolving landscape of e-commerce, staying ahead of
                  the competition requires innovation, creativity, and a deep
                  understanding of consumer behavior. At Dynamatics, we&apos;re
                  committed to empowering Shopify merchants with the tools they
                  need to succeed in this dynamic environment. In this blog
                  post, we&apos;ll explore how leveraging Dynamatics widgets can
                  supercharge your e-commerce success and drive significant
                  results for your business.
                </p>
              </div>
              <div ref={widget}>
                <h3 className='font-bold mt-8 mb-4'>Widget Customization</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  Elevating Your Brand IdentityOne of the key advantages of
                  Dynamatics is its ability to customize widgets to match your
                  brand&apos;s unique identity. From colors and fonts to layout
                  and design, you have full control{' '}
                </p>
                <ul className='px-6'>
                  <li className='list-disc my-4 text-[12px] md:text-[14px] lg:text-[16px]'>
                    Over how your widgets appear to your customers.
                  </li>
                  <li className='list-disc my-4 text-[12px] md:text-[14px] lg:text-[16px]'>
                    Elevating Your Brand IdentityOne of the key advantages
                  </li>
                  <li className='list-disc my-4 text-[12px] md:text-[14px] lg:text-[16px]'>
                    Over how your widgets appear to your customers.
                  </li>
                </ul>
              </div>
              <div ref={recommendation}>
                <h3 className='font-bold mt-8 mb-4'>
                  Personalized Recommendations
                </h3>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  Tailoring the Shopping ExperienceDynamatics&apos; personalized
                  recommendation feature is a game-changer for e-commerce
                  merchants. By analyzing customer data and browsing behavior,
                  Dynamatics delivers highly targeted product recommendations to
                  each individual shopper. This level of personalization not
                  only increases the likelihood of conversion but also fosters
                  deeper engagement and loyalty among your customer base.
                </p>
                <Image
                  className='my-[50px] rounded-xl w-full'
                  src={blogImg2}
                  alt=''
                />
              </div>
              <div ref={realtime}>
                <h3 className='font-bold mt-8 mb-4'>Real-Time Analytics</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  To truly maximize the impact of your Dynamatics widgets,
                  it&apos;s essential to monitor their performance and iterate
                  based on real-time data insights. Dynamatics&apos; built-in
                  analytics dashboard provides merchants with
                </p>
                <br />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] font-semibold italic leading-relaxed'>
                  “valuable metrics such as click-through rates, conversion
                  rates, and revenue generated. Armed with this data, you can
                  make informed decisions about widget placement, design, and
                  targeting, ensuring continuous improvement and optimization.”
                </p>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center p-5 gap-5 lg:p-10 lg:gap-10 bg-[#F8F8F8] rounded-xl my-8'>
                <div className='w-full mx-auto lg:w-[30%]'>
                  <Image className='w-full' src={blogEmail} alt='' />
                </div>
                <div className='w-full lg:w-[70%]'>
                  <h3 className='font-bold mt-8 mb-4'>Hold tight!</h3>
                  <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                    Expect updates on upcoming lessons delivered right to your
                    inbox.
                  </p>
                  <form>
                    <div>
                      <input
                        className='my-3 block shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full px-3 py-3 rounded-lg bg-white text-[14px] lg:text-[16px]'
                        type='text'
                        name='email'
                        id='email'
                        value={email}
                        placeholder='Enter your email'
                      />
                    </div>
                    <button
                      type='submit'
                      className='w-full bg-[#3A7DFF] rounded-lg p-3 text-white'>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div ref={conclusion}>
                <h3 className='font-bold mt-8 mb-4'>Conclusion</h3>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  In today&apos;s competitive e-commerce landscape, success
                  hinges on your ability to deliver exceptional shopping
                  experiences that resonate with your audience. With Dynamatics
                  widgets, you have the power to elevate your Shopify store to
                  new heights of success. By customizing widgets to reflect your
                  brand identity, delivering personalized recommendations,
                  strategically placing widgets throughout your store, and
                  leveraging real-time analytics, you can drive meaningful
                  results and unlock your full e-commerce potential.
                </p>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed'>
                  Ready to take your Shopify store to the next level? Start
                  leveraging Dynamatics widgets today and watch your e-commerce
                  success soar!
                </p>
                <div className='border-l-[4px] px-4 border-[#B1B1B1] my-4'>
                  <p className='text-[12px] md:text-[14px] lg:text-[16px] font-semibold italic leading-relaxed'>
                    delivering personalized recommendations, strategically
                    placing widgets throughout your store, and leveraging
                    real-time analytics, you can drive meaningful results and
                    unlock your full e-commerce potential.
                  </p>
                  <p className='text-[12px] md:text-[14px] lg:text-[16px] font-semibold italic leading-relaxed'>
                    Ready to take your Shopify store to the next level? Start
                    leveraging Dynamatics widgets today and watch your
                    e-commerce success soar!
                  </p>
                </div>
              </div>
              <div className='mt-12 mb-10'>
                <div className='flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <div>
                      <Image
                        className='w-[48px] h-[48px]'
                        src={cardDetails?.authorImage}
                        alt=''
                      />
                    </div>
                    <div>
                      <h6 className='font-medium'>{cardDetails?.author}</h6>
                      <p className='text-[10px] md:text-[12px] lg:text-[14px]'>
                        Technical Writer
                      </p>
                    </div>
                  </div>
                  <div className='flex '>
                    <span className='flex items-center py-2 text-[10px] font-medium md:text-[12px] lg:text-[15px] rounded-3xl bg-[#EBEBEB] px-2 mr-2 text-[#374144]'>
                      <Image className='mr-2' src={linkedin} alt='' />
                      Share
                    </span>
                    <span className='flex items-center py-2 text-[10px] font-medium md:text-[12px] lg:text-[15px] rounded-3xl bg-[#EBEBEB] px-2 mr-2 text-[#374144]'>
                      <Image className='mr-2' src={twitter} alt='' />
                      Share
                    </span>
                    <span className='flex items-center py-2 text-[10px] font-medium md:text-[12px] lg:text-[15px] rounded-3xl bg-[#EBEBEB] px-2 mr-2 text-[#374144]'>
                      <Image className='mr-2' src={copy} alt='' />
                      Copy
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className='col-span-9 md:col-span-3'>
              <div className=' sticky top-8'>
                <div className='mt-8 mb-4 hidden md:block'>
                  <button
                    onClick={() => scrollSelection(introduction)}
                    className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] block ${
                      active === introduction.current
                        ? 'text-[#3A7DFF] border-l-2 border-[#3A7DFF]'
                        : ''
                    }`}>
                    Introduction
                  </button>
                  <button
                    onClick={() => scrollSelection(widget)}
                    className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] block ${
                      active === widget.current
                        ? 'text-[#3A7DFF] border-l-2 border-[#3A7DFF]'
                        : ''
                    }`}>
                    Widget Customization
                  </button>
                  <button
                    onClick={() => scrollSelection(recommendation)}
                    className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] block ${
                      active === recommendation.current
                        ? 'text-[#3A7DFF] border-l-2 border-[#3A7DFF]'
                        : ''
                    }`}>
                    Recommendations
                  </button>
                  <button
                    onClick={() => scrollSelection(realtime)}
                    className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] block ${
                      active === realtime.current
                        ? 'text-[#3A7DFF] border-l-2 border-[#3A7DFF]'
                        : ''
                    }`}>
                    Real-Time Analytics
                  </button>
                  <button
                    onClick={() => scrollSelection(conclusion)}
                    className={`my-2 px-4 py-2 text-[12px] md:text-[14px] lg:text-[15px] block ${
                      active === conclusion.current
                        ? 'text-[#3A7DFF] border-l-2 border-[#3A7DFF]'
                        : ''
                    }`}>
                    Conclusion
                  </button>
                </div>
                <div className='py-6'>
                  <p className='text-[#374144] text-[12px] md:text-[14px] lg:text-[15px] font-medium px-4'>
                    Share article
                  </p>
                  <div className='flex px-4 my-2 space-x-4'>
                    <Image className=' w-6 h-6' src={linkedin} alt='' />
                    <Image className=' w-6 h-6' src={twitter} alt='' />
                    <Image className=' w-6 h-6' src={facebook} alt='' />
                  </div>
                  <div className='p-5 bg-[#F3F1FF] rounded-2xl my-[60px]'>
                    <div className='overflow-hidden rounded-xl bg-white'>
                      <div className='flex justify-center items-center'>
                        <Image
                          className='object-cover w-full md:h-[225px]'
                          src={cantfind}
                          alt=''
                        />
                      </div>
                      <div>
                        <div className='p-4'>
                          <p className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-2'>
                            Ready to elevate your Shopify store with Dynamatics
                            widgets?
                          </p>
                          <p className='text-[10px] md:text-[12px] lg:text-[14px] mb-2'>
                            Elevating Your Brand IdentityOne of the key
                            advantages of Dynamatics
                          </p>
                        </div>
                        <div className='px-4 pt-4 pb-2 mb-2'>
                          <button className='w-full flex justify-center text-[12px] md:text-[14px] lg:text-[15px] bg-[#3A7DFF] py-2 rounded-lg text-white font-[550]'>
                            Sign up now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className='bg-[#ECF8FF]'>
        <div className='xl:pl-[340px] mx-auto pl-5 py-[80px] '>
          <CardSlider handleDetails={handleDetails} />
        </div>
      </section>
    </div>
  )
}

export default page
