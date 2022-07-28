import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { Route, Switch } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark')

  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <Switch>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav />
        <Route path="/" component={Home} exact />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
          )}
        />
        <Footer />
      </div>
      </ThemeContext.Provider>
    </Switch>
  );
}

export default App;
