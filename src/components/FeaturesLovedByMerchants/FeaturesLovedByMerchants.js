import icon3 from '../../../public/Icons/Audienc.svg'
import icon1 from '../../../public/Icons/Customize.svg'
import icon2 from '../../../public/Icons/Upsell.svg'
import IconCard from '../IconCard/IconCard'

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
  }
]

const FeaturesLovedByMerchants = () => {
  return (
    <div className='py-12'>
      <div>
        <h2 className='font-semibold xl:text-[44px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[22px] md:mb-[40px] mb-[20px]'>
          Features loved by Merchants
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {data.map((card) => (
          <IconCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default FeaturesLovedByMerchants
