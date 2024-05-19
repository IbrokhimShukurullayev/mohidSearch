import React, { memo } from 'react'
import "./Hero.scss"

import { IoSearch } from "react-icons/io5";

import heroImg from "../../assets/hero-img.png"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container hero">
                <div className="hero__left">
                    <h1 className="hero__title">
                        Discover Most Suitable Watches
                    </h1>
                    <p className="hero__description">
                        Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!
                    </p>
                    <div className="hero__search__box">
                        <button className="search__icon__btn">
                            <IoSearch />
                        </button>
                        <input type="text" placeholder='Find the best brands' />
                        <button className="search__btn">
                            Search
                        </button>
                    </div>
                </div>
                <div className="hero__right">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default memo(Hero)