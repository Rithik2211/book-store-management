import React, { useEffect, useState } from 'react'
import Slider from 'react-slick/lib/slider';
import { FilterBooksProps } from './TopSellerSection';
import PriceCard from './PriceCard';
import Blog from '../data/blog.json';

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

    useEffect(() => {
        const filteredBooks = Blog.filter((book) => book.category === 'business');
        setFilterBooks(filteredBooks);
    },[])

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

export default RecommendedSlide;