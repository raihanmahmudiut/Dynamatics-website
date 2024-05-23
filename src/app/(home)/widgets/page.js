import CTA from '@/components/CTA/CTA'
import HeroSection from '@/components/HeroSection/HeroSection'
import WidgetTab from '@/components/WidgetTab/WidgetTab'

const page = () => {
  return (
    <div>
      <section className='heroSectionBg pb-[100px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title='Widgets'
            description={
              'From Static to Dynamic: Widgets Paving the Way for Interactive Interfaces -Revolutionizing Digital Interaction Beyond the Icons'
            }
            page={''}
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14 maxWidth xl:px-0 px-4'>
          <div className='max-w-2xl mx-auto mb-16 text-center'>
            <h2 className='my-4 font-semibold'>Dynamatic Widgets </h2>
            <p className='text-[14] md:text-[16px] lg:text-[18px] lg:w-[650px] mx-auto mt-6'>
              Navigating the Future with Versatile Widgets; Revolutionizing
              Digital Interaction Beyond the Icon
            </p>
          </div>
          <WidgetTab />
        </div>
      </section>
      <section>
        <div className='container mx-auto my-14 px-4 lg:px-0 maxWidth'>
          <CTA />
        </div>
      </section>
    </div>
  )
}

export default page
