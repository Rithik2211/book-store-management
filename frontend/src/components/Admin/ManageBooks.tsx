import React from 'react'
import { useNavigate } from 'react-router-dom';

const ManageBooks = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-between items-center gap-3 w-full'>
        <h1>Manage Books page</h1>
        <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard")}> Back to Dashboard</button>
    </div>
  )
}

export default ManageBooks;