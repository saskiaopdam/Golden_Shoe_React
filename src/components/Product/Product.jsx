import "./Product.css";

function Product({ product, onAdd }) {
  return (
    <div className="Product">
      <img
        className="Product__image"
        src={product.image}
        alt={product.brand}
      ></img>
      <h2>{product.brand}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div>
        <button onClick={() => onAdd(product)} className="Product__button">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
