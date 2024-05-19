import React, { memo } from 'react'
import "./About.scss"

import aboutImg1 from "../../assets/about1.png"
import aboutImg2 from "../../assets/about2.png"
import star from "../../assets/about-star.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
    return (
        <section id="about">
            <div className="container about">
                <h6 className="about__caption">
                    Here are our some of the best clients.
                </h6>
                <h2 className="about__title">
                    What People Say About Us
                </h2>
                <Swiper watchSlidesProgress={true} slidesPerView={2} className="mySwiper about__wrapper">
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg1} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hamza Faizi</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg2} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hafiz Huzaifa</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg1} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hamza Faizi</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg2} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hafiz Huzaifa</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg1} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hamza Faizi</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='about__card'>
                        <div className="about__card__frame">
                            <img src={aboutImg2} alt="" />
                        </div>
                        <div className="about__card__content">
                            <h3>Hafiz Huzaifa</h3>
                            <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <img src={star} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default memo(About)