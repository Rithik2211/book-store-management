import React, { useEffect, useState } from 'react'
import Slider from 'react-slick/lib/slider';
import { FilterBooksProps } from './TopSellerSection';
import PriceCard from './PriceCard';
import Blog from '../data/blog.json';
import { useDispatch } from 'react-redux';
import {addProductItem } from '../redux/cartSlice';

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
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const RecommendedSlide = () => {
    const [filterBooks, setFilterBooks] = useState<FilterBooksProps[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const filteredBooks = Blog.filter((book) => book.category === 'business');
        setFilterBooks(filteredBooks);
    },[])

    const handleAddItemsToCart = (item: FilterBooksProps) => {
      // dispatch(addItem());
      // dispatch(addQty());
      // dispatch(addPrice(item));
      dispatch(addProductItem(item));
    }

  return (
    <div className='flex flex-col justify-center items-start w-full  gap-5 mb-[20px]'>
      <div>
        <h2 className='text-2xl text-text font-semibold'>Recommended for you</h2>
      </div>
      <div className='w-full my-[30px]'>
      <Slider {...settings}>
          {filterBooks.map((data) => (
            <div key={data._id} className="px-2">
              <PriceCard
                data= {data}
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
    </div>
  )
}

export default RecommendedSlide;