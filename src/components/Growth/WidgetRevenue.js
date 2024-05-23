import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import styles from './WidgetRevenue.module.css'
const WidgetRevenue = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}>
      <div className='bg-brandBlue rounded-xl w-full py-4 px-3 flex flex-col gap-8 shadow-[0px_5.13px_120.67px_0px_#0000001A]'>
        <div className='flex flex-col gap-4'>
          <h5 className='text-white'>Widget Revenue</h5>
          <h4 className='text-white text-[26px] font-semibold'>
            ${counterOn && <CountUp end={724} />}
          </h4>
        </div>
        {counterOn && (
          <div>
            <svg
              viewBox='104.853 214.251 170.802 92.168'
              className='w-44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <filter
                  id='filter0_d_498_7206'
                  x='-20.6698'
                  y='0.593037'
                  width='414.969'
                  height='442.479'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'>
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='5.13488' />
                  <feGaussianBlur stdDeviation='60.3349' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_498_7206'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_498_7206'
                    result='shape'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_498_7206'
                  x1='117.522'
                  y1='273.839'
                  x2='117.522'
                  y2='304.29'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#72FFBB' />
                  <stop offset='1' stopColor='#3CFE38' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_498_7206'
                  x1='151.941'
                  y1='280.524'
                  x2='151.941'
                  y2='304.291'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#72FFBB' />
                  <stop offset='1' stopColor='#3CFE38' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_498_7206'
                  x1='186.36'
                  y1='271.364'
                  x2='186.36'
                  y2='304.291'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#72FFBB' />
                  <stop offset='1' stopColor='#3CFE38' />
                </linearGradient>
                <linearGradient
                  id='paint3_linear_498_7206'
                  x1='221.006'
                  y1='262.947'
                  x2='221.006'
                  y2='304.291'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#72FFBB' />
                  <stop offset='1' stopColor='#3CFE38' />
                </linearGradient>
                <linearGradient
                  id='paint4_linear_498_7206'
                  x1='255.88'
                  y1='274.886'
                  x2='255.88'
                  y2='304.291'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#72FFBB' />
                  <stop offset='1' stopColor='#3CFE38' />
                </linearGradient>
              </defs>
              <g className={styles.myGroup}>
                <rect
                  opacity='0.2'
                  x='111.238'
                  y='235.219'
                  width='12.5688'
                  height='69.072'
                  rx='2.78727'
                  fill='#F8F8F8'
                />
                <rect
                  x='111.238'
                  y='256.262'
                  width='12.5688'
                  height='48.0286'
                  rx='2.78727'
                  fill='white'
                />
                <rect
                  x='111.238'
                  y='273.839'
                  width='12.5688'
                  height='30.4511'
                  rx='2.78727'
                  fill='url(#paint0_linear_498_7206)'
                />
                <rect
                  opacity='0.2'
                  x='145.657'
                  y='226.554'
                  width='12.5688'
                  height='77.737'
                  rx='2.78727'
                  fill='#F8F8F8'
                />
                <rect
                  x='145.657'
                  y='266.66'
                  width='12.5688'
                  height='37.6306'
                  rx='2.78727'
                  fill='white'
                />
                <rect
                  x='145.657'
                  y='280.524'
                  width='12.5688'
                  height='23.7667'
                  rx='2.78727'
                  fill='url(#paint1_linear_498_7206)'
                />
                <rect
                  opacity='0.2'
                  x='180.076'
                  y='234.476'
                  width='12.5688'
                  height='69.8148'
                  rx='2.78727'
                  fill='#F8F8F8'
                />
                <rect
                  x='180.076'
                  y='252.548'
                  width='12.5688'
                  height='51.7421'
                  rx='2.78727'
                  fill='white'
                />
                <rect
                  x='180.076'
                  y='271.364'
                  width='12.5688'
                  height='32.9268'
                  rx='2.78727'
                  fill='url(#paint2_linear_498_7206)'
                />
                <rect
                  opacity='0.2'
                  x='214.722'
                  y='221.107'
                  width='12.5688'
                  height='83.1835'
                  rx='2.78727'
                  fill='#F8F8F8'
                />
                <rect
                  x='214.722'
                  y='238.932'
                  width='12.5688'
                  height='65.3585'
                  rx='2.78727'
                  fill='white'
                />
                <rect
                  x='214.722'
                  y='262.947'
                  width='12.5688'
                  height='41.3442'
                  rx='2.78727'
                  fill='url(#paint3_linear_498_7206)'
                />
                <rect
                  opacity='0.2'
                  x='249.595'
                  y='245.129'
                  width='12.5688'
                  height='59.1614'
                  rx='2.78727'
                  fill='#F8F8F8'
                />
                <rect
                  x='249.595'
                  y='257.807'
                  width='12.5688'
                  height='46.484'
                  rx='2.78727'
                  fill='white'
                />
                <rect
                  x='249.595'
                  y='274.886'
                  width='12.5688'
                  height='29.4046'
                  rx='2.78727'
                  fill='url(#paint4_linear_498_7206)'
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </ScrollTrigger>
  )
}

export default WidgetRevenue
