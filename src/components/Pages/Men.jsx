import "./Page.css";
import Product from "../Product/Product";

function Men({ products, onAdd }) {
  const maleShoes = products
    .filter((product) => product.gender === "male")
    .map((product) => (
      <Product key={product.id} product={product} onAdd={onAdd} />
    ));

  console.log({ maleShoes });

  return (
    <div className="Page">
      <h1 className="Page-title">Men's shoes</h1>
      <div className="Page-display">{maleShoes}</div>
    </div>
  );
}

export default Men;
