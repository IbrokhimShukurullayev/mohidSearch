import React, { memo, useEffect, useState } from 'react'
import "./Products.scss"
import ProductCard from '../product-card/ProductCard'

import {Pagination , Box} from '@mui/material';
import axios from "axios"
import Skeleton from '../skeleton/Skeleton'

const perPage = 6

const API = "https://bazar.ilyosbekdev.uz/products/search"

const Products = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(perPage)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(API , {
                params: {
                    limit: perPage,
                    page: page,
                }
            })
            .then(res => setData(res.data?.data?.products))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }, [count , page])

        console.log(page);
        
        
        const handleChange = (_, value) => {
            setPage(value);
        }


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
                    <ProductCard data={data}/>
                </div>
                {loading && <Skeleton />}
                {/* <div className="products__see__more__btn">
                    <button onClick={() => setCount(p => p + 3)}>View More</button>
                </div> */}
                <Box sx={{display:"flex" , justifyContent:"center"}}>
                 <Pagination count={10} page={page} onChange={handleChange} />
                </Box>
            </div>
        </section>
    )
}

export default memo(Products)