import React, { memo } from 'react'
import "./Category.scss"

import categoryImg1 from "../../assets/category1.png"
import categoryImg2 from "../../assets/category2.png"
import categoryImg3 from "../../assets/category3.png"

const Category = () => {
    return (
        <section id="category">
            <div className="container category">
                <div className="category__card">
                    <div className="category__card__frame">
                        <img src={categoryImg1} alt="" />
                    </div>
                    <div className="category__card__content">
                        <h3>Apple</h3>
                        <p>Apple is one of the most famous smart watches providing company.</p>
                    </div>
                </div>
                <div className="category__card">
                    <div className="category__card__frame">
                        <img src={categoryImg2} alt="" />
                    </div>
                    <div className="category__card__content">
                        <h3>Xiaomi</h3>
                        <p>Xiaomi smart watches are produced by MI company.</p>
                    </div>
                </div>
                <div className="category__card">
                    <div className="category__card__frame">
                        <img src={categoryImg3} alt="" />
                    </div>
                    <div className="category__card__content">
                        <h3>FitBit</h3>
                        <p>FitBit smart watches are best for there health and fitness features.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Category)