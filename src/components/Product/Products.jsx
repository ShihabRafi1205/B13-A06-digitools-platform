import React, { use } from "react";
import ProductList from "../ProductList/ProductList";

const Products = ({ productsPromise }) => {
  const cards = use(productsPromise);
  console.log(cards);

  return (
    <div className=" space-y-5 mt-5 lg:mt-12 container mx-auto">
      <h2 className="text-4xl font-bold text-center">Premium Digital Tools</h2>
      <p className="text-center">
        Choose from our curated collection of premium digital products
        designedto <br /> boost your productivity and creativity.
      </p>
  
        <ProductList cards={cards}></ProductList>
    
      
    </div>
  );
};

export default Products;
