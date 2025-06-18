import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItem } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItem(cartItem);

  return (
    <tr className="tf-cart-item file-delete mb-3 pb-3">
      <td className="tf-cart-item_product">
        <a className="img-box">
          <img src={imageUrl} alt="img-product" />
        </a>
        <div className="cart-info">
          <a className="cart-title link">{name}</a>
          <div className="remove-cart link remove" onClick={clearItemHandler}>
            Remove
          </div>
        </div>
      </td>
      <td
        className="tf-cart-item_price tf-variant-item-price"
        cart-data-title="Price"
      >
        <div className="cart-price price">${price}</div>
      </td>
      <td className="tf-cart-item_quantity" cart-data-title="Quantity">
        <div className="cart-quantity">
          <div className="wg-quantity">
            <div
              className="btn-quantity btndecrease"
              onClick={removeItemHandler}
            >
              <svg
                className="d-inline-block"
                width={9}
                height={1}
                viewBox="0 0 9 1"
                fill="currentColor"
              >
                <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path>
              </svg>
            </div>
            <input type="text" name="number" readOnly value={quantity} />
            <div className="btn-quantity btnincrease" onClick={addItemHandler}>
              <svg
                className="d-inline-block"
                width={9}
                height={9}
                viewBox="0 0 9 9"
                fill="currentColor"
              >
                <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </td>
      <td
        className="tf-cart-item_total tf-variant-item-total"
        cart-data-title="Total"
      >
        <div className="cart-total price">${quantity * price}</div>
      </td>
    </tr>
  );
};

export default CheckoutItem;
