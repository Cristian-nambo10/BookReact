import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

function addToCart(book) {
  const dupeItem = cart.find(item => +item.id === +book.id) // + is making into numbers
  if (dupeItem) {
  dupeItem.quantity += 1; // Looks for duplicate item and adds quantity instead of just changign Id
  }
  console.log(dupeItem)
  setCart([...cart, {...book, quantity: 1}]) // spread operator use
}

useEffect(() => {
  // console.log(cart);
}, [cart])

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
