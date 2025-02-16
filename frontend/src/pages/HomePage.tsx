import React from 'react'
import HeaderIntro from '../components/HeaderIntro'
import ContactUs from '../components/ContactUs'
import TopSellerSection from '../components/TopSellerSection'

const HomePage = () => {
    
  return (
    <div className='max-w-screen-2xl w-full min-h-screen py-8'>
        <HeaderIntro />
        <TopSellerSection />
        <ContactUs />
    </div>
  )
}

export default HomePage