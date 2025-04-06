import React from 'react'
import { useNavigate } from 'react-router-dom';
import OrderTable from '../Charts/OrderTable';
import { useFetchAllBooksQuery } from '../../redux/books/booksApi';
import Spinner from '../Spinner';

const ManageBooks = () => {
    const navigate = useNavigate();
    const {data : FilterBooksProps=[], isLoading, isError} = useFetchAllBooksQuery(undefined);

    if(isLoading){
      return <Spinner />
    }

    if(isError){
      return <div>Error in Getting Table Details...</div>
    }
  return (
    <div className='flex flex-col justify-between items-center gap-3 w-full'>
        <h1>Manage Books page</h1>
        <OrderTable books={FilterBooksProps}/>
        <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate("/dashboard")}> Back to Dashboard</button>
    </div>
  )
}

export default ManageBooks;