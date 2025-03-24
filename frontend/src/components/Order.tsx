import React from 'react'
import { useFetchOrderByEmailQuery } from '../redux/orders/ordersApi';
import { useAuth } from '../context/AuthContext';

const Order = () => {
    const { currentUser } = useAuth();
    const {data : orders=[], isLoading, isError} = useFetchOrderByEmailQuery(currentUser.email);

    if(isLoading) return <div>Loading....</div>
    if(isError) return <div>Getting the error on the Order Page</div>
    return (
        <div className="container max-w-screen-2xl w-full p-6 ">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
            {
                orders.length === 0  ? (<div>No orders found.</div>) : (
                <div>
                    {
                        orders.map((data, index) => (
                            <div className="rounded p-4" key={index}>
                                <p className='p-1 bg-blue-500 text-white w-10 rounded-lg'># {index + 1}</p>
                                <div className="border-b mb-4 pb-4"></div>
                                <h2 className="font-bold">Order ID: {data?._id}</h2>
                                <p className="text-gray-600">Name: {data?.name}</p>
                                <p className="text-gray-600">Email: {data?.email}</p>
                                <p className="text-gray-600">Phone: {data?.phone}</p>
                                <p className="text-gray-600">Total Price: ${data?.totalPrice}</p>
                                <h3 className="font-semibold mt-2">Address:</h3>
                                <p> {data?.address.city}, {data?.address.state}, {data?.address.country}, {data?.address.zipcode}</p>
                                <h3 className="font-semibold mt-2">Products Id:</h3>
                                <ul>
                                    {
                                        data.productIds.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                )
            }
        </div>
    )
}

export default Order;