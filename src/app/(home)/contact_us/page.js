import CTA from '@/components/CTA/CTA'
import Form from '@/components/Form/Form'
import HeroSection from '@/components/HeroSection/HeroSection'
import OurCustomersSlider from '@/components/OurCustomersSlider/OurCustomersSlider'
import Image from 'next/image'
import shofifyImg from '../../../../public/Images/Shofify drawing.svg'

const page = () => {
  return (
    <div>
      <section className='heroSectionBg pb-[100px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title={'Let’s Talk'}
            description={
              'Revolutionize Your Shopify Store with Dynamatics Widgets. Tailor-Made Plans for Varied Business Goals. Start Your E-commerce Transformation by Using Our Dynamic Solution. Any Queries? Lets Clear Our Thoughts !!!'
            }
            page={''}
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto md:my-28 my-16 px-4 lg:px-0'>
          <OurCustomersSlider
            subHeading={'our customers'}
            title={'Installed by 10,000+ Shopify stores'}
            desc={
              "Join successful entrepreneurs who've seen real results. Our app delivers increased sales, higher satisfaction, and improved conversion rates."
            }
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-28 px-4 lg:px-0'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-[100px] p-2 md:p-4 lg:p-10 rounded-2xl bg-[#F8F8F8]'>
            <div className='w-full md:w-[50%] md:p-0  p-2'>
              <div className='space-y-3'>
                <h2 className='font-bold mb-8'>Need Assistance?</h2>
                <p className='text-[12px] md:text-[14px] lg:text-[16px]'>
                  We&apos;re Here to Help! Our Dedicated Support Team Is Ready
                  to Guide You Every Step of the Way. Connect with Us for
                  Personalized Assistance and Seamless Solutions.{' '}
                </p>
                <br />
                <p className='text-[12px] md:text-[14px] lg:text-[16px]'>
                  Have Questions or Need Assistance? Our Support Team is Just a
                  Click Away. Get Personalized Help for a Smooth and Successful
                  Experience.
                </p>
                <br />
                <p className='text-[12px] md:text-[14px] lg:text-[16px] font-semibold'>
                  [Please Fill Out the Business Information Form]
                </p>
                <p className='text-[12px] md:text-[14px] lg:text-[16px]'>
                  We look forward to connecting with you and helping you make
                  the most of our products
                </p>
              </div>
              <div className='mt-[30px] md:mt-[50px] lg:mt-[80px]'>
                <h4 className='font-semibold text-[#374144]'>Trusted by:</h4>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                  <Image src={shofifyImg} alt='' />
                  <Image src={shofifyImg} alt='' />
                  <Image src={shofifyImg} alt='' />
                  <Image src={shofifyImg} alt='' />
                  <Image src={shofifyImg} alt='' />
                </div>
              </div>
            </div>
            <div className='w-full md:w-[50%] lg:w-[40%] '>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto my-28 px-4 lg:px-0'>
          <CTA />
        </div>
      </section>
    </div>
  )
}

export default page
