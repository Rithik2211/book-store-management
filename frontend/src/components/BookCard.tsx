import React from 'react'
import { useFetchBookByIdQuery } from '../redux/books/booksApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductItem } from '../redux/cartSlice';
import { BooksDataProps } from '../interfaces/bookDataProps';
import { getToast } from '../utils/toast';
import { ToastContainer } from 'react-toastify';
import Spinner from './Spinner';

const BookCard = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: BooksDataProps = {}, isLoading, isError } = useFetchBookByIdQuery(id);

    if(isLoading) return <Spinner />
    if(isError) return <div>Error in Getting Details!</div>

    const handleAddItemsToCart = (item: BooksDataProps) => {
        dispatch(addProductItem(item));
        getToast('Product Added to Cart !');
      }

  return (
    <div>
       <div className="flex flex-row items-center h-72 justify-center gap-4">
            <div className="h-72 flex-shrink-0">
                <img
                    src={`/books/${BooksDataProps.coverImage}`}
                    alt=""
                    className="w-full bg-cover p-2 rounded-md cursor-pointer "
                />
            </div>

            <div className='p-4 flex flex-col justify-start items-start text-start'>
                <h3 className="text-md font-medium text-[#0D0842] mb-3">
                    {BooksDataProps.title}
                </h3>
                <p className="text-sm text-[#0D0842] mb-5 line-clamp-2">{BooksDataProps.description}</p>
                <p className="font-normal mb-5">
                    ${BooksDataProps.newPrice} <span className="line-through font-normal ml-2">${BooksDataProps.oldPrice}</span>
                </p>
                <div className='flex flex-row gap-2'>
                    <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => handleAddItemsToCart(BooksDataProps)}><img src='/basket.svg' alt='basket' className='w-3 h-5' />Basket</button>
                    <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        </div>
        <ToastContainer
            position="bottom-right"
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

export default BookCard;