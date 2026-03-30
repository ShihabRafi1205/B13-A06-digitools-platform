import React from "react";

const Achievement = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-purple-500 grid gap-5 md:grid-cols-3  items-center p-5">
      <div className="md:border-r border-gray-300 text-center">
        <h2 className="text-4xl text-white ">50K+</h2>
        <p className="text-white">Active Users</p>
      </div>
      <div className="md:border-r border-gray-300 text-center">
        <h2 className="text-4xl text-white">200+</h2>
        <p className="text-white">Premium Tools</p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl text-white">4.9</h2>
        <p className="text-white">Rating</p>
      </div>
    </div>
  );
};

export default Achievement;
