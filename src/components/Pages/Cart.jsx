import "./Page.css";
import "./Cart.css";

function Cart({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 50 ? 0 : 5.0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="Page">
      <h1 className="Page-title">Cart</h1>
      {cartItems.length === 0 && "Cart is empty"}
      {cartItems.map((item) => (
        <div key={item.id} className="Cart-item">
          <div className="Cart-item__id">Product Id: {item.id}</div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
          <div>
            <button
              onClick={() => onAdd(item)}
              className="Cart-item__addButton"
            >
              {" "}
              +
            </button>
            <button
              onClick={() => onRemove(item)}
              className="Cart-item__removeButton"
            >
              {" "}
              -
            </button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div className="Cart-priceCount">
          <div className="Cart-priceRow">
            <div>Items Price</div>
            <div>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="Cart-priceRow">
            <div>Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="Cart-priceRow">
            <div>Shipping Price</div>
            <div>${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="Cart-priceRow">
            <div>
              <strong>Total Price</strong>
            </div>
            <div>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <div>
            <button
              className="Cart-item__checkoutButton"
              onClick={() => alert("implement checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
