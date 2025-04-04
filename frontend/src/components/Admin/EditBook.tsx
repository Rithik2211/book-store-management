import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div className="flex flex-row items-center h-72 justify-center gap-4">
            EditBook Page
            <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard/manage-books")}> Back to Dashboard</button>
        </div>
    )
}

export default EditBook;