'use client'

import CTA from '@/components/CTA/CTA'
import FeaturedCard from '@/components/FeatureCard/FeatureCard'
import Growth from '@/components/Growth/Growth'
import HeroSectionHome from '@/components/HeroSection/HeroSectionHome'
import IconCard from '@/components/IconCard/IconCard'
import SupportHome from '@/components/SupportHome/SupportHome'
import Tab from '@/components/Tab/Tab'
import Testimonial from '@/components/Testimonial/Testimonial'
import UpsellHome from '@/components/UpsellHome/UpsellHome'
import 'aos/dist/aos.css'
import { featureCardData } from '../../../public/Data'
import icon3 from '../../../public/Icons/Audienc.svg'
import icon1 from '../../../public/Icons/Customize.svg'
import icon5 from '../../../public/Icons/Data.svg'
import icon4 from '../../../public/Icons/Frictionless.svg'
import icon9 from '../../../public/Icons/Payment.svg'
import icon7 from '../../../public/Icons/Personalize.svg'
import icon8 from '../../../public/Icons/Promotion.svg'
import icon6 from '../../../public/Icons/Smart.svg'
import icon2 from '../../../public/Icons/Upsell.svg'
const data = [
  {
    id: 7,
    heading: 'Customizable Slide-Out Cart',
    description:
      'Craft a seamless shopping experience with a fully customizable slide-out cart that aligns with your brand identity.',
    logo: icon1
  },
  {
    id: 8,
    heading: 'Versatile Upselling Widgets',
    description:
      'Boost sales effortlessly with an array of upselling and cross-selling widgets tailored to customer preferences.',
    logo: icon2
  },
  {
    id: 9,
    heading: 'Real-Time Audience Segmentation',
    description:
      'Personalize the shopping journey by showing specific widgets to distinct audience segments in real time.',
    logo: icon3
  },
  {
    id: 10,
    heading: 'Built-in Frictionless Widgets',
    description:
      'Reduce friction in the buying process with integrated widgets like express payment methods, trusted badges, bundles, and subscriptions.',
    logo: icon4
  },
  {
    id: 11,
    heading: 'Customer Data Collection',
    description:
      'Gather valuable data, including customer birthdays, for targeted marketing campaigns and promotions.',
    logo: icon5
  },
  {
    id: 12,
    heading: 'Smarter Cart for Repeat Purchases',
    description:
      'Drive customer retention by enabling easy repurchases, bundle exploration, and subscriptions directly from the cart.',
    logo: icon6
  },
  {
    id: 13,
    heading: 'Personalized Upsells',
    description:
      'Implement intelligent upselling strategies within the cart, offering personalized product suggestions based on customer behavior.',
    logo: icon7
  },
  {
    id: 14,
    heading: 'Promotion of Collections and Banners:',
    description:
      'Showcase featured collections and promotions with custom banners directly in the cart.',
    logo: icon8
  },
  {
    id: 15,
    heading: 'Express Payment and Trusted Badges',
    description:
      'Streamline the checkout process with express payment methods and instill trust with badges, reducing cart abandonment.',
    logo: icon9
  }
]

export default function Home() {
  return (
    <div className=' '>
      <section className='relative home w-full h-fit'>
        {/* <div className="absolute heroSectionBg w-full h-full z-0"></div> */}
        {/* <h1 className="h-screen relative z-10 pt-20">
						Welcome to Dynamatics
					</h1> */}
        <div className=' relative z-10 md:pt-44 sm:pt-36 pt-32 pb-20 '>
          <HeroSectionHome />
        </div>
      </section>

      {/* <section className="bg-white">
				<div className="container mx-auto  maxWidth py-20">
					<OurCustomersSlider
						subHeading={"our customers"}
						title={"Installed by 10,000+ Shopify stores"}
						desc={
							"Join successful entrepreneurs who've seen real results. Our app delivers increased sales, higher satisfaction, and improved conversion rates."
						}
					/>
				</div>
			</section> */}

      <section className='bg-black'>
        <div className='container mx-auto  maxWidth xl:px-0 px-4'>
          <Tab />
        </div>
      </section>
      <section className='bg-white py-20'>
        <div className='container mx-auto maxWidth xl:px-0 px-4'>
          <div className='flex flex-col-reverse lg:flex-row justify-between w-full lg:gap-x-[150px] gap-x-5 md:gap-y-0 gap-y-7 items-center'>
            <div className=' w-full lg:w-1/2'>
              <Growth />
            </div>
            <div className='lg:w-1/2'>
              <FeaturedCard item={featureCardData[0]} />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white sm:py-20'>
        <div className='container mx-auto maxWidth xl:px-0 px-4'>
          <div className='flex flex-col lg:flex-row justify-between w-full md:gap-y-0 gap-y-7 items-center'>
            <div className='lg:w-1/2'>
              <FeaturedCard item={featureCardData[1]} />
            </div>
            <div className='relative flex justify-end bg-[#ECF8FF] h-[500px] w-full lg:w-[480px] rounded-2xl'>
              <UpsellHome />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white py-20'>
        <div className='container mx-auto maxWidth xl:px-0 px-4'>
          <div className='flex flex-col-reverse lg:flex-row justify-between w-full lg:gap-x-[150px] gap-x-5 md:gap-y-0 gap-y-7 items-center'>
            <div className='lg:w-1/2 flex justify-end'>
              <SupportHome />
            </div>
            <div className='lg:w-1/2'>
              <FeaturedCard item={featureCardData[2]} />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white sm:py-20 pb-10'>
        <div className='text-center mx-auto pb-20 maxWidth xl:px-0 px-4'>
          <p className='text-brandBlue font-medium'>FEATURES</p>
          <h2 className='font-semibold leading-tight xl:w-[70%] lg:w-[75%] md:w-[70%] sm:w-[70%] xs:w-[88%] w-full mx-auto'>
            Transforming Shopify with Innovative Features and Functions!
          </h2>
        </div>
        <div className='container mx-auto maxWidth xl:px-0 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {data.map((card) => (
              <IconCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      <section className='testimonialBg'>
        <div className='lg:pl-[340px] mx-auto py-[80px] px-4 lg:pr-0'>
          <Testimonial />
        </div>
      </section>
      <section className='bg-white py-20'>
        <div className='container mx-auto maxWidth xl:px-0 px-4'>
          <CTA />
        </div>
      </section>
    </div>
  )
}
