import React from 'react'

const Order = () => {
    return (
        <div className="container max-w-screen-2xl w-full p-6 ">
            <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>

            {/* <p>No orders found.</p> */}

            <div className="rounded p-4">
                <div className="border-b mb-4 pb-4"></div>
                <h2 className="font-bold">Order ID: 123456</h2>
                <p className="text-gray-600">Name: Mr Tom</p>
                <p className="text-gray-600">Email: example@email.com</p>
                <p className="text-gray-600">Phone: 123 456 789</p>
                <p className="text-gray-600">Total Price: $0</p>
                <h3 className="font-semibold mt-2">Address:</h3>
                <p> City, State, Country, ZipCode</p>
                <h3 className="font-semibold mt-2">Products Id:</h3>
                <ul>
                    <li>13456</li>
                </ul>
            </div>
        </div>
    )
}

export default Order;