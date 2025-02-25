import React, { FC } from 'react'

interface NewsCardProps{
    title: string;
    description: string;
    coverImage: string;
}
const NewsCard :FC<NewsCardProps>= ({title, description, coverImage}) => {
  return (
    <div className=" transition-shadow duration-300 max-w-[610px] w-full h-[190px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center rounded-lg bg-gray-100 p-3">
            <div className='p-4 flex flex-col justify-center items-start text-start'>
                <h3 className="text-md font-medium text-[#0D0842] mb-3">
                    {title}
                </h3>
                <p className="text-sm text-[#0D0842] line-clamp-4">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center max-w-[123px] w-full max-h-[156px] ">
                <img
                    src={`/news/${coverImage}`}
                    alt={title}
                    className="w-full h-full bg-cover rounded-md cursor-pointer "
                />
            </div>
        </div>
     </div>
  )
}

export default NewsCard;