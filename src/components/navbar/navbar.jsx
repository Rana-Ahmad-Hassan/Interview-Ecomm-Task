import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from '../../store/features/appSlice';

function Navbar() {
  const { cart } = useSelector((state) => state.app)
  const data = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto">
      <div className="md:h-20 container h-28 mx-auto md:px-4  flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <NavLink to={"/"}>
            <h1 className='text-xl font-bold'>LEAF MARKET</h1>
          </NavLink>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <NavLink to={"/"}>            <li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Home</a></li>
            </NavLink>
            <NavLink to={"/all-products"}> <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Products</a></li></NavLink>

          </ul>
        </div>

        <div className="order-2 md:order-3 flex gap-2 items-center">


          {
            data ? <NavLink to={"/register"}>
              <button onClick={() => dispatch(clearUserData())} className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span >Logout</span>
              </button>
            </NavLink> : <NavLink to={"/register"}>
              <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span >SignUp</span>
              </button>



            </NavLink>
          }

          <NavLink to={"/cart"}>
            <button className='relative'> <span className='absolute text-white bg-red-500 px-2 rounded-full bottom-3'>{cart.length}</span> <FaCartArrowDown size={20} /></button>
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
