import React, { memo } from 'react'
import "./Subscribe.scss"

import subscribeImg from "../../assets/subscribe.png"

const Subscribe = () => {
    return (
        <section id="subscribe">
            <div className="container subscribe">
                <div className="subscribe__left">
                    <h2>Subscribe To Newsletter</h2>
                    <p>Get free guide about smart watches daily. </p>
                    <div className="subscribe__search__box">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className="subscribe__search__btn">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="subscribe__right">
                    <img src={subscribeImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default memo(Subscribe)