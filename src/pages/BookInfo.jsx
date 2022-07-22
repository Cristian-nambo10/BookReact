import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
import Book from "../components/ui/Book";

const BookInfo = ({ books }) => {
  const { id } = useParams();
  // Adding + to both sides converts it to a number ...
  const book = books.find((book) => +book.id === +id);
  console.log(book);
  return (
    <div id="books_body">
      <main id="books_main">
        <div className="books_container">
          <div className="row">
            <div className="book__selected--top">
              <a href="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </a>
              <a href="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </a>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis adipisci facilis distinctio aperiam minus porro enim
                    fugit alias, dolore voluptas, perferendis consectetur autem
                    omnis! Aperiam amet cupiditate rerum saepe quas!
                  </p>
                  <p className="book__summary--para">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis adipisci facilis distinctio aperiam minus porro enim
                    fugit alias, dolore voluptas, perferendis consectetur autem
                    omnis! Aperiam amet cupiditate rerum saepe quas!
                  </p>
                </div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Reccomended Books</h2>
            </div>
            <div className="books">
            {books
            .filter((book) => book.rating === 5 && +book.id !== +id)
            .slice(0, 4)
            .map(book => <Book book={book} key={book.id} />)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
