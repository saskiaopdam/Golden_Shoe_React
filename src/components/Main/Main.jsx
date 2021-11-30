import { Route } from "react-router-dom";

import "./Main.css";

import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Stores from "../Pages/Stores";
import Careers from "../Pages/Careers";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import FAQ from "../Pages/FAQ";

function Main({
  // stock,
  products,
  cartItems,
  onAdd,
  onRemove,
  // cartCount,
  // shoeClicked,
  // buttonClicked,
  // stockCount,
  // addToCart,
  // showDetails,
}) {
  return (
    <div className="Main">
      <Route exact path="/">
        <Home
          // stock={stock}
          products={products}
          onAdd={onAdd}
          // shoeClicked={shoeClicked}
          // buttonClicked={buttonClicked}
          // productId={productId}
          // cartCount={cartCount}
          // stockCount={stockCount}
          // addToCart={addToCart}
          // showDetails={showDetails}
        />
      </Route>
      <Route exact path="/men">
        <Men />
      </Route>
      <Route exact path="/women">
        <Women />
      </Route>
      <Route exact path="/stores">
        <Stores />
      </Route>
      <Route exact path="/careers">
        <Careers />
      </Route>
      <Route exact path="/FAQ">
        <FAQ />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/cart">
        <Cart
          // cartCount={cartCount}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </Route>
    </div>
  );
}

export default Main;
