import React from 'react'

const Footer = () => {

    const footerData = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal'];
    const contactImage = ['/Google.svg', '/Instagram.svg', '/Facebook.svg'];
  return (
    <div className='max-w-screen w-full border-t-[1.5px] flex flex-col md:flex-row justify-between items-center py-6 gap-12 '>
        <div className='flex flex-col md:flex-row items-center justify-start text-center gap-[20px]'>
            {
                footerData?.map((data,index) => 
                    <div key={index} className='text-sm text-[#0D0842]' >{data}</div>
                )
            }
        </div>
        <div className='flex flex-row justify-center text-center gap-[30px]'>
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