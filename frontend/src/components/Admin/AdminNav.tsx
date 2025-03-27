import { IconButton, Tooltip } from '@mui/material';
import { Bell, LogOut, UserRound } from 'lucide-react';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GetIconNav from '../../utils/getIconNav';

const AdminNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

return (
  <div className='flex flex-row h-[55px] max-w-screen w-full bg-white border-b-[1.5px] shadow-blue-100-md justify-between items-center text-black fixed top-0 left-0 z-10 px-[25px] md:px-[60px]'>
      <div className='flex flex-row justify-between items-center gap-3 w-[250px] md:w-[350px] mr-[10px]'>
          <h2 className='text-xl font-medium'>Admin Dashboard</h2>
      </div>
      <div className='flex flex-row justify-between items-center w-auto gap-[15px] md:gap-[30px] relative'>
        <Tooltip title="User" placement="bottom">
            <IconButton>
                <UserRound className='w-5 h-5'/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Notification" placement="bottom">
            <IconButton>
                <Bell className='w-5 h-5'/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Logout" placement="bottom">
            <IconButton>
                <LogOut className='w-5 h-5'/>
            </IconButton>
        </Tooltip>
      </div>
  </div>
)
}

export default AdminNav;