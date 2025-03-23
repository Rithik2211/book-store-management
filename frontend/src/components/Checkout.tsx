import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { FilterBooksProps } from './TopSellerSection';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface AddressProps{
    street : string;
    city : string;
    country : string;
    state  : string;
    zipcode : string;
}
interface CheckoutProps{
    name : string;
    email : string;
    phone : string;
    address : AddressProps;
    items : FilterBooksProps[];
}


const Checkout = () => {
    const ProductItem = useSelector((state: RootState) => state.cart.cartProductItems)
    const ProductPrice = useSelector((state: RootState) => state.cart.productPrice)
    const { currentUser } = useAuth();
    const [checkoutData, setCheckoutData] = useState<CheckoutProps>({
        name : '',
        email : '',
        phone : '',
        address: {
            street: '',
            city: '',
            country: '',
            state: '',
            zipcode: ''
        },
        items : ProductItem
    });

    if(!currentUser){
        return <Navigate to={'/'} replace/>
    }

    const handleSubmitData = (e :React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted checkout submit", checkoutData);
    }

    const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutData({
            ...checkoutData,
            [e.target.name] : e.target.value
        });
    }

    const handleInputAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutData({
            ...checkoutData,
            address: {
                ...checkoutData.address,
                [e.target.name]: e.target.value
            }
        });
    }
    
    return (
        <div className="max-w-screen-2xl w-full min-h-screen p-6 bg-gray-100 rounded-[12px]">
            <div className="container max-w-screen-lg mx-auto">
            <div>
                        <h2 className="font-semibold text-3xl text-gray-600 mb-2">Cash On Delivery</h2>
                        <p className="text-gray-500 mb-2">Total Price: ${ProductPrice}</p>
                        <p className="text-gray-500 mb-6">Items: {ProductItem.length}</p>
                    </div>
                    <div className="bg-white rounded-[12px] shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form onSubmit={handleSubmitData} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label >Full Name</label>
                                        <input  type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={checkoutData.name} onChange={(e) => handleInputData(e)} />
                                    </div>

                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label>Email Address</label>
                                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            // disabled
                                            value={checkoutData.email}
                                            onChange={(e) => handleInputData(e)}
                                            // defaultValue={currentUser?.email}
                                            placeholder="email@domain.com" />
                                    </div>
                                    <div className="md:col-span-5 flex flex-col items-start">
                                        <label>Phone Number</label>
                                        <input  type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="+123 456 7890" value={checkoutData.phone} onChange={(e) => handleInputData(e)}/>
                                    </div>

                                    <div className="md:col-span-3 flex flex-col items-start">
                                        <label >Address / Street</label>
                                        <input type="text" name="street" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={checkoutData.address.street} onChange={(e) => handleInputAddress(e)}/>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label >City</label>
                                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={checkoutData.address.city} onChange={(e) => handleInputAddress(e)}/>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label>Country / region</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={checkoutData.address.country} onChange={(e) => handleInputAddress(e)}/>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-start">
                                        <label>State / province</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value={checkoutData.address.state} onChange={(e) => handleInputAddress(e)}/>
                                        </div>
                                    </div>

                                    <div className="md:col-span-1 flex flex-col items-start">
                                        <label>Zipcode</label>
                                        <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value={checkoutData.address.zipcode} onChange={(e) => handleInputAddress(e)}/>
                                    </div>

                                    <div className="md:col-span-5 mt-3 flex flex-col items-start">
                                        <div className="inline-flex items-center">
                                            <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                            <label className="ml-2 flex flex-col md:flex-row justify-center gap-2">I am aggree to the <div className='underline underline-offset-2 text-blue-600'>Terms & Conditions</div> and <div className='underline underline-offset-2 text-blue-600'>Shoping Policy.</div></label>
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 text-right mt-[30px]">
                                        <div className="inline-flex items-end">
                                            <button
                                                // disabled={!isChecked}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Place an Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Checkout;