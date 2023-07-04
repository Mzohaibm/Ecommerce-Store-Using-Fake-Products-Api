import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products'
import Loader from '../components/Loader'
const CategoryProducts = () => {
    const [products, setProducts] = useState([])
    const { name } = useParams()
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);
    if (products.length === 0) {
        return <Loader />
    }
    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default CategoryProducts