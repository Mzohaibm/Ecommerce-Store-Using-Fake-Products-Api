import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import Loader from '../components/Loader'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/categories`)
            const data = await res.json()
            setCategories(data)
        }
        fetchCategories()
    }, [])
    if (categories.length === 0) {
        return <div>{Loader}</div>
    }
    console.log(`The allproducts category are ${categories}`, Array.isArray(categories));
    return (
        <div>
            <FeatureCard mycard={categories} />
        </div>
    )
}

export default Categories