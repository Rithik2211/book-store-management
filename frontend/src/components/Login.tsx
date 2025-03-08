import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React from 'react'

const Login = () => {
  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
        <div className='min-w-[200px] md:min-w-[250px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-4 items-start w-full'>
                <h2 className='text-2xl text-text font-semibold'>Please Login</h2>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label>Email</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // defaultValue={currentUser?.email}
                        placeholder="Enter Email Adress" />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label>Password</label>
                    <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // defaultValue={currentUser?.email}
                        placeholder="Enter Password" />
                </div>
                <button className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'>Login</button>
                <h3 className='text-xs text-text font-normal py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer'>Register</span></h3>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <button className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 justify-center items-center md:gap-3 text-sm focus:outline-none'><img src='/Google.svg' alt='basket' className='w-3 h-5'/>Sign in with Google</button>
                <h3 className='text-xs text-text font-normal py-2'> ©2025 Book Store. All rights reserved</h3>
            </div>
        </div>
    </div>
  )
}

export default Login;