import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import errorImage from '../../../public/Images/error-man.gif'
import errorcode from '../../../public/Images/errorcode.png'
export default function NotFound() {
  return (
    <div className=' flex flex-col items-center justify-center py-20'>
      <Image src={errorcode} alt='error' className='w-72 bg-white mt-20' />
      <Image src={errorImage} alt='errorImage' className='w-auto h-[404px]' />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='font-semibold text-center leading-normal'>
          Don&apos;t panic!{' '}
          <span className='text-[#FF1414]'>Page Not Found</span>
          <br />
          Try to 🐝 chill. Errors sometimes happen.
        </h2>

        <Link
          href='/'
          className='flex flex-row items-center gap-3 bg-brandBlue px-4 py-2 rounded-lg text-white'>
          <span>
            <FiArrowLeft />
          </span>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
