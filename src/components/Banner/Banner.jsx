import React from "react";
import BannerImg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="hero mt-8 md:mb-8 lg:min-h-screen">
      <div className="hero-content flex lg:gap-24 flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="max-w-sm rounded-lg w-full" />
        <div>
          <h1 className="text-5xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex gap-4">
            {" "}
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn border border-blue-600 rounded-full text-blue-600">
              <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
