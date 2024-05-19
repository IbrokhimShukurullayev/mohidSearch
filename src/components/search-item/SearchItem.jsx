import React from 'react'

const SearchItem = ({ data }) => {
    let item = data?.map(el => (
        <div key={el.id} className="search__content__item">
            <img src={el.images[0]} alt="" />
            <div className="search__content__item__right">
                <h2>{el.title}</h2>
                <p>{el.description}</p>
            </div>
        </div>
    ))
    return (
        <>
            {!data.length ? <h2 className='not__fount__search'>Not found!</h2> : <></>}
            {item}
        </>
    )
}

export default SearchItem