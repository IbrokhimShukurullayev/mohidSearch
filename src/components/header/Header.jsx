import React, { memo, useEffect, useState } from 'react'
import "./Header.scss"

import { IoSearch } from "react-icons/io5";
import { FaUserTie, FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { TbDeviceWatch } from "react-icons/tb";

import logo from "../../assets/logo.svg"
import SearchItem from '../search-item/SearchItem';

import axios from "../../api"

const Header = () => {
    const [search, setSearch] = useState(false)
    const [value, setValue] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        if (!value.trim()) return
        axios
            .get(`/products/search?q=${value.trim()}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [value])

    setTimeout(() => {
        if (search) {
            document.querySelector(".cancel__btn").classList.add("cancel__btn__anim")
        } else {
            document.querySelector(".cancel__btn").classList.remove("cancel__btn__anim")
        }
    }, 400)


    const handleClearInput = () => {
    setValue("");
  };
    return (
        <>
            <div onClick={() => setSearch(false)} className={`overlay ${search ? "show__overlay" : ""}`}></div>
            <header>
                <nav className="container nav">
                    <div className="nav__logo">
                        <img src={logo} alt="" />
                        <h3>Mohid</h3>
                    </div>
                    <ul className={`nav__list ${search ? "hide__nav__list" : ""}`}>
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li>
                            <a href="#category">Brands</a>
                        </li>
                        <li>
                            <a href="#products">Recent Products</a>
                        </li>
                        <li>
                            <a href="#subscribe">Contact</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                    <div className="nav__end">
                        <div className={`search__content ${search ? "show__search__content" : ""}`}>
                            <div className="con">
                                <div className="search__content__main">
                                    <div className="search__content__main__header">
                                        <div className="search__logo">
                                            <TbDeviceWatch />
                                            <h3>Mohid</h3>
                                        </div>
                                        <button className={`cancel__btn`} onClick={() => setSearch(false)}>Cancel</button>
                                    </div>
                                    <div className="search__content__main__wrapper">
                                        {
                                            value.trim() ? <SearchItem data={data} /> : <div className="search__empty">
                                                <h1>Searching ...</h1>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`nav__search__box ${search ? "show__nav__search__box" : ""}`}>
                            <button onClick={() => setSearch(true)} className='nav__search__btn'><IoSearch /></button>
                            <button  onClick={() => { handleClearInput() }} className='nav__search__delete'><IoCloseSharp/></button>
                            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                        </div>
                        <button className="nav__user__btn"><FaUserTie /></button>
                        <button className="nav__cart__btn"><FaCartShopping /></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default memo(Header)