import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
// import { useState } from "react";


function App() {
  // const [cart, setCart] = useState([]);

function addToCart(book) {

  console.log(book)
}

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={Home} exact/>
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
