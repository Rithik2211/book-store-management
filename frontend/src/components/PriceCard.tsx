import React, { FC } from 'react';
import { FilterBooksProps } from './TopSellerSection';
import { useNavigate } from 'react-router-dom';

interface PriceCardProps{
    data : FilterBooksProps;
    title: string;
    description: string;
    coverImage: string;
    oldPrice: number;
    newPrice: number;
    handleAddItemsToCart: (item : FilterBooksProps) => void;
}
const PriceCard: FC<PriceCardProps> = ({title, description, coverImage, oldPrice, newPrice, handleAddItemsToCart, data}) => {
    const navigate = useNavigate();
    
    return (
        <div className="rounded-lg transition-shadow duration-300 max-w-[474px] w-full min-h-[280px] bg-gray-100" >
            <div className="flex flex-row items-center h-72 justify-center gap-4">
                <div className="h-72 flex-shrink-0"  onClick={() => navigate(`/bookCard/${data._id}`)}>
                    <img
                        src={`/books/${coverImage}`}
                        alt=""
                        className="w-full bg-cover p-2 rounded-md cursor-pointer "
                    />
                </div>

                <div className='p-4 flex flex-col justify-start items-start text-start'>
                    <h3 className="text-md font-medium text-[#0D0842] mb-3">
                        {title}
                    </h3>
                    <p className="text-sm text-[#0D0842] mb-5 line-clamp-2">{description}</p>
                    <p className="font-normal mb-5">
                        ${newPrice} <span className="line-through font-normal ml-2">${oldPrice}</span>
                    </p>
                    <div className=''>
                        <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none' onClick={() => handleAddItemsToCart(data)}><img src='/basket.svg' alt='basket' className='w-3 h-5' />Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceCard;