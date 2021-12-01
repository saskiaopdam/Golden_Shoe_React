import "./Page.css";
import Product from "../Product/Product";

function Home({ products, onAdd }) {
  const shoes = products.map((product) => (
    <Product key={product.id} product={product} onAdd={onAdd} />
  ));

  return (
    <div className="Page">
      <h1 className="Page__title">HOME</h1>
      <div className="Page__display">{shoes}</div>
    </div>
  );
}

export default Home;
