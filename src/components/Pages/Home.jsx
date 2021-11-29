import "./Page.css";
import { useState } from "react";

// const stock = "stock";
const stock = [
  { id: 1, amount: 10 },
  { id: 2, amount: 20 },
  { id: 3, amount: 30 },
  { id: 4, amount: 15 },
  { id: 5, amount: 5 },
];

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [stockCount, setStockCount] = useState(0);
  const [productId, setProductId] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setStockCount(stockCount - 1);
    if (stockCount <= 0) {
      alert("This item is out of stock.");
    }
  };

  const setDetails = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
    setProductId(event.target.id);
    setStockCount(event.target.value);
  };

  const shoes = stock.map(({ id, amount }, index) => (
    <li key={index} id={id} value={amount} onClick={setDetails}>
      Id: {id} Amount: {amount}
    </li>
  ));

  return (
    <div className="Page">
      <h1>HOME</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo est
        qui nam. Cupiditate exercitationem a nulla facilis sapiente, doloremque
        possimus officiis aliquam, esse ipsa, similique asperiores voluptate
        incidunt ad!
      </p>
      <br />
      <p>Amount in cart: {cartCount}</p>
      <p>Amount in stock: {stockCount}</p>
      <br />
      <p>Shoes in stock: {shoes}</p>
      <br />
      <p>
        Details of clicked product: Product id: {productId} Amount in stock:{" "}
        {stockCount}
      </p>
      <button onClick={addToCart}>Add to cart</button>
      <br />
      {stockCount <= 0 ? "This item is out of stock" : null}
    </div>
  );
}

export default Home;
