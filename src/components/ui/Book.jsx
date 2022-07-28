import React from "react";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="no" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;
