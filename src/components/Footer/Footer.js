'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from '../../../public/Icons/Logo-footer.png'
import BackToTop from '../BackToTop/BackToTop'

const Footer = () => {
  const MainPages = [
    { name: 'How it works', url: '/how_it_works' },
    { name: 'Features', url: '/features' },
    { name: 'Widgets', url: '/widgets' },
    { name: 'Resources', url: '/resources' },
    { name: 'Pricing', url: '/pricing' }
  ]

  const product = [
    { name: 'Analytics', url: '/widgets' },
    { name: 'Campaign', url: '/widgets' },
    { name: 'Widgets', url: '/widgets' },
    { name: 'Audience', url: '/widgets' },
    { name: 'Segment', url: '/widgets' }
  ]

  const resources = [
    { name: 'Documention', url: '/resources' },
    { name: 'Blog', url: '/resources/blog' },
    { name: 'Help center', url: '/help_center' },
    { name: 'FAQs', url: '/help_center' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
    // 
    setIsScaled(true)
  };

  useEffect(() => {
    if (isScaled) {
      setTimeout(() => setIsScaled(false), 1000);
    }
  },)

  const [isVisible, setIsVisible] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-full bg-[#00070B] text-white h-fit relative z-50 lg:px-8 xl:px-0'>
      {isVisible && ( // Show the button only if isVisible is true
        <button
          className={` bottom-4  right-0 fixed lg:block`}
          onClick={scrollToTop}
        >
          <BackToTop isScaled={isScaled} />
        </button>
      )}
      <div className='container mx-auto'>
        <div className=' pb-8 flex flex-col lg:flex-row justify-around items-center px-8 lg:px-0'>
          <div className='flex flex-col lg:flex-row w-full gap-10 mt-20'>
            <div className='flex flex-col w-full gap-6'>
              <Image src={logo} alt='' width={180} height={100} />
              <div className='flex flex-col gap-4'>
                <h5 className='font-semibold'>Never miss an update</h5>
                <p className='text-[12px] text=[#B1B1B1] leading-5'>
                  Subscribe to receive the freshest subscription resources from
                  <br />
                  Dynamatic.
                </p>
                <div className='flex sm:flex-row flex-col gap-4'>
                  <form className='subscribe-form' action='#' method='post'>
                    <input
                      type='email'
                      name='email'
                      className='subscribe-input bg-[#1D1D1D] px-4 py-3 rounded-lg sm:inline-block xs:block w-full'
                      placeholder='Enter your email'
                    />
                  </form>
                  <button
                    type='submit'
                    className='subscribe-button bg-white text-black py-3 px-4 rounded-lg sm:inline-block xs:block'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className='relative flex flex-col lg:flex-row gap-6 lg:gap-0 w-11/12 justify-between'>
              <div className='flex flex-col gap-5'>
                <h5 className=' text-white text-md pb-2 z-20 font-bold text-xl'>
                  Main pages
                </h5>
                {MainPages.map((page) => (
                  <div key={page.name}>
                    <Link href={page.url}>
                      <p className='text-[14px] leading-5 font-normal'>
                        {page.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-5'>
                <h5 className=' text-white text-md pb-2 z-20 font-bold text-xl'>
                  Product
                </h5>
                {product.map((product) => (
                  <div key={product.name}>
                    <Link href={product.url}>
                      <p className='text-[14px] leading-5 font-normal'>
                        {product.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-5'>
                <h5 className=' text-white text-md pb-2 z-20 font-bold text-xl'>
                  Resources
                </h5>
                {resources.map((resource) => (
                  <div key={resource.name}>
                    <Link href={resource.url}>
                      <p className='text-[14px] leading-5 font-normal'>
                        {resource.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=' flex flex-col lg:flex-row  gap-6 justify-between w-full items-center border-t-2 border-[#374144] py-8 px-4 lg:px-0 '>
          <div className='flex flex-row justify-between w-full items-center md:flex-row gap-2 lg:gap-8'>
            <p className='text-[10px] lg:text-[17px] leading-5'>
              © 2024 dynamatics. All rights reserved.
            </p>
            <ul className=' flex flex-row list-disc gap-6 lg:gap-8 items-center justify-center'>
              <li>
                <p className=' text-[10px] lg:text-[17px] leading-5'>
                  Terms of use
                </p>
              </li>
              <li>
                <p className='text-[10px] lg:text-[17px] leading-5'>
                  Privacy Policy
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
