import CTA from '@/components/CTA/CTA'
import FeaturedCard from '@/components/FeatureCard/FeatureCard'
import HeroSection from '@/components/HeroSection/HeroSection'
import IconCard from '@/components/IconCard/IconCard'
import VisualTour from '@/components/VisualTour/VisualTour'
import Image from 'next/image'
import { featureCardData2 } from '../../../../public/Data'
import icon3 from '../../../../public/Icons/Audienc.svg'
import icon1 from '../../../../public/Icons/Customize.svg'
import icon2 from '../../../../public/Icons/Upsell.svg'
import audienceSegmentation from '../../../../public/Images/Audience-Segmentation.svg'
import slideOutCart from '../../../../public/Images/Slide-Out-Cart.svg'
import upsellingWidget from '../../../../public/Images/Upselling-Widgets.svg'

const data2 = [
  {
    id: 1,
    heading: 'Customizable Slide-Out Cart',
    description:
      'Craft a seamless shopping experience with a fully customizable slide-out cart that aligns with your brand identity.',
    logo: icon1
  },
  {
    id: 2,
    heading: 'Versatile Upselling Widgets',
    description:
      'Boost sales effortlessly with an array of upselling and cross-selling widgets tailored to customer preferences.',
    logo: icon2
  },
  {
    id: 3,
    heading: 'Real-Time Audience Segmentation',
    description:
      'Personalize the shopping journey by showing specific widgets to distinct audience segments in real time.',
    logo: icon3
  }
]

const page = () => {
  return (
    <div>
      <section className='heroSectionBg pb-[100px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title={'Features'}
            description={
              'Unmasking the Features at the Core of Our Software Services. Let’s Dive into the Advanced Features of Our Dynamic Software Solutions'
            }
            page={''}
          />
        </div>
      </section>

      <section>
        <div className='container mx-auto my-14 xl:px-0 px-4 maxWidth'>
          <div className='text-center mx-auto xl:w-[70%] lg:w-[75%] md:w-[70%] sm:w-[70%] xs:w-[88%] w-full'>
            <h2 className='font-semibold leading-tight '>
              Transforming Shopify with Innovative Features and Functions!
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[60px]'>
            {data2.map((card) => (
              <IconCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      <section className='bg-[#00070B]'>
        <div className='container mx-auto my-14 xl:px-0 px-4 maxWidth'>
          <VisualTour />
        </div>
      </section>
      <section>
        <div className='container mx-auto xl:px-0 px-4 maxWidth'>
          <div className='flex md:justify-items-end justify-center md:flex-row flex-col items-center lg:gap-x-[60px] gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='flex justify-center items-end bg-[#ECF8FF] lg:w-[50%] w-full lg:h-[480px] md:h-[520px] sm:h-[470px] xs:h-[490px] xsm:h-[370px] h-[350px] rounded-3xl'>
              <Image
                className='lg:w-[85%] md:w-[90%] sm:w-[60%] xs:w-[80%] xsm:w-[90%] w-[95%]'
                src={slideOutCart}
                alt='placement'
              />
            </div>
            <div className='md:w-[70%]'>
              <FeaturedCard item={featureCardData2[0]} page={'feature'} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto xl:px-0 px-4 maxWidth'>
          <div className='flex md:justify-items-end justify-center md:flex-row flex-col items-center lg:gap-x-[60px] gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='md:w-[70%] order-2 md:order-1'>
              <FeaturedCard item={featureCardData2[1]} page={'feature'} />
            </div>
            <div className='flex justify-center items-end bg-[#ECF8FF] lg:w-[50%] w-full lg:h-[480px] md:h-[520px] sm:h-[470px] xs:h-[490px] xsm:h-[370px] h-[350px] rounded-3xl order-1 md:order-2'>
              <Image
                className='lg:w-[85%] md:w-[90%] sm:w-[60%] xs:w-[80%] xsm:w-[90%] w-[95%]'
                src={upsellingWidget}
                alt='upsellingWidget'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto xl:px-0 px-4 maxWidth'>
          <div className='flex md:justify-items-end justify-center md:flex-row flex-col items-center lg:gap-x-[60px] gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='flex justify-center items-end bg-[#ECF8FF] lg:w-[50%] w-full lg:h-[480px] md:h-[520px] sm:h-[470px] xs:h-[490px] xsm:h-[370px] h-[350px] rounded-3xl'>
              <Image
                className='lg:w-[85%] md:w-[90%] sm:w-[60%] xs:w-[80%] xsm:w-[90%] w-[95%] mb-4'
                src={audienceSegmentation}
                alt='audienceSegmentation'
              />
            </div>
            <div className='md:w-[70%]'>
              <FeaturedCard item={featureCardData2[2]} page={'feature'} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto xl:px-0 px-4 maxWidth mb-[80px]'>
          <CTA />
        </div>
      </section>
    </div>
  )
}

export default page
