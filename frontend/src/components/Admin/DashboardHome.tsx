import { BookOpenCheck, ChartPie, Pencil, Plus, TrendingDown, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useFetchAllBooksQuery } from '../../redux/books/booksApi';
import { useNavigate } from 'react-router-dom';
import DashboardAnalytics from './DashboardAnalytics';
import DashboardCollections from './DashboardCollections';
import DashboardHistory from './DashboardHistory';
import axios from 'axios';
import getBaseUrl from '../../utils/baseUrl';
import Spinner from '../Spinner';

const DashboardHome = () => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const {data : FilterBooksProps=[], isLoading, isError} = useFetchAllBooksQuery(undefined);

  const trendingBooks = FilterBooksProps.filter((book) => book.trending === true);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get(`${getBaseUrl()}/api/admin`, {
          headers : {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
            'Content-Type' : 'application/json'
          }
        });
        setData(response.data);
        setLoading(false);
      }
      catch(err){
        console.error("Error in connecting admin", err);
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  const getCategoryCount = (category : string) => {
    return FilterBooksProps.filter((book) => book.category === category);
  }

  const pieChartData = FilterBooksProps.reduce((acc, item) => {
    const existingCategory = acc.find(entry => entry.name === item.category.toUpperCase());
    
    if (!existingCategory) {
        acc.push({
            name: item.category.toUpperCase(),
            value: getCategoryCount(item.category).length
        });
    }
    return acc;
}, [] as { name: string; value: number }[]);

  if(Loading){
    return <Spinner />
  }

  if (isLoading){
    return <Spinner />
  }
  if (isError){
    return <div>Error While Getting the data</div>
  }

  const barChartLabel = FilterBooksProps.reduce((acc, item) => {
    const existingCategory = acc.find(entry => entry === item.category.toUpperCase());
    
    if (!existingCategory) {
        acc.push(item.category.toUpperCase());
    }
    return acc;
}, [] as string[]);

  const barChartAverage = FilterBooksProps.reduce((acc, item) => {
    const categoryItems = FilterBooksProps.filter(book => book.category === item.category);
    
    if (!acc.some(existingAverage => existingAverage === 
        categoryItems.reduce((sum, book) => sum + book.newPrice, 0) / categoryItems.length)) {
        
        const averageValue = categoryItems.reduce((sum, book) => sum + book.newPrice, 0) / categoryItems.length;
        
        acc.push(Number(averageValue.toFixed(2)));
    }
    
    return acc;
}, [] as number[]);

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex flex-row justify-between items-center w-full pt-[30px]'>
        <div className='flex flex-col gap-2 flex-start'>
         <h1 className='text-[40px] font-medium'>Dashboard</h1>
         <h3 className='text-gray-500 items-start'>Book Store Inventory</h3>
        </div>
        <div className='flex flex-row gap-3'>
          <button className='flex flex-row gap-2 justify-between items-center bg-white text-black border-black border-1 text-sm' onClick={() => navigate('/dashboard/manage-books')}> <Pencil className='w-4 h-5' />Manage Books</button>
          <button className='flex flex-row gap-2 justify-between items-center text-sm' onClick={() => navigate('/dashboard/add-new-book')}> <Plus className='w-4 h-5' /> Add New Books</button>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center gap-3 my-[30px] mx-[5px]'>
          <div className='flex flex-row justify-between items-center gap-3 bg-gray-100 rounded-md w-[280px] h-[100px] p-[20px] hover:shadow-md'>
            <div className='rounded-full p-5 bg-violet-200'>
              <BookOpenCheck  className='w-6 h-6 text-violet-600'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
              <h3 className='font-medium text-lg'>{FilterBooksProps.length}</h3>
              <p className=''>Products</p>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-3 bg-gray-100 rounded-md w-[280px] h-[100px] p-[20px] hover:shadow-md'>
            <div className='rounded-full p-5 bg-green-200'>
              <TrendingUp  className='w-6 h-6 text-green-600'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
              <h3 className='font-medium text-lg'>30.266</h3>
              <p className=''>Total Sales</p>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-3 bg-gray-100 rounded-md w-[280px] h-[100px] p-[20px]  hover:shadow-md'>
            <div className='rounded-full p-5 bg-red-200'>
              <TrendingDown  className='w-6 h-6 text-red-600'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
              <h3 className='font-medium text-lg flex flex-row'>{trendingBooks.length} (<p className='text-gray-500'>{FilterBooksProps.length/100 * trendingBooks.length} %</p>)</h3>
              <p className=''>Trending Books</p>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-3 bg-gray-100 rounded-md w-[280px] h-[100px] p-[20px]  hover:shadow-md'>
            <div className='rounded-full p-5 bg-blue-200'>
              <ChartPie  className='w-6 h-6 text-blue-600'/>
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
              <h3 className='font-medium text-lg'>7</h3>
              <p className=''>Total Orders</p>
            </div>
          </div>
      </div>
      <DashboardAnalytics 
        pieChartData={pieChartData}
        barChartLabel={barChartLabel} 
        barChartAverage={barChartAverage}
      />
      {/* <DashboardCollections /> */}
      <DashboardHistory />
    </div>
  )
}

export default DashboardHome;