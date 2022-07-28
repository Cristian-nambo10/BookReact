import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  // Adding + to both sides converts it to a number ...
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

 function bookExistsOnCart() { 
    return cart.find(book => book.id === +id);
 }


  return (
    <div id="books_body">
      <main id="books_main">
        <div className="books_container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
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
                    {/* {" "} */}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis adipisci facilis distinctio aperiam minus porro enim
                    fugit alias, dolore voluptas, perferendis consectetur autem
                    omnis! Aperiam amet cupiditate rerum saepe quas!
                  </p>
                  <p className="book__summary--para">
                    {/* {" "} */}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis adipisci facilis distinctio aperiam minus porro enim
                    fugit alias, dolore voluptas, perferendis consectetur autem
                    omnis! Aperiam amet cupiditate rerum saepe quas!
                  </p>
                </div>
                {bookExistsOnCart() ? ( 
                    <Link className="book__link" to="/cart" >
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
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
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
