import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from 'react';

type Inputs = {
    email: string,
    password:  string | number,
  };
  

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const handleLoginSwitch = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div className='container max-w-screen-2xl w-full p-6 '>
        {
            isLogin ? (
                <div className='min-w-[250px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-start w-full'>
                        <h2 className='text-2xl text-text font-semibold'>Please Login</h2>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Email {errors.email && <span className="text-red-500">* email is required</span>}</label>
                            <input 
                                {...register("email", { required: true })}
                                autoComplete="true"
                                type="email" id="email" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Email Adress" />
                        </div>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Password {errors.email && <span className="text-red-500">* password is required</span>}</label>
                            <input 
                                {...register("password", { required: true })}
                                type="password" name="passowrd" id="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                // defaultValue={currentUser?.email}
                                autoComplete="true"
                                placeholder="Enter Password" />
                        </div>
                        <button type="submit" className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'>Login</button>
                        <h3 className='text-xs text-text font-medium py-3'> Haven't an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleLoginSwitch}>Register</span></h3>
                    </form>
                    <div className='flex flex-col gap-2 w-full'>
                        <button className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 justify-center items-center md:gap-3 text-sm focus:outline-none'><img src='/Google.svg' alt='basket' className='w-3 h-5'/>Sign in with Google</button>
                        <h3 className='text-xs text-text font-normal py-2'> ©2025 Book Store. All rights reserved</h3>
                    </div>
                </div>
            ) : 
            (
                // Register
                <div className='min-w-[200px] md:min-w-[250px] border p-4 rounded-md shadow-md flex flex-col justify-center items-center'>
                    <form className='flex flex-col gap-4 items-start w-full'>
                        <h2 className='text-2xl text-text font-semibold'>Please Register</h2>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>First Name</label>
                            <input 
                                type="text" id="first" name="firstname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter First Name" />
                        </div>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Last Name</label>
                            <input 
                                type="text" id="last" name="lastname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Last Name" />
                        </div>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Email</label>
                            <input 
                                type="email" id="email" name="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Email Adress" />
                        </div>
                        <div className="md:col-span-5 flex flex-col items-start w-full">
                            <label className='text-sm font-medium'>Password</label>
                            <input 
                                type="password" id="password" name="password" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 appearance-none focus:shadow focus:outline-none"
                                placeholder="Enter Password" />
                        </div>
                        <button type='submit' className='bg-button text-white px-5 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'>Register</button>
                        <h3 className='text-xs text-text font-medium py-3'> Got an account? Please <span className='text-blue-500 cursor-pointer' onClick={handleLoginSwitch}>Login</span></h3>
                    </form>
                    <div className='flex flex-col gap-2 w-full'>
                        <button className='bg-button text-white px-5 py-2 rounded-[8px] flex flex-row gap-1 justify-center items-center md:gap-3 text-sm focus:outline-none'><img src='/Google.svg' alt='basket' className='w-3 h-5'/>Sign in with Google</button>
                        <h3 className='text-xs text-text font-normal py-2'> ©2025 Book Store. All rights reserved</h3>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Login;