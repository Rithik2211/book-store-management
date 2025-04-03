import { IconButton, Tooltip } from '@mui/material';
import { ChartColumnIncreasing, Folder, History, LayoutGrid, Settings } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSideNav = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col w-[40px] max-h-screen h-full bg-white border-r-[1.5px] shadow-blue-100-md justify-between items-center text-black fixed top-0 left-0 z-9 px-[20px] md:px-[60px] py-[30px]'>
        <div className='flex flex-col justify-between items-center gap-8 w-[250px] md:w-[350px] mr-[10px] pt-[50px]'>
            <Tooltip title="Dashboard" placement='right'>
                <IconButton onClick={() => navigate('/dashboard')}>
                    <Folder className='w-6 h-6 text-black' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Anaytics" placement='right'>
                <IconButton onClick={() => navigate('/dashboard')}>
                    <ChartColumnIncreasing className='w-6 h-6 text-black' />
                </IconButton>
            </Tooltip>
            <Tooltip title="Collections" placement='right'>
                <IconButton onClick={() => navigate('/dashboard/orders')}>
                    <LayoutGrid className='w-6 h-6 text-black' />
                </IconButton>
            </Tooltip>
            <Tooltip title="History" placement='right'>
                <IconButton onClick={() => navigate('/dashboard/history')}>
                    <History className='w-6 h-6 text-black' />
                </IconButton>
            </Tooltip>
        </div>
        <div className='flex flex-col justify-between items-center h-auto gap-[15px] md:gap-[30px] relative'>
            <Tooltip title="Settings">
                <IconButton>
                    <Settings className='w-6 h-6 text-black'/>
                </IconButton>
            </Tooltip>
        </div>
    </div>
    )
}

export default AdminSideNav;