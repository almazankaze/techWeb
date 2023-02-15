import "./cart.scss";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      <div className="total">TOTAL: $</div>
    </div>
  );
};

export default Cart;
