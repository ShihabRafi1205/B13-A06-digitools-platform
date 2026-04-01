import React, { use, useState } from "react";
import ProductList from "../ProductList/ProductList";
import Carts from "../Carts/Carts";
import Step from "../Steps/Step";
import Pricing from "../Pricing/Pricing";
import Footer from "../Footer/Footer";

const Products = ({ productsPromise, selectedProduct, setSelectedProduct }) => {
  const cards = use(productsPromise);

  const [availableProducts, setAvailableProducts] = useState("Products");
  // const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <div className=" space-y-5 my-12 lg:mt-12 container mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Premium Digital Tools
        </h2>
        <p className="text-center">
          Choose from our curated collection of premium digital products
          designedto <br /> boost your productivity and creativity.
        </p>
        <div className="flex justify-center items-center ">
          <div className="bg-gray-100  rounded-full ">
            <button
              onClick={() => setAvailableProducts("Products")}
              className={`px-4 py-2 ${availableProducts === "Products" ? "bg-linear-to-r from-blue-500 to-purple-500 text-white " : ""} rounded-full `}
            >
              Products
            </button>

            <button
              onClick={() => setAvailableProducts("Carts")}
              className={` px-4 py-2  ${availableProducts === "Carts" ? "bg-linear-to-r from-blue-500 to-purple-500 text-white " : ""} rounded-full `}
            >
              Carts({selectedProduct.length})
            </button>
          </div>
        </div>

        {availableProducts === "Products" ? (
          <>
            <ProductList
              cards={cards}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            ></ProductList>
            <Step></Step>
            <Pricing></Pricing>
            {/* <Footer></Footer> */}
          </>
        ) : (
          <Carts
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          ></Carts>
        )}
      </div>
      {availableProducts === "Products" && <Footer />}
    </>
  );
};

export default Products;
