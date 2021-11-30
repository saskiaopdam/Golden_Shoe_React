import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

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

  // const [shoeClicked, setShoeClicked] = useState(false);
  // const [buttonClicked, setButtonClicked] = useState(false);
  // const [cartCount, setCartCount] = useState(0);
  // const [stockCount, setStockCount] = useState(0);

  // const addToCart = () => {
  //   setButtonClicked(true);
  //   setCartCount(cartCount + 1);
  //   setStockCount(stockCount - 1);
  //   if (stockCount <= 0) {
  //     alert("You can't buy this item at the moment.");
  //   }
  // };

  // const showDetails = (event) => {
  //   setShoeClicked(true);
  //   setStockCount(event.target.value);
  // };

  return (
    <div className="App">
      <Router>
        <Header cartCount={cartItems.length} />
        <Main
          products={products}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          // shoeClicked={shoeClicked}
          // buttonClicked={buttonClicked}
          // cartCount={cartCount}
          // stockCount={stockCount}
          // addToCart={addToCart}
          // showDetails={showDetails}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
