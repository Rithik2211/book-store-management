import React from 'react'

const HeaderIntro = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full  gap-5 lg:gap-[180px] mt-[20px]'>
        <div className='flex flex-col justify-center items-start text-start gap-4 lg:max-w-xl'>
            <h2 className='text-4xl text-text font-semibold'>New Releases This Week</h2>
            <p className='text-text text-[15px] w-[400px] py-2 leading-relaxed '>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone.</p>
            <button className='bg-button text-white px-10 py-2 rounded-[8px] text-sm'>Subscribe</button>
        </div>
        <div className="w-full lg:w-auto flex justify-center items-start">
            <div className="relative w-full max-w-lg">
                <img 
                    src="/headerTitle.svg" 
                    alt="New book releases showcase" 
                    className="w-full h-auto object-contain"
                />
            </div>
      </div>
    </div>
  )
}

export default HeaderIntro;