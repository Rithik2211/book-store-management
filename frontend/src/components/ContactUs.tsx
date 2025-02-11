import React, { useState } from 'react'

const ContactUs = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const navigateItems = ['About', 'Features', 'Pricing', 'Gallery', 'Team'];

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full  gap-5 lg:gap-[180px]'>
        <div className='flex flex-col justify-start items-start gap-[20px]'>
            <div className="relative ">
                <img src="/Contact.svg" alt="Contact" className="w-full h-auto object-contain" />
            </div>
            <div className='flex flex-row justify-center items-center gap-[35px]'>
                {
                    navigateItems.map((item, index) => (
                        <div key={index} className='text-text text-[15px]'>{item}</div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4'>
            <div className='flex flex-col justify-start items-start gap-1'>
                <p className='text-text text-[15px]'>Subscribe to stay tuned for new product and latest updates. </p>
                <span className='text-text text-[15px]'>Let’s do it!</span>
            </div>
            <div className='border-[1.5px] rounded-[5px] w-full relative'>
                <input  className='w-full px-4 text-sm bg-transparent border-none outline-none' type='text' placeholder='Enter your email address' value={text} onChange={(e) => handleTextChange(e)}/>
                <div className="absolute right-0 top-0 h-full px-[40px] text-center bg-black text-white text-sm rounded-r-[5px]">
                    Subscribe
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs;