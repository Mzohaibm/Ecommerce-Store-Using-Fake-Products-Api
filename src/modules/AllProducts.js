
import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Categories from "../feature/Categories";
import Loader from "../components/Loader";
const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return (
        <div>
            <Categories />
            <h3 className="text-gray-800 text-center text-lg tracking-widest font-medium title-font mb-1">
                PRODUCTS
            </h3>
            <h1 className="text-gray-900 text-center title-font text-2xl sm:text-3xl font-bold">
                ALL PRODUCTS
            </h1>
            {products.length > 0 ? <Products products={products} /> : <Loader />}
        </div>
    );
};

export default AllProducts;
