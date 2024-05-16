import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../store/features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../../store/features/appSlice';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../../store/features/appSlice';
import Spinner from '../../utils/spinner';



const Products = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const { data, loading } = useSelector((state) => state.app);
   

    // Pagination
    const totalProducts = data && data.products ? data.products.length : 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

  
    const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
    const previousPage = () => setCurrentPage((prevPage) => prevPage - 1)

    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data && data.products ? data.products.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    if (loading) {
        return (
         <Spinner/>
        )
    }
    return (
        <>
            <div className="container m-auto">
                <div className='px-14'>
                    <h1 className=' text-start text-2xl mt-5'>All Products</h1>
                    <div className="flex justify-end container gap-10">
                        {currentPage < totalPages && (
                            <button className=" font-bold py-2 px-4 rounded" onClick={nextPage}>Next </button>
                        )}

                        {
                            currentPage > 1 && (
                                <button className="  font-bold py-2 px-4 rounded" onClick={previousPage}>Back</button>

                            )
                        }
                    </div>
                </div>
                <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-x-10  gap-y-10  pb-20 sm:px-8 ">

                    {currentProducts.map((item, index) => (
                        <div key={index} className=" mt-5 flex w-full mx-auto max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
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

                                    <NavLink to={'/product-detail'}><p className='text-blue-500 cursor-pointer' onClick={() => dispatch(productDetail(item))}>View</p>
                                    </NavLink>
                                </div>
                                <NavLink to={""} onClick={() => dispatch(addToCart(item))} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
            {/* Pagination */}

        </>
    );
}

export default Products;
