import React from "react";

import img1 from "../../assets/products/user.png";
import img2 from "../../assets/products/rocket.png"
import img3 from "../../assets/products/package.png"
const Step = () => {
  return (
    <div className="text-center py-10 bg-[#F9FAFC] space-y-4">
      <h1 className="text-3xl font-bold">Get Started in 3 Steps</h1>
      <p className="text-gray-500">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-[80%] mt-7 mx-auto">
        <div className="flex flex-col justify-center items-center shadow-md p-8 rounded-xl bg-white space-y-4">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 text-white flex justify-center items-center ml-auto rounded-full mb-10">
            01
          </div>
           <div className="rounded-full"><img src={img1} alt="" /></div>
          <h4 className="text-xl font-semibold">Create Account</h4>
          <p className="text-gray-500">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md p-8 rounded-xl bg-white space-y-4">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 text-white flex justify-center items-center ml-auto rounded-full mb-10">
            02
          </div>
          <div className="rounded-full"><img src={img2} alt="" /></div>
          <h4>Create Account</h4>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-md p-8 rounded-xl bg-white space-y-4">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 text-white flex justify-center items-center ml-auto rounded-full mb-10">
            03
          </div>
           <div className="rounded-full"><img src={img3} alt="" /></div>
          <h4>Create Account</h4>
          <p>
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
