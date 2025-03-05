import React from 'react'

const HeaderIntro = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-between items-center py-16 gap-12 flex-shrink-1'>
      <div className="flex md:items-center justify-end">
            <img 
                src="/headerTitle.svg" 
                alt="New book releases showcase" 
                className="w-full h-auto object-contain"
            />
        </div>
        <div className='flex flex-col items-start text-start gap-4'>
            <h1 className='md:text-4xl text-3xl text-text font-medium mb-7'>New Releases This Week</h1>
            <p className='text-text text-[15px] w-[400px] py-2 leading-relaxed '>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>
            <button className='bg-button text-white px-10 py-2 rounded-[8px] text-sm'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default HeaderIntro;