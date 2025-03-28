import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const navigate = useNavigate();
    return (
    //   <div className='flex flex-col justify-between items-center gap-3 w-full'>
    //       <h1>Add Books page</h1>
    //       <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard")}> Back to Dashboard</button>
    //   </div>
        <div className="flex flex-row items-center h-72 justify-center gap-4 rounded-md border border-gray-400">
            <div className="h-72 flex-shrink-0">
                {/* <img
                    src={`/books/${BooksDataProps.coverImage}`}
                    alt=""
                    className="w-full bg-cover p-2 rounded-md cursor-pointer "
                /> */}
            </div>

            <div className='p-4 flex flex-col justify-start items-start text-start'>
                <h3 className="text-md font-medium text-[#0D0842] mb-3">
                    Add Books page
                </h3>
                {/* <p className="text-sm text-[#0D0842] mb-5 line-clamp-2">{BooksDataProps.description}</p> */}
                <p className="font-normal mb-5">
                    {/* ${BooksDataProps.newPrice} <span className="line-through font-normal ml-2">${BooksDataProps.oldPrice}</span> */}
                </p>
                <div className='flex flex-row gap-2'>
                    {/* <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => handleAddItemsToCart(BooksDataProps)}><img src='/basket.svg' alt='basket' className='w-3 h-5' />Basket</button> */}
                    <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard")}> Back to Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default AddBooks;