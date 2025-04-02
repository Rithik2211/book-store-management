import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const NavigationBar = () => {
    const navigate = useNavigate();
    const ProductItem = useSelector((state: RootState) => state.cart.cartProductItems)
    const { currentUser, logoutUser } = useAuth();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropDownOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  const handleClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    logoutUser();
    setIsDropDownOpen(false);
    navigate('/');
  }

  return (
    <div className='flex flex-row h-[55px] max-w-screen w-full bg-white border-b-[1.5px] shadow-blue-100-md justify-between items-center text-black fixed top-0 left-0 z-10 px-[25px] md:px-[60px]'>
        <div className='flex flex-row justify-between items-center gap-3 w-[250px] md:w-[350px] mr-[10px]'>
            <img src='/Menu.svg' alt='title logo' className='w-5 h-5 ' onClick={handleClick}/>
            <div className=' bg-[#EAEAEA] rounded-[5px] px-4 flex flex-row gap-[10px] relative sm:w-55 w-45'>
                <img src='/Search.svg' alt='basket' className='w-3 h-6'/>
                <input type='text' placeholder='What are you looking for ?' className='bg-transparent border-none w-full outline-none py-0 text-sm text-[#828282]' />
            </div>
        </div>
        <div className='flex flex-row justify-between items-center w-auto gap-[15px] md:gap-[30px] relative'>
          <div ref={dropdownRef}>
                {currentUser ? (
                    <div>
                        <img 
                            src='/Account.svg' 
                            alt='account' 
                            className='w-4 h-6 cursor-pointer' 
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                        />
                        {isDropDownOpen && (
                            <div className='absolute right-0 top-10 mt-2 w-48 shadow-lg rounded-md z-40'>
                                <ul>
                                    <li>
                                        <Link to={'/orders'}>Order Page</Link>
                                    </li>
                                    <li>
                                        <Link to={'/dashboard'}>Dashboard</Link>
                                    </li>
                                    <li>
                                        <button 
                                          className='bg-button text-white text-center px-5 py-1 rounded-[8px] flex flex-row justify-center items-center gap-1 md:gap-3 text-sm focus:outline-none w-full' 
                                          onClick={handleLogout}>
                                            Logout <LogOut className='w-3 h-5'/>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <img 
                        src='/Account.svg' 
                        alt='account' 
                        className='w-4 h-6 cursor-pointer' 
                        onClick={() => navigate('/login')}
                    />
                )}
            </div>
            <img src='/Favorite.svg' alt='favorite' className='w-4 h-6 hidden md:block'/>
            <div>
                <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => navigate('/cart')}><img src='/basket.svg' alt='basket' className='w-3 h-5'/>{ProductItem.length}</button>
            </div>
        </div>
    </div>
  )
}

export default NavigationBar;