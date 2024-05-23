import CTA from '@/components/CTA/CTA'
import FAQ from '@/components/FAQ/FAQ'
import HeroSection from '@/components/HeroSection/HeroSection'
import Pricing from '@/components/Pricing/Pricing'
import Table from '@/components/Table/Table'
import Image from 'next/image'
import Link from 'next/link'
import { faqData } from '../../../../public/FAQ'
import whitearrow from '../../../../public/Icons/arrow left.svg'
import headphone from '../../../../public/Images/customer-support.svg'

const page = () => {
  return (
    <div>
      <section className='heroSectionBg pb-[100px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title='Plans and pricing'
            description={
              'Navigate the Widget Landscape with Plans That Match Your Shopify Store’s Unique Ambitions. Kick-start Your Transformation Select the Best That Suits You More'
            }
            page={''}
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14'>
          <div className='max-w-2xl mx-auto mb-16 text-center px-4 lg:px-0'>
            <h2 className='my-4 font-semibold'>Upgrade your plan</h2>
            <p className='text-[14] md:text-[16px] lg:text-[18px] lg:w-[500px] mx-auto'>
              All charges are billed in USD. Recurring and usage-based charges
              are billed every 30 days.
            </p>
          </div>
          <Pricing />
        </div>
      </section>
      <section>
        <div className=' mx-auto my-14'>
          <div className='max-w-2xl mx-auto mb-16 text-center'>
            <h2 className='my-4 font-semibold'>
              Analyze Flexible Functions for Diverse Team Structures
            </h2>
          </div>
          <Table />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14'>
          <div className='max-w-2xl mx-auto px-2 mb-8 lg:mb-16 text-center'>
            <p className='text-[#3A7DFF] text-[12px] md:text-[14px] lg:text-[16px]'>
              FAQ
            </p>
            <h2 className='my-4 font-semibold'>Question and answers</h2>
            <p className='text-[14px] md:text-[15px] lg:text-[16px] lg:w-[500px] mx-auto'>
              Can’t find the answer here?{' '}
              <Link className='text-[#3A7DFF] underline' href='/contact_us'>
                Contact our support team.
              </Link>
            </p>
          </div>
          <FAQ faq={faqData[1]} />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14'>
          <div className='max-w-2xl mx-auto mb-16 flex flex-col gap-4 text-center px-4 lg:px-0'>
            <Image className='mx-auto' src={headphone} alt='' />
            <h2 className='my-4 font-semibold'>Still have questions?</h2>
            <h4 className='font-semibold'>we’re here to help</h4>
            <div className='flex justify-center'>
              <button className='bg-[#3A7DFF] my-4 font-semibold flex gap-3 items-center px-3 py-2 text-white rounded-lg text-[14px] md:text-[16px] lg:text-[18px]'>
                Contact Us
                <Image src={whitearrow} alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14 px-4 lg:px-0'>
          <CTA />
        </div>
      </section>
    </div>
  )
}

export default page
