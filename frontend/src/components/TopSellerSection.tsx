import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import PriceCard from './PriceCard';
import Slider from "react-slick";
import { dropdown } from '../data/dropdown';
import './Slider.css';
import { useDispatch } from 'react-redux';
import {addProductItem} from '../redux/cartSlice';
import { ToastContainer } from 'react-toastify';
import { getToast } from '../utils/toast';
import { useFetchAllBooksQuery } from '../redux/books/booksApi';
export interface FilterBooksProps{
  _id: number;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
}

const TopSellerSection = () => {
  const [category, setCategory] = useState('choose a genre');
  const [filterBooks, setFilterBooks] = useState<FilterBooksProps[]>([]);
  const dispatch = useDispatch();

  const {data : FilterBooksProps=[], isLoading, isError} = useFetchAllBooksQuery(undefined);

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error in Getting Details!</div>

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    const filteredBooks = category === 'choose a genre' ? FilterBooksProps : FilterBooksProps.filter((book) => book.category === category);
    setFilterBooks(filteredBooks);
    setCategory(event.target.value as string);
  };

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  const handleAddItemsToCart = (item: FilterBooksProps) => {
    dispatch(addProductItem(item));
    getToast('Product Added to Cart !');
  }

  return (
    <div className='flex flex-col w-full justify-center items-start'>
      <div className='flex w-full mb-4 sm:mb-6'>
        <h2 className='text-2xl text-text font-semibold'>Top Sellers</h2>
      </div>
      <div className='w-full max-w-[200px]'>
        <FormControl fullWidth >
          <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            className="h-8 sm:h-10 text-xs sm:text-sm"
            style={{ 
              backgroundColor: '#EAEAEA', 
              fontSize: '0.875rem',
              padding: '0',
              height: '30px',
              width: '200px',
              textAlign: 'start',
            }}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }}
          >
            {dropdown.map((item, index) => (
              <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='w-full my-[30px]'>
        <Slider {...settings} >
            {filterBooks.map((data) => (
              <div key={data._id} className="px-2">
                <PriceCard 
                  data={data}
                  title={data.title}
                  description={data.description}
                  coverImage={data.coverImage}
                  oldPrice={data.oldPrice}
                  newPrice={data.newPrice}
                  handleAddItemsToCart={handleAddItemsToCart}
                />
              </div>
            ))}
          </Slider>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
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

export default TopSellerSection;