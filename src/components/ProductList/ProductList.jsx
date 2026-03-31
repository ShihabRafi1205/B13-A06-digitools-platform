import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const ProductList = ({ cards, selectedProduct, setSelectedProduct }) => {
  console.log(cards);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto gap-4 px-4">
      {cards.map((card) => (
        <div key={card.id} className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <img src={card.icon} alt="" />
              <span className="badge badge-xs badge-warning">{card.tag}</span>
            </div>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{card.name}</h2>
            </div>
            <p>{card.description}</p>
            <h4 className="text-left font-bold text-xl">{card.price}</h4>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {card.features.map((feature, index) => {
                return (
                  <li key={index} className="flex gap-1 items-center ">
                    <FcCheckmark /> {feature}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <button
                onClick={() => {
                  const isCardExists = selectedProduct.some(
                    (product) => product.id === card.id,
                  );
                  if (!isCardExists) {
                    setSelectedProduct([...selectedProduct, card]);
                    toast("Added to cart succesfully");
                  }
                }}
                className="btn btn-primary rounded-full btn-block"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
