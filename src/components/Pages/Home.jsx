import "./Page.css";
import Product from "../Product/Product";

function Home({
  // stock,
  products,
  onAdd,
  // shoeClicked,
  // buttonClicked,
  // cartCount,
  // stockCount,
  // addToCart,
  // showDetails,
}) {
  // const shoes = products.map(
  //   ({ id, brand, description, price, image, stock }, index) => (
  //     <li key={index} id={id} value={stock} onClick={showDetails} onAdd={onAdd}>
  //       {brand} {description} ${price} {image}
  //     </li>
  //   )
  // );

  const shoes = products.map((product) => (
    <Product
      key={product.id}
      // id={product.id}
      // value={product.stock}
      product={product}
      // onClick={showDetails}
      onAdd={onAdd}
    ></Product>
  ));

  return (
    <div className="Page">
      <h1>HOME</h1>
      {shoes}
      {/* <br />
      {shoeClicked ? (
        <div>
          <p>Amount in stock: {stockCount}</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      ) : null}
      <br />
      {shoeClicked && stockCount <= 0 ? "This item is out of stock" : null}
      {buttonClicked ? <p>Items in cart: {cartCount}</p> : null} */}
    </div>
  );
}

export default Home;
