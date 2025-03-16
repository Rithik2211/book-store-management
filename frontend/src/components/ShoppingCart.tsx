import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';

const ShoppingCart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (route: string) => {
    navigate(route);
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="flex mt-12 h-full flex-col overflow-hidden bg-gray-100 shadow-xl rounded-[12px]">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <div className="text-lg font-medium text-gray-900">Shopping cart</div>
          <div className="ml-3 flex h-7 items-center ">
            <button
              type="button"
              onClick={handleClearCart}
              className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200 focus:outline-none "
            >
              <span className="">Clear Cart</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <li  className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt=""
                        src="../assets/books/book-1.png"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                          <h3>
                            {/* <Link to='/'>Product Titlee</Link> */}
                          </h3>
                          <p className="sm:ml-4">$50</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category:</strong> Fiction</p>
                      </div>
                      <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                        <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                        <div className="flex">
                          <button  type="button" className="font-medium text-white focus:outline-none">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
            
              </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$0</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <button type="button" className="font-medium text-white ml-1 focus:outline-none" onClick={() => handleClick('/checkout')}>
            Checkout
          </button>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <button type="button" className="font-medium text-white ml-1 focus:outline-none" onClick={() => handleClick('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
  </div>
  )
}

export default ShoppingCart