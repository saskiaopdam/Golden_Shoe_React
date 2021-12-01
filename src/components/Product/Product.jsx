import { useState } from "react";

import "./Product.css";

function Product({ product, onAdd }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  const handleClick = (product) => {
    if (product.stock === 0) {
      alert("Currently out of stock. Available in 2 days.");
    } else {
      onAdd(product);
    }
  };

  return (
    <div className="Product" onClick={toggleDetails} open={detailsOpen}>
      <img
        className="Product__image"
        src={product.image}
        alt={product.brand}
      ></img>
      <div className="Product__summary">
        <h2 className="Product__brand">{product.brand}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>

      {detailsOpen ? (
        <div className="Product__details">
          <p>In stock: {product.stock}</p>
          <button
            className="Product__button"
            onClick={() => {
              handleClick(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
