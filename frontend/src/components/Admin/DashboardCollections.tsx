import React from 'react'
import OrderTable from '../Charts/OrderTable';

const DashboardCollections = () => {
  return (
    <div className='flex flex-col gap-3 my-[30px] mx-[5px]'>
        <h2 className='text-start text-2xl font-medium text-gray-600'>Order Details</h2>
        <OrderTable />
      </div>
  )
}

export default DashboardCollections;
