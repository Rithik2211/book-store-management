import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='flex flex-row h-[55px] max-w-screen w-full bg-white border-b-[1.5px] shadow-blue-100-md justify-between items-center text-black fixed top-0 left-0 z-10 px-[60px]'>
        <div className='flex flex-row justify-between items-center gap-[20px] w-[350px]'>
            <img src='/Menu.svg' alt='title logo' className='w-5 h-5' onClick={handleClick}/>
            <div className=' bg-[#EAEAEA] rounded-[5px] px-4 flex flex-row gap-[10px] relative sm:w-72 w-40'>
                <img src='/Search.svg' alt='basket' className='w-3 h-6'/>
                <input type='text' placeholder='What are you looking for ?' className='bg-transparent border-none w-full outline-none py-0 text-sm text-[#828282]' />
            </div>
        </div>
        <div className='flex flex-row justify-between items-center w-auto gap-[15px] md:gap-[30px]'>
            <img src='/Account.svg' alt='account' className='w-4 h-6'/>
            <img src='/Favorite.svg' alt='favorite' className='w-4 h-6 hidden md:block'/>
            <div>
                <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'><img src='/basket.svg' alt='basket' className='w-3 h-5'/>Basket</button>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar;