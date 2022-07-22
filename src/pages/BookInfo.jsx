import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function BookInfo() {
  return (
    <div id="books_body">
        <main id="books_main">
            <div className="books_container">
                <div className="row">
                    <div className="book_selected--top">
                        <a href="/books" className='book__link'>
                            <FontAwesomeIcon icon="arrow-left" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BookInfo