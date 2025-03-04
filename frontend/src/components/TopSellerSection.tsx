import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard';
import Slider from "react-slick";
import Blog from '../data/blog.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dropdown } from '../data/dropdown';

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
  const [category, setCategory] = useState('books');
  const [filterBooks, setFilterBooks] = useState<FilterBooksProps[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setCategory(event.target.value as string);
  };

  useEffect(() => {
    const filteredBooks = Blog.filter((book) => book.category === category);
    setFilterBooks(filteredBooks);
  },[category])


  
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <div className='flex flex-col justify-center items-start w-full gap-5 mb-[20px]'>
      <div>
        <h2 className='text-2xl text-text font-semibold'>Top Sellers</h2>
      </div>
     <div >
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
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
      <div className='w-full slider-container my-[30px]'>
      <Slider {...settings} >
          {filterBooks.map((data) => (
            <div key={data._id} className="px-2">
              <PriceCard 
                title={data.title}
                description={data.description}
                coverImage={data.coverImage}
                oldPrice={data.oldPrice}
                newPrice={data.newPrice}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TopSellerSection;