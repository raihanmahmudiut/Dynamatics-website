import CTA from '@/components/CTA/CTA'
import HeroSection from '@/components/HeroSection/HeroSection'
import IconCard from '@/components/IconCard/IconCard'

const data3 = [
  {
    id: 11,
    heading: 'Getting Started',
    description:
      'Step-by-step instructions to install Dynmatic on your Shopify store.',
    button: 'SEE MORE'
  },
  {
    id: 12,
    heading: 'Using dynamatics',
    description: 'Introduction to the basic functionalities of Dynmatic.',
    button: 'SEE MORE'
  },
  {
    id: 13,
    heading: 'Widgets',
    description:
      'Explore the variety of widgets available in Dynmatic and their purposes.',
    button: 'SEE MORE'
  },
  {
    id: 14,
    heading: 'Campaign',
    description:
      'Learn how to create and manage different types of campaign widgets.',
    button: 'SEE MORE'
  },
  {
    id: 15,
    heading: 'Audience',
    description:
      'Understand how to use audience widgets to target specific customer segments.',
    button: 'SEE MORE'
  },
  {
    id: 16,
    heading: 'Feeds',
    description:
      'Utilize feed widgets to showcase dynamic product recommendations.',
    button: 'SEE MORE'
  },
  {
    id: 17,
    heading: 'Placement',
    description:
      'Guide on where and how to place widgets effectively on your Shopify store.',
    button: 'SEE MORE'
  },
  {
    id: 18,
    heading: 'Shopify plus checkout',
    description:
      'Instructions for integrating Dynmatic with Shopify Plus checkout.',
    button: 'SEE MORE'
  },
  {
    id: 19,
    heading: 'Post purchase',
    description:
      'Enhance post-purchase experiences with targeted upselling strategies.',
    button: 'SEE MORE'
  },
  {
    id: 20,
    heading: 'A/B testing',
    description:
      'Guide on where and how to place widgets effectively on your Shopify store.',
    button: 'SEE MORE'
  }
]

const page = () => {
  return (
    <div>
      <section className='heroSectionBg2 pb-[60px] pt-[130px]'>
        <div className='container mx-auto px-5 sm:px-0 maxWidth'>
          <HeroSection
            title={'Dynamatics Help Center'}
            description={''}
            page={'helpcenter'}
          />
        </div>

        <div className='container mx-auto mt-20 maxWidth xl:px-0 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data3.map((card) => (
              <IconCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto mb-11 maxWidth xl:px-0 px-4'>
          <CTA />
        </div>
      </section>
    </div>
  )
}

export default page
