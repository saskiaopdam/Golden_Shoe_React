import { Route } from "react-router-dom";

import "./Main.css";

import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Stores from "../Pages/Stores";
import Careers from "../Pages/Careers";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";

function Main({ products, cartItems, onAdd, onRemove, searchOpen }) {
  return (
    <div
      className="Main"
      searchOpen={searchOpen}
      style={
        searchOpen
          ? { padding: "7em 1em 1em 1em" }
          : { padding: "4em 1em 1em 1em" }
      }
    >
      <Route exact path="/">
        <Home products={products} onAdd={onAdd} />
      </Route>
      <Route exact path="/men">
        <Men products={products} onAdd={onAdd} />
      </Route>
      <Route exact path="/women">
        <Women products={products} onAdd={onAdd} />
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
      <Route exact path="/wishlist">
        <Wishlist />
      </Route>
      <Route exact path="/cart">
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </Route>
    </div>
  );
}

export default Main;
