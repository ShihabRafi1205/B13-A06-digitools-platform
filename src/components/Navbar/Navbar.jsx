import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ selectedProduct }) => {
  return (
    <div className="navbar lg:px-12 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="font-bold bg-linear-to-r from-blue-500 to-purple-500 text-2xl bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 menu menu-horizontal px-1">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2 lg:gap-4 relative">
        <span className="w-6 h-6 absolute right-41 bottom-5 rounded-full text-center bg-red-400">
          {selectedProduct.length}
        </span>
        <span className="flex gap-1 lg:gap-4 font-semibold">
          <CiShoppingCart size={22} />
          Login
        </span>
        <a className="btn text-sm text-white rounded-full bg-linear-to-r from-blue-500 to-purple-500  ">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
