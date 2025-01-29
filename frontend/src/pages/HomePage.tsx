import React, { useState } from 'react'


interface useDataType{
    name : string;
    author : string;
    isParent : boolean;
    title : string;
}
const HomePage = () => {
    const [userdata, setUserdata] = useState({
        name : "",
        author : "",
        isParent : false,
        title : ""
    });
    const handleFetch = (route: string) => {
        fetch(`http://localhost:3000${route}`)
        .then(res => res.json())
        .then(data => setUserdata(data))
        .catch(err => console.log("fetch error", err))
    }
  return (
    <div className='flex justify-between items-end flex-col gap-2 text-black'>
        <div className=''>
            <button onClick={() => handleFetch('/getData')}>Fetch user data</button>
        </div>
        {
            userdata && <div className='mx-2 my-3 p-2 border border-black'>
            <h1> {userdata?.title} </h1>
            <p>Author: {userdata?.author} </p>
            <p>Is Parent: {userdata?.isParent.toString()} </p>
            <p>name : {userdata?.name}</p>
        </div>
        }
    </div>
  )
}

export default HomePage