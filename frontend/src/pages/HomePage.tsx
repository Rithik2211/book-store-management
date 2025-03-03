import React from 'react'
import HeaderIntro from '../components/HeaderIntro'
import ContactUs from '../components/ContactUs'
import TopSellerSection from '../components/TopSellerSection'
import RecommendedSlide from '../components/Recommended'
import NewsSection from '../components/NewsSection'

const HomePage = () => {
    
  return (
    <div className='max-w-screen-2xl w-full min-h-screen'>
        <HeaderIntro /> 
        {/* <TopSellerSection />
        <RecommendedSlide /> */}
        {/* <NewsSection /> */}
        <ContactUs />
    </div>
  )
}

export default HomePage