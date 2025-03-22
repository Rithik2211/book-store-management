import React from 'react'
import Slider from 'react-slick/lib/slider';
import { FilterBooksProps } from './TopSellerSection';
import PriceCard from './PriceCard';
import { useDispatch } from 'react-redux';
import { addProductItem } from '../redux/cartSlice';
import { ToastContainer } from 'react-toastify';
import { getToast } from '../utils/toast';
import { useFetchAllBooksQuery } from '../redux/books/booksApi';

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
    const dispatch = useDispatch();

    const {data : FilterBooksProps=[], isLoading, isError} = useFetchAllBooksQuery(undefined);

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error in Getting Details!</div>

    const filteredBooks = FilterBooksProps.filter((book) => book.category === 'business');

    const handleAddItemsToCart = (item: FilterBooksProps) => {
      dispatch(addProductItem(item));
      getToast('Product Added to Cart !');
    }

  return (
    <div className='flex flex-col justify-center items-start w-full  gap-5 mb-[20px]'>
      <div>
        <h2 className='text-2xl text-text font-semibold'>Recommended for you</h2>
      </div>
      <div className='w-full my-[30px]'>
      <Slider {...settings}>
          {filteredBooks.map((data) => (
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

export default RecommendedSlide;