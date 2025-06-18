import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <a
      data-bs-toggle="modal"
      className="nav-icon-item"
      onClick={toggleIsCartOpen}
    >
      <ShoppingCartIcon className="icon" width={24} height={24} />
      <span className="count-box">{cartCount}</span>
    </a>
  );
};

export default CartIcon;
