import React, { useState } from 'react'

const ContactUs = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const navigateItems = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-[180px] w-full px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col justify-start items-center lg:items-start gap-[20px] w-full lg:w-auto'>
            <div className="relative w-full max-w-[150px] md:max-w-[250px] mx-auto lg:mx-0">
                <img src="/Contact.svg" alt="Contact" className="w-full h-auto object-contain" />
            </div>
            <div className='flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5 md:gap-[35px]'>
                {
                    navigateItems.map((item, index) => (
                        <div key={index} className='text-text text-[13px] sm:text-[14px] md:text-[15px]'>{item}</div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4 w-full lg:w-auto mt-8 lg:mt-0'>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-1 w-full'>
                <p className='text-text text-[13px] sm:text-[14px] md:text-[15px]'>Subscribe to stay tuned for new product and latest updates. </p>
                <span className='text-text text-[13px] sm:text-[14px] md:text-[15px]'>Let’s do it!</span>
            </div>
            <div className='border-[1.5px] rounded-[5px] w-full relative'>
                <input  className='w-full px-4 py-2 text-xs sm:text-sm bg-transparent border-none outline-none' type='text' placeholder='Enter your email address' value={text} onChange={(e) => handleTextChange(e)}/>
                <div className="absolute right-0 top-0 h-full px-3 sm:px-[40px] text-center bg-black text-white text-xs sm:text-sm rounded-r-[5px]">
                    Subscribe
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;