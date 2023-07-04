import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Products from "../Products/Products";
import FeatureCard from "../feature/FeatureCard";
import Statistic from "../statistic/Statistic";
import Categories from "../feature/Categories";
import Loader from "../components/Loader";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Hero />
      <FeatureCard />
      <Categories />
      <h3 className="text-gray-800 text-center text-lg tracking-widest font-medium title-font mb-1">
        PRODUCTS
      </h3>
      <h1 className="text-gray-900 text-center title-font text-2xl sm:text-3xl font-bold">
        MOST POPULAR PRODUCTS
      </h1>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <Loader />
      )}
      <Products />
      <Statistic />
    </div>
  );
};
export default Home;
