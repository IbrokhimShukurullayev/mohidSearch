import React from 'react';
import "./Skeleton.scss";

const Skeleton = () => {
    return (
        <div className="skeleton__wrapper">
            {[...Array(3)].map((_, index) => (
                <div className="skeleton__card" key={index}>
                    <div className="skeleton__frame"></div>
                    <h3 className="skeleton__title"></h3>
                    <div className="skeleton__rating"></div>
                    <div className="skeleton__price__box">
                        <span className="skeleton__price"></span>
                        <span className="skeleton__price"></span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skeleton;
