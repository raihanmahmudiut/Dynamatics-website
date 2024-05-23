'use client'
import Image from 'next/image'
import { useState } from 'react'
import clock from '../../../public/Icons/clock.svg'
import { resources } from '../../../public/resource'

const ResourceTab = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [loadedresources, setLoadedResources] = useState(resources.slice(0, 9))
  const [allResourceLoaded, setAllResourceLoaded] = useState(false)
  const [cardDetails, setCardDetails] = useState(resources[7])

  const openTab = (tabName) => {
    setActiveTab(tabName)
  }

  const articles = resources.filter(
    (resource) => resource.category === 'Articles'
  )
  const blogs = resources.filter((resource) => resource.category === 'Blog')
  const guides = resources.filter((resource) => resource.category === 'Guide')
  const news = resources.filter((resource) => resource.category === 'News')

  // console.log(loadedresource)
  const handleResource = () => {
    setLoadedResources(resources)
    setAllResourceLoaded(true)
  }

  const handleDetails = (id) => {
    const singleDetails = loadedresources.find((single) => single.id === id)
    setCardDetails(singleDetails)
    console.log(singleDetails)
  }

  // useEffect(()=> {
  //     setCardDetails(resources[0])
  // }, [])
  return (
    <div className='w-full mx-auto px-2 lg:px-0'>
      <div className=' flex bg-gray-100 rounded-xl lg:space-x-4 p-2 overflow-x-auto md:w-[300px] lg:w-[415px] mx-auto my-10'>
        <button
          className={`px-2 py-1 lg:px-4 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-white transition transform delay-75  hover:bg-[#3A7DFF] focus:outline-none ${
            activeTab === 'all' ? 'bg-[#3A7DFF] text-white' : ''
          }`}
          onClick={() => openTab('all')}>
          All
        </button>
        <button
          className={`px-3 py-1 lg:px-4 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-white transition transform delay-75  hover:bg-[#2d477a] focus:outline-none ${
            activeTab === 'article' ? 'bg-[#3A7DFF] text-white' : ''
          }`}
          onClick={() => openTab('article')}>
          Articles
        </button>
        <button
          className={`px-3 py-1 lg:px-4 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-white transition transform delay-75  hover:bg-[#2d477a] focus:outline-none ${
            activeTab === 'blog' ? 'bg-[#3A7DFF] text-white' : ''
          }`}
          onClick={() => openTab('blog')}>
          Blog
        </button>
        <button
          className={`px-3 py-1 lg:px-4 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-white transition transform delay-75  hover:bg-[#2d477a] focus:outline-none ${
            activeTab === 'guide' ? 'bg-[#3A7DFF] text-white' : ''
          }`}
          onClick={() => openTab('guide')}>
          Guide
        </button>
        <button
          className={`px-3 py-1 lg:px-4 lg:py-2 text-center text-[12px] md:text-[14px] font-medium text-gray-700 rounded-xl hover:text-white transition transform delay-75  hover:bg-[#2d477a] focus:outline-none ${
            activeTab === 'news' ? 'bg-[#3A7DFF] text-white' : ''
          }`}
          onClick={() => openTab('news')}>
          News
        </button>
      </div>
      <div
        id='all'
        className={`tabcontent p-4 ${activeTab === 'all' ? '' : 'hidden'}`}>
        <CardContent cardDetails={cardDetails} />
        <h2 className='mb-10 font-semibold'>All {resources[0].category}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {loadedresources?.map((resource) => (
            <Content
              key={resource.id}
              resource={resource}
              handleDetails={handleDetails}
            />
          ))}
        </div>
        {!allResourceLoaded && (
          <div className='text-center my-6'>
            <button
              onClick={handleResource}
              className='bg-[#ECF8FF] text-[#3A7DFF] text-[14px] font-medium px-6 py-3 rounded-lg'>
              Load more
            </button>
          </div>
        )}
      </div>
      <div
        id='article'
        className={`tabcontent p-4 ${activeTab === 'article' ? '' : 'hidden'}`}>
        <CardContent cardDetails={cardDetails} />
        <h2 className='mb-10 font-semibold'>All {resources[0].category}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles?.map((resource) => (
            <Content
              key={resource.id}
              resource={resource}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
      <div
        id='blog'
        className={`tabcontent p-4 ${activeTab === 'blog' ? '' : 'hidden'}`}>
        <CardContent cardDetails={cardDetails} />
        <h2 className='mb-10 font-semibold'>All {resources[11]?.category}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {blogs?.map((resource) => (
            <Content
              key={resource.id}
              resource={resource}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
      <div
        id='guide'
        className={`tabcontent p-4 ${activeTab === 'guide' ? '' : 'hidden'}`}>
        <CardContent cardDetails={cardDetails} />
        <h2 className='mb-10 font-semibold'>All {resources[19]?.category}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {guides?.map((resource) => (
            <Content
              key={resource.id}
              resource={resource}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
      <div
        id='news'
        className={`tabcontent p-4 ${activeTab === 'news' ? '' : 'hidden'}`}>
        <CardContent cardDetails={cardDetails} />
        <h2 className='mb-10 font-semibold'>All {resources[23]?.category}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {news?.map((resource) => (
            <Content
              key={resource.id}
              resource={resource}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourceTab

const Content = ({ resource, handleDetails }) => {
  const [expand, setExpand] = useState(false)

  const toggleDescription = () => {
    setExpand(!expand)
  }

  return (
    <div>
      <div
        onClick={() => handleDetails(resource.id)}
        className='overflow-hidden shadow-lg rounded-xl cursor-pointer'>
        <div className=' bg-[#EBEBEB] flex justify-center items-center'>
          <Image
            className='object-cover w-[400px] h-[250px]'
            src={resource?.image}
            alt=''
          />
        </div>
        <div className='px-6 pt-4 pb-2 flex items-center justify-between'>
          <span className=' py-1 text-[10px] md:text-[12px] lg:text-[15px] text-[#B1B1B1] mr-2'>
            {resource.date}
          </span>
          <span className='flex items-center py-1 text-[10px] md:text-[12px] lg:text-[15px] text-[#B1B1B1] mr-2'>
            <Image className='mr-2' src={clock} alt='' />
            {resource.time}
          </span>
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-3'>
            {resource?.title}
          </div>
          {!expand ? (
            <p className='text-[12px] md:text-[14px] lg:text-[16px] mb-3'>
              {(resource?.description).slice(0, 103)}{' '}
              <button
                className='text-[#3A7DFF] font-semibold'
                onClick={toggleDescription}>
                Read more...
              </button>
            </p>
          ) : (
            <p className='text-[12px] md:text-[14px] lg:text-[16px] mb-3'>
              {resource?.description}{' '}
              <button
                className='text-[#3A7DFF] font-semibold'
                onClick={toggleDescription}>
                Show less...
              </button>
            </p>
          )}
          <div className='flex justify-between my-2 items-center'>
            <div className='flex space-x-2 items-center'>
              <Image src={resource.authorImage} alt='' />
              <p className='text-[10px] md:text-[12px] lg:text-[14px]'>
                {resource.author}
              </p>
            </div>
            <div>
              <span className='inline-flex items-center rounded-lg bg-[#E7FFEB] px-3 py-1 text-xs'>
                {resource.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CardContent = ({ cardDetails }) => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-center mb-6 md:mb-10 lg:mb-[80px]'>
        <div className='w-full lg:w-[50%]'>
          <Image
            className='w-full rounded-3xl'
            src={cardDetails?.image}
            alt=''
          />
        </div>
        <div className='w-full lg:w-[50%] space-y-4'>
          <p className='text-[#B1B1B1] text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>
            {cardDetails?.date}
          </p>
          <h3 className='font-bold leading-tight'>{cardDetails?.title}</h3>
          <p className='text-[12px] md:text-[14px] lg:text-[16px]'>
            {cardDetails?.description}
          </p>
          <div>
            <span className='inline-flex items-center rounded-[100px] bg-[#E7FFEB] px-3 py-1 text-[15px] font-medium'>
              {cardDetails?.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
