import React, { memo } from 'react'
import "./ProductCard.scss"

import { FaStar } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


const ProductCard = ({ data }) => {
    let product = data?.map(el => (
        <div key={el.id} className="product__card">
            <div className="product__card__frame">
                <img src={el.images[0]} alt="" />
                <button className="product__cart__btn">
                    <IoCart />
                </button>
                <button className="product__like__btn">
                    <FaHeart />
                </button>
            </div>
            <div className="product__card__content">
                <h3>{el.title}</h3>
                <div className="product__card__rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="product__card__prices">
                    <del>${el.price * 2}</del>
                    <p>${el.price}</p>
                </div>
            </div>
        </div>
    ))
    return product
}

export default memo(ProductCard)