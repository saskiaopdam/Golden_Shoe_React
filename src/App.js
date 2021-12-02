import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header
            cartCount={cartItems.length}
            searchOpen={searchOpen}
            toggleSearch={toggleSearch}
          />
          <Main
            products={products}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            searchOpen={searchOpen}
          />
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
