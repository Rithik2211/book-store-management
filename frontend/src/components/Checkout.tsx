import React from 'react'

const Checkout = () => {
    return (
        <div className="max-w-screen-2xl w-full min-h-screen p-6 bg-gray-100">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div>
                        <h2 className="font-semibold text-3xl text-gray-600 mb-2">Cash On Delivery</h2>
                        <p className="text-gray-500 mb-2">Total Price: $0</p>
                        <p className="text-gray-500 mb-6">Items: 0</p>
                    </div>
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form onSubmit={() => {}} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label >Full Name</label>
                                        <input  type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label>Email Address</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            disabled
                                            // defaultValue={currentUser?.email}
                                            placeholder="email@domain.com" />
                                    </div>
                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label>Phone Number</label>
                                        <input  type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="+123 456 7890" />
                                    </div>

                                    <div className="md:col-span-3 flex flex-col items-start">
                                        <label >Address / Street</label>
                                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label >City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label>Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label>State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 flex flex-col items-start">
                                        <label>Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div className="md:col-span-5 mt-3 flex flex-col items-start">
                                        <div className="inline-flex items-center">
                                            <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                            <label className="ml-2 flex flex-row gap-2">I am aggree to the <div className='underline underline-offset-2 text-blue-600'>Terms & Conditions</div> and <div className='underline underline-offset-2 text-blue-600'>Shoping Policy.</div></label>
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 text-right mt-[30px]">
                                        <div className="inline-flex items-end">
                                            <button
                                                // disabled={!isChecked}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place an Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;