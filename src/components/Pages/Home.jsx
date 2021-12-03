import "./Page.css";
import Product from "../Product/Product";

function Home({ products, onAdd }) {
  const shoes = products.map((product) => (
    <Product key={product.id} product={product} onAdd={onAdd} />
  ));

  const cheapShoes = products
    .filter((product) => product.price <= 100)
    .map((product) => (
      <Product key={product.id} product={product} onAdd={onAdd} />
    ));

  console.log({ cheapShoes });

  return (
    <div className="Page">
      <h1 className="Page-title">Homepage</h1>
      <div className="Page-display">{shoes}</div>
      {/* <div className="Page-display">{cheapShoes}</div> */}
    </div>
  );
}

export default Home;
