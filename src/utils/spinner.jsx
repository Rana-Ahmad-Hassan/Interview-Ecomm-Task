import React from 'react'
import { ImSpinner8 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-center bg-cover backdrop-filter backdrop-blur-lg bg-black/20" >
      <div>
        <ImSpinner8 size={45} className='animate-spin text-white' />
      </div>
    </div>
  )
}

export default Spinner