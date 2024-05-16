import React, { useEffect, useState } from 'react';
import Thumbnail from '../components/thumbnail/thumbnail';
import { addToCart, fetchProducts } from '../store/features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../utils/spinner';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const user = JSON.parse(localStorage.getItem('user'))

    const { data } = useSelector((state) => state.app);

    if (!data || !data.products) {
        return (
            <Spinner />
        )
    }

  

   


 


    return (
        <>
            <Thumbnail />
            <div>
                <h1 className='text-2xl font-bold text-center h-72 flex items-center justify-center'>Our Featured Products</h1>
            </div>
         
            {
                data || data.products ? <div className='flex flex-wrap justify-center gap-10'>
                    {data?.products.slice(0, 4).map((item, i) => (

                        <div key={i} className="my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={item.images[0]} alt="product image" />
                                <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={item.images[1]} alt="product image" />
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">{item.title}</h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">{item.price + "$"}</span>
                                    </p>

                                    <p className='text-blue-500 cursor-pointer'>View</p>
                                </div>
                                <a onClick={()=>dispatch(addToCart(item))} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart
                                </a>
                            </div>
                        </div>


                    ))}
                </div> : <div className='text-center text-5xl'>Loading</div>
            }
        </>
    );
}

export default HomePage;
