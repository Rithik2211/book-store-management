import React from 'react'
import Slider from 'react-slick/lib/slider'
import NewsCard from './NewsCard';
import { news } from '../data/news';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // nextArrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 1
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

const NewsSection = () => {
  return (
    <div className='flex flex-col justify-center items-start w-full gap-5 mb-[20px]'>
    <div>
      <h2 className='text-2xl text-text font-semibold'>News</h2>
    </div>
    <div className='w-full my-[30px]'>
    <Slider {...settings}>
        {news.map((data) => (
          <div key={data.id} className="px-2">
            <NewsCard
              title={data.title}
              description={data.description}
              coverImage={data.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default NewsSection;