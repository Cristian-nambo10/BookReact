import React from "react";
import ImgBooks from '../assets/Library1.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Texas most Coding oriented Library!</h1>
                        <h2 className="white">Find the book you need at Texas <span className="purple">Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={ImgBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;