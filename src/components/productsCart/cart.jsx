import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/features/appSlice'
import { NavLink } from 'react-router-dom'
const Cart = () => {
    const { cart } = useSelector((state) => state.app)
    const [noOfProduct, setNumberOfProduct] = useState(1)
    const addItem = () => {
        setNumberOfProduct(noOfProduct + 1)
    }

    const subItem = () => {
        if (noOfProduct > 1) {
            setNumberOfProduct(noOfProduct - 1)
        }
    }
    const dispatch = useDispatch()
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="sm:flex shadow-md my-10">
                    <div className="  w-full h-[70vh] overflow-y-auto sm:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
                        </div>
                        {
                            cart.length > 0 ? cart?.map((item, i) => {
                                return (
                                    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                                        <div className="md:w-4/12 2xl:w-1/4 w-full">
                                            <img src={item.thumbnail} alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                                        </div>
                                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.brand}</p>
                                            <div className="flex items-center justify-between w-full">
                                                <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                                                <div className='flex gap-4 items-center'>
                                                    <p className='text-lg cursor-pointer' onClick={addItem}>+</p>
                                                    <p>{noOfProduct}</p>
                                                    <p className='text-2xl cursor-pointer' onClick={subItem}>-</p>
                                                </div>
                                            </div>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">{item.description}</p>
                                            <div className="flex items-center justify-between pt-5">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                    <p onClick={() => dispatch(removeFromCart(item.id))} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                                </div>
                                                <p className="text-base font-black leading-none text-gray-800">{item.price}$</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <div className='text-center text-2xl'>
                                <h1>No Items in Cart</h1>
                            </div>
                        }





                        <NavLink to={"/all-products"} className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </NavLink>
                    </div>

                    <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">{cart.length}</span>
                            <span className="font-semibold text-sm">{cart.reduce((total, item) => total + item.price, 0) + "$"}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">
                                Shipping
                            </label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>


                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{cart.reduce((total, item) => total + item.price, 10) + "$"}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart