import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Total } from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, totalValue } = useContext(CartContext);

  return (
    <div className="tf-page-cart-item container mt-5 px-5">
      <form>
        <table className="tf-table-page-cart">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </tbody>
        </table>
      </form>
      <Total>Total: ${totalValue}</Total>
    </div>
  );
};

export default Checkout;
