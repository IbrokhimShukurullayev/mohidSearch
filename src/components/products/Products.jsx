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
        }, [count])

        console.log(page);
        
        
        const handleChange = (_, value) => {
            setPage(value);
        }

//   console.log(data);


  
//   let product = data?.map(el => (
//         <div key={el.id} className="product__card">
//             <div className="product__card__frame">
//                 {/* <img src={el.images[0]} alt="" /> */}
//                 <button className="product__cart__btn">
//                     {/* <IoCart /> */}
//                 </button>
//                 <button className="product__like__btn">
//                     {/* <FaHeart /> */}
//                 </button>
//             </div>
//             <div className="product__card__content">
//                 <h3>{el.title}</h3>
//                 <div className="product__card__rating">
//                     {/* <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar /> */}
//                 </div>
//                 <div className="product__card__prices">
//                     <del>${el.price * 2}</del>
//                     <p>${el.price}</p>
//                 </div>
//             </div>
//         </div>
//     ))

    //   console.log(data);

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