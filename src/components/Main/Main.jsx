import { Route } from "react-router-dom";

import "./Main.css";

import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Stores from "../Pages/Stores";
import Careers from "../Pages/Careers";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

function Main() {
  return (
    <div className="Main">
      <Route exact path="/" component={Home} />
      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/stores" component={Stores} />
      <Route path="/careers" component={Careers} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default Main;
