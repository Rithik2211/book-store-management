import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react'
import PriceCard from './PriceCard';
import Slider from "react-slick";
import Blog from '../data/blog.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellerSection = () => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const dropdown = [
    {
      value: 'business',
      label: 'Business',
    },
    {
      value: 'books',
      label: 'Books',
    },
    {
      value: 'marketing',
      label: 'Marketing',
    },
    {
      value: 'horror',
      label: 'Horror',
    },
    {
      value: 'fiction',
      label: 'Fiction',
    },
    {
      value: 'adventure',
      label: 'Adventure',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='flex flex-col justify-between items-center max-w-7xl w-full  gap-5 mb-[20px]'>
     <FormControl className='w-[150px]'>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {dropdown.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className='w-full slider-container my-[40px]'>
      <Slider {...settings}>
          {Blog.map((data, index) => (
            <div key={index} className="px-2">
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