

const Carts = ({ selectedProduct}) => {

    const totalPrice = selectedProduct.reduce((sum, product )=>{
        return sum + product.price;
    }, 0)
    
  return (
    <div className="max-w-5xl my-10 mx-auto p-6 shadow rounded-2xl space-y-5">
      <h3 className="font-bold text-xl mb-3">Your cart</h3>
      {selectedProduct.map((everyProduct, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between items-center bg-base-300 p-4 rounded-2xl">
              <div className="flex gap-4 items-center">
                <img src={everyProduct.icon} alt="" />
                <div>
                  <div>
                    <h4 className="font-semibold">{everyProduct.name}</h4>
                  </div>
                  <div>${everyProduct.price}</div>
                </div>
              </div>
              <div>
                <button className="text-red-400">Remove</button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex justify-between items-center my-4">
        <p className="text-gray-500">Total</p>
        <p className="font-bold">${totalPrice}</p>
      </div>
      <button className="btn btn-block text-white bg-linear-to-r from-blue-500 to-purple-500 rounded-full">Proceed to Checkout</button>
    </div>
  );
};

export default Carts;
