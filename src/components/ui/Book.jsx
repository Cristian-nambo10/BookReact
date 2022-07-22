import React from "react";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {

  return (
    <div className="book">
      <a href={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="no" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </a>
      </div>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
    </div>
  );
};

export default Book;
