import CTA from '@/components/CTA/CTA'
import FeaturesLovedByMerchants from '@/components/FeaturesLovedByMerchants/FeaturesLovedByMerchants'
import HeroSection from '@/components/HeroSection/HeroSection'
import StepCard from '@/components/StepCard/StepCard'
import Image from 'next/image'
import chooseIcon from '../../../../public/Images/Choose icon.svg'
import general from '../../../../public/Images/General.svg'
import audiences from '../../../../public/Images/audiences.svg'
import chooseWidgetSmall from '../../../../public/Images/choose-widget-small.svg'
import chooseWidget from '../../../../public/Images/choose-widget.svg'
import customizedWidget from '../../../../public/Images/customize-widget.svg'
import dashboard from '../../../../public/Images/dashboard.svg'
import placement from '../../../../public/Images/placement.svg'
import customizedStyle from '../../../../public/Images/style.svg'

const page = () => {
  const listItem1 = [
    {
      title: 'Choose from a variety of Dynamatics widgets.'
    },
    {
      title:
        'Explore options like personalized upsells, trust badges, and more.'
    },
    {
      title: "Pick widgets that match your store's objectives and brand."
    }
  ]
  const listItem2 = [
    {
      title: 'Personalize widget appearance to match your brand.'
    },
    {
      title: 'Customize colors, fonts, and layouts easily.'
    },
    {
      title: 'Tailor content to resonate with your audience.'
    }
  ]
  const listItem3 = [
    {
      title: 'Personalize widget appearance to match your brand.'
    },
    {
      title:
        'Choose the perfect placement within your Shopify realm to maximize its impact.'
    },
    {
      title: 'Determine optimal widget placement across your store.'
    }
  ]
  const listItem4 = [
    {
      title: 'Define specific audience segments for targeted recommendations.'
    },
    {
      title: 'Tailor content based on demographics and behavior.'
    },
    {
      title:
        'Engage new visitors, reward loyal customers, and recover abandoned carts.'
    }
  ]
  const listItem5 = [
    {
      title:
        "With your widget selected, customized, placed, and targeted, it's time to sit back and witness the magic unfold."
    },
    {
      title: 'rack metrics like click-through rates and revenue.'
    },
    {
      title: 'Refine your strategy based on insights for maximum impact.'
    }
  ]
  return (
    <>
      <section className='heroSectionBg pb-[100px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title='How it works'
            description={
              'Step into Dynamatics, where simplicity meets sophistication. Explore how our seamless process elevates your Shopify store with enhanced dynamism and customer engagement in just a few steps.'
            }
            page={'helpCenter'}
          />
        </div>
      </section>

      {/* Step One */}
      <section>
        <div className='container mx-auto xl:px-0 px-6 maxWidth'>
          <div className='flex md:flex-row flex-col md:justify-items-end justify-center items-center lg:gap-x-10 gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='md:w-[60%] md:order-1 order-2'>
              <StepCard
                subHeading='Step 1'
                heading='Select Your Widget From Dynamatics Best Collection'
                description='Choose your wand wisely by selecting the perfect widget from our magical arsenal.'
                items={listItem1}
              />
            </div>
            <div className='relative flex justify-center md:order-2 order-1'>
              <Image className='' src={chooseWidget} alt='choose Widget' />
              <Image
                className='absolute xl:top-[90px] lg:top-[80px] md:top-[70px] sm:top-[90px] xs:top-[95px] top-[60px] md:w-[55%] sm:w-[50%]  w-[60%]'
                src={chooseWidgetSmall}
                alt='choose widget small image'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step Two */}
      <section>
        <div className='container mx-auto xl:px-0 px-6 maxWidth'>
          <div className='flex md:flex-row flex-col md:justify-items-end justify-center items-center lg:gap-x-10 md:gap-y-0 gap-y-10 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='relative flex justify-center'>
              <Image
                className=''
                src={customizedWidget}
                alt='customize widget'
              />
              <Image
                className='absolute xl:top-[250px] lg:top-[230px] md:top-[180px] xl:right-[40px] lg:right-[30px] md:right-[30px] sm:right-[130px] sm:top-[220px] xs:top-[210px] xs:right-[60px] top-[150px] right-[30px] w-[40%] lg:w-[36%] md:w-[40%] sm:w-[28%] xs:w-[35%]'
                src={chooseIcon}
                alt='choose widget small image'
              />
              <Image
                className='absolute lg:top-[140px] md:top-[120px] xl:left-0 lg:-left-[20px] md:left-[0] sm:left-[80px] xs:top-[130px] xs:left-[10px] top-[100px] -left-[10px] xl:w-[60%] md:w-[55%] sm:w-[40%] xs:w-[50%] w-[55%]'
                src={general}
                alt='choose widget small image'
              />
              <Image
                className='absolute lg:top-[100px] md:top-[70px]  xs:top-[90px] xl:left-[30px] lg:left-[15px] md:left-[15px] sm:left-[120px] xs:left-[50px] top-[60px] left-0 w-[50%] md:w-[50%] sm:w-[35%] xs:w-[45%]'
                src={customizedStyle}
                alt='choose widget small image'
              />
            </div>
            <div className='md:w-[60%]'>
              <StepCard
                subHeading='Step 2'
                heading='Increase the Limit of Your Imagination & Customize with More Options'
                description="Once you've chosen your mystical artifact, it's time to infuse it with your own unique charm."
                items={listItem2}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Step Three */}
      <section>
        <div className='container mx-auto xl:px-0 px-6 maxWidth'>
          <div className='flex md:justify-items-end justify-center md:flex-row flex-col items-center lg:gap-x-10 gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='md:w-[60%] md:order-1 order-2'>
              <StepCard
                subHeading='Step 3'
                heading='Select the Perfect Placement for Your Personalized Widget'
                description="Now that your widget is imbued with magic, it's time to decide where it will work its spell. "
                items={listItem3}
              />
            </div>
            <div className='flex justify-center md:order-2 order-1'>
              <Image className='' src={placement} alt='placement' />
            </div>
          </div>
        </div>
      </section>
      {/* Step Four */}
      <section>
        <div className='container mx-auto xl:px-0 px-6 maxWidth'>
          <div className='flex md:flex-row flex-col md:justify-items-end justify-center items-center lg:gap-x-10 gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='relative flex justify-center'>
              <Image className='' src={audiences} alt='customize widget' />
            </div>
            <div className='md:w-[60%]'>
              <StepCard
                subHeading='Step 4'
                heading='Target Audience with Tailored Numerous Options'
                description='Every enchantment requires a receptive audience. Tailor your spell to specific segments of your customer base by selecting the perfect audience for your widget.'
                items={listItem4}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Step Five */}
      <section>
        <div className='container mx-auto xl:px-0 px-4 maxWidth'>
          <div className='flex md:justify-items-end justify-center md:flex-row flex-col items-center lg:gap-x-10 gap-x-5 md:gap-y-0 gap-y-7 xl:py-[80px] lg:py-[60px] md:py-[50px] py-[45px]'>
            <div className='md:w-[60%] md:order-1 order-2'>
              <StepCard
                subHeading='Step 5'
                heading='Select the Perfect Placement for Your Personalized Widget'
                description="Now that your widget is imbued with magic, it's time to decide where it will work its spell. "
                items={listItem3}
              />
            </div>
            <div className='flex justify-center md:order-2 order-1'>
              <Image className='' src={dashboard} alt='placement' />
            </div>
          </div>
        </div>
      </section>

      {/* Features Loved By Merchants */}
      <section className='bg-[#F8F8F8]'>
        <div className='container mx-auto lg:px-0 px-6 maxWidth'>
          <FeaturesLovedByMerchants />
        </div>
      </section>
      <section>
        <div className='container mx-auto xl:px-0 px-6 maxWidth py-[80px]'>
          <CTA />
        </div>
      </section>
    </>
  )
}

export default page
