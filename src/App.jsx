import { ToastContainer } from "react-toastify";
import "./App.css";
import Achievement from "./components/Achievement/Achievement";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";
import { Suspense } from "react";
import Step from "./components/Steps/Step";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Achievement></Achievement>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Products productsPromise={productsPromise}></Products>
      </Suspense>

      

      <ToastContainer />
    </>
  );
}

export default App;
