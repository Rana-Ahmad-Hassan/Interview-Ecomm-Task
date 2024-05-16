import React, { useState } from "react";
import imag1 from "../../assets/images/imag1.png";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/features/appSlice";
import { useNavigate } from "react-router";
function SignUp() {
  const { user } = useSelector((state) => state.app)
  const [data, setData] = useState({
    username: "",
    password: "",
    expiresInMins: 60,
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      dispatch(registerUser(data))
      navigate("/")
    } catch (error) {
     throw error
    }


  };


  return (
    <div className="lg:flex md:flex  justify-center items-center h-screen">
      <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full flex flex-col  justify-center items-center lg:h-screen md:h-screen h-1/2 bg-green-100">
        <h1 className="text-4xl font-bold">leaf</h1>
        <img src={imag1} width="50%" alt="" />
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center lg:h-screen md:h-screen h-1/2 items-center">
        <h1 className="text-4xl font-bold">Leaf</h1>
        <h1>Create Account</h1>
        <div className="w-3/4">
          <div className="input-container mb-6">
            <label htmlFor="username" className="text-lg text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <div className="icon-container">
                <i className="fa fa-user"></i>
              </div>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleData}
                placeholder="Enter Full Name"
                className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="input-container mb-6">
            <label htmlFor="password" className="text-lg text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="icon-container">
                <i className="fa fa-lock"></i>
              </div>
              <input
                type="password"
                onChange={handleData}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 px-4 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700"
          >
            Sign-Up
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-500 mt-6">
          <span className="w-1/4 h-px bg-gray-500"></span>
          <p className="text-sm">OR</p>
          <span className="w-1/4 h-px bg-gray-500"></span>
        </div>
        <p className="mt-4">
          Already have an account ?{" "}
          <a href="" className="text-green-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
