import "./Product.css";

function Product({ product, onAdd }) {
  return (
    <div className="Product">
      <img
        className="Product__image"
        src={product.image}
        alt={product.brand}
        img
      />
      <h2 className="Product__brand">{product.brand}</h2>
      <p className="Product__text">{product.description}</p>
      <p className="Product__text">${product.price}</p>
      <button className="Product__button" onClick={() => onAdd(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
