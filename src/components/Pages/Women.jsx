import "./Page.css";
import Product from "../Product/Product";

function Women({ products, onAdd }) {
  const femaleShoes = products
    .filter((product) => product.gender === "female")
    .map((product) => (
      <Product key={product.id} product={product} onAdd={onAdd} />
    ));

  console.log({ femaleShoes });

  return (
    <div className="Page">
      <h1 className="Page-title">Women's shoes</h1>
      <div className="Page-display">{femaleShoes}</div>
    </div>
  );
}

export default Women;
