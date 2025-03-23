import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getToast } from "../utils/toast";
import { ToastContainer } from "react-toastify";

interface LoginProps {
    email: string;
    password:  string;
  };
  
const initialLoginValue: LoginProps = {
    email : '',
    password : ''
}
  

const Login = () => {
    const [loginData, setLoginData] = useState<LoginProps>(initialLoginValue);
    const [message, setMessage] = useState('');
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        })
    }

    const handleLoginSubmit = async(e : FormEvent) => {
        e.preventDefault();
        try{
            await loginUser(loginData.email, loginData.password );
            getToast("Logged In Successfully", "top-center");
            setMessage('');
        }
        catch(err){
            console.error("Please provide a Valid Email and Password", err);
            setMessage("Please provide a Valid Email and Password");
        }
    }

    const handleGoogleSignedIn = async() => {
        try{
            await signInWithGoogle();
            getToast("LoginIn Success!", "top-center");
            navigate('/');
        }
        catch(err){
            console.error("Google not Authenticated!", err);
        }
    }

  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
        <div className='min-w-[250px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
            <form onSubmit={handleLoginSubmit} className='flex flex-col gap-4 items-start w-full'>
                <h2 className='text-2xl text-text font-semibold'>Please Login</h2>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Email</label>
                    <input 
                        autoComplete="true"
                        type="email" id="email" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        placeholder="Enter Email Adress"
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="md:col-span-5 flex flex-col items-start w-full">
                    <label className='text-sm font-medium'>Password</label>
                    <input 
                        type="password" name="passowrd" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                        autoComplete="true"
                        placeholder="Enter Password" 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {
                  message &&  <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <button type="submit" className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'>Login</button>
                <h3 className='text-xs text-text font-medium py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleClick}>Register</span></h3>
            </form>
            <div className='flex flex-col gap-2 w-full'>
                <button 
                    className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 justify-center items-center md:gap-3 text-sm focus:outline-none'
                    onClick={handleGoogleSignedIn}
                >
                        <img src='/Google.svg' alt='basket' className='w-3 h-5'/>
                        Sign in with Google
                </button>
                <h3 className='text-xs text-text font-normal py-2'> ©2025 Book Store. All rights reserved</h3>
            </div>
        </div>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  )
}

export default Login;