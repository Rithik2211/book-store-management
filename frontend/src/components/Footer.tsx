import React from 'react'

const Footer = () => {

    const footerData = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal'];
    const contactImage = ['/Google.svg', '/Instagram.svg', '/Facebook.svg'];
  return (
    <div className='h-[55px] max-w-screen-2xl w-full border-t-[1.5px] flex flex-col md:flex-row justify-between items-center gap-[20px] absolute left-0 px-[50px]'>
        <div className='flex flex-row items-center justify-start text-center gap-[20px] pt-[20px] md:pt-0'>
            {
                footerData?.map((data,index) => 
                    <div key={index} className='text-sm text-[#0D0842]' >{data}</div>
                )
            }
        </div>
        <div className='flex flex-row items-start justify-center text-center gap-[30px] pb-[20px] md:pb-0'>
            {
                contactImage?.map((image, index) => 
                    <img key={index} src={image} alt='social media' className='w-4 h-6 hover:opacity-80 transition-opacity'/>
                )
            }
        </div>
    </div>
  )
}

export default Footer;