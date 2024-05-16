import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addToCart } from '../../store/features/appSlice'
import { useDispatch } from 'react-redux'
const ProductDetail = () => {
    const [currentImage, setCurrentImage] = useState("")
    const dispatch = useDispatch()

    const { detail } = useSelector((state) => state.app)
    if (!detail) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <>

            <div className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover cursor-pointer" src={currentImage ? currentImage : detail.thumbnail} alt="Product Image" />
                                <div className='flex justify-between mt-3 flex-wrap'>
                                    {
                                        detail.images.map((img) => {
                                            return (
                                                <img onClick={() => setCurrentImage(img)} width={100} src={img} alt="" />
                                            )
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                        <div className="md:flex-1 px-4 md:mt-0 mt-52   sm:mt-52">
                            <h2 className="text-2xl font-bold text-gray-800  mb-2">{detail.title}</h2>
                            <p className="text-gray-600  text-sm mb-4">
                                <span className='font-bold'>Brand:</span> {detail.brand}
                            </p>

                            <p><span className='font-bold'>Ratings:</span> {detail.rating}</p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700">Price:</span>
                                    <span className="text-gray-600 ">{detail.price + "$"}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">Availability:</span>
                                    <span className="text-gray-600 ">In Stock ({detail.stock})</span>
                                </div>
                            </div>


                            <div>
                                <span className="font-bold text-gray-700 ">Product Description:</span>
                                <p className="text-gray-600  text-sm mt-2">
                                    {detail.description}
                                </p>
                            </div>


                            <div className="flex mb-4 mt-10">
                                <div className="">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=>dispatch(addToCart(detail))}>Add to Cart</button>
                                </div>

                                {/* <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ProductDetail