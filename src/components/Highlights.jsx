import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = ({ icon }) => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                         icon={<FontAwesomeIcon icon='bolt' />}
                         title='Quick and Easy'
                         para='Get Access to the book you purchased online instantly!f' 
                        />
                        <Highlight
                         icon={<FontAwesomeIcon icon='book-open' />}
                         title='40,000+ Books'
                         para='Library has books in all your favorite Categories!' 
                        />
                        <Highlight
                         icon={<FontAwesomeIcon icon='tags' />}
                         title='Affordable'
                         para='Get Access to popular books for as little as $15!' 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;