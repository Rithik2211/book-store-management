import React, { FC } from 'react'

interface PricardProps{
    title: string;
    description: string;
    coverImage: string;
    oldPrice: number;
    newPrice: number;
}
const PriceCard: FC<PricardProps> = ({title, description, coverImage, oldPrice, newPrice}) => {
    return (
        <div className="rounded-lg transition-shadow duration-300 max-w-[474px] w-full h-[280px] bg-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                <div className="sm:h-72 sm:flex-shrink-0">
                    <img
                        src={`/books/${coverImage}`}
                        alt=""
                        className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                    />
                </div>

                <div className='p-4 flex flex-col justify-center items-center'>
                    <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-2">{description}</p>
                    <p className="font-medium mb-5">
                        ${oldPrice} <span className="line-through font-normal ml-2">${newPrice}</span>
                    </p>
                    <div className=''>
                        <button className='bg-button text-white px-5 py-1 rounded-[8px] flex flex-row gap-1 md:gap-3 text-sm focus:outline-none'><img src='/basket.svg' alt='basket' className='w-3 h-5' />Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceCard;