import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import getBaseUrl from '../utils/baseUrl';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    username: string;
    password:  string;
  };
  
const initialLoginValue: LoginProps = {
    username : '',
    password : ''
}

const AdminLogin = () => {
    const [loginData, setLoginData] = useState<LoginProps>(initialLoginValue);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }

    const handleLoginSubmit = async(e : FormEvent) => {
        e.preventDefault();
        try{
            console.log("getBaseUrl", getBaseUrl())
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, loginData, {
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            const auth = response.data
            console.log("Message Data", auth);
            if(auth.token){
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    alert("Token Has been Expired!");
                    navigate('/');
                }, 3600*1000)
            }
            alert("Admin Login Sucessfull");
            navigate('/');
        }
        catch(err){
            console.error("Please provide a Valid Email and Password", err);
        }
    }

  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
        <div className='min-w-[400px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <form onSubmit={handleLoginSubmit} className='flex flex-col gap-4 items-start w-full'>
                <h2 className='text-2xl text-text font-semibold'>Admin Login</h2>
                <div className="md:col-span-5 flex flex-col items-start w-full my-2">
                    <label className='text-sm font-medium'>UserName</label>
                    <input 
                        autoComplete="true"
                        type="name" id="username" name="username" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter User Name"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full my-2">
                    <label className='text-sm font-medium'>Password</label>
                    <input 
                        type="password" name="password" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        autoComplete="true"
                        placeholder="Enter Password" 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <button type="submit" className='bg-button text-center text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none mb-2'>Login</button>
            </form>
            <div className='flex flex-col gap-2 w-full'>
                <h3 className='text-xs text-text font-normal py-2'> ©2025 Book Store. All rights reserved</h3>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin;