import "./Page.css";

function Cart({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 50 ? 0 : 5.0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="Page">
      <h1>CART</h1>
      {cartItems.length === 0 && "Cart is Empty"}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="col-2">{item.brand}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              {" "}
              +
            </button>
            <button onClick={() => onRemove(item)} className="add">
              {" "}
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <hr></hr>
            <div className="row">
              <button onClick={() => alert("implement checkout")}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
