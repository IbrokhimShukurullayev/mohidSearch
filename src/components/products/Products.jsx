import React, { memo, useEffect, useState } from 'react'
import "./Products.scss"
import ProductCard from '../product-card/ProductCard'
import axios from "axios"
import Skeleton from '../skeleton/Skeleton'

const API = "https://dummyjson.com/products"

const Products = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(6)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${API}?limit=${count}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [count])

    return (
        <section id="products">
            <div className="container products">
                <h6 className="products__caption">
                    Find your favourite smart watch.
                </h6>
                <h2 className="products__title">
                    Our Latest Products
                </h2>
                <div className="products__wrapper">
                    <ProductCard data={data} />
                </div>
                {loading && <Skeleton />}
                <div className="products__see__more__btn">
                    <button onClick={() => setCount(p => p + 3)}>View More</button>
                </div>
            </div>
        </section>
    )
}

export default memo(Products)