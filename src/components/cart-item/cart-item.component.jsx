const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="tf-mini-cart-item">
      <div className="tf-mini-cart-image">
        <a>
          <img src={imageUrl} alt={`${name}`} />
        </a>
      </div>
      <div className="tf-mini-cart-info">
        <div className="title link">{name}</div>
        <div className="price fw-6">{`${quantity} X $${price}`}</div>
      </div>
    </div>
  );
};

export default CartItem;
