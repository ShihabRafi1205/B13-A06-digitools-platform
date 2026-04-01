import React from "react";

const Footer = () => {
  return (
    <div className="bg-linear-to-r py-15 md:py-30 mt-28 mb-0 from-blue-500 to-purple-500 text-white flex justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-sm mb-8">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="btn rounded-full">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className="btn bg-transparent border border-white text-white rounded-full">
            View Pricing
          </button>
        </div>
        <p className="text-sm">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Footer;
