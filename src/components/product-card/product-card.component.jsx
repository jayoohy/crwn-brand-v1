import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div
      className="card-product grid"
      data-availability="In stock"
      data-brand="Ecomus"
    >
      <div className="card-product-wrapper">
        <div className="product-img">
          <img
            className="lazyload img-product"
            src={imageUrl}
            alt="image-product"
          />
        </div>
        <div className="list-product-btn absolute-2">
          <a
            onClick={addProductToCart}
            data-bs-toggle="modal"
            className="box-icon bg_white quick-add tf-btn-loading"
          >
            <ShoppingBagIcon width={24} height={24} className="icon icon-bag" />
            <span className="tooltip">Add to cart</span>
          </a>
        </div>
      </div>
      <div className="card-product-info">
        <a className="title link">{name}</a>
        <span className="price current-price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
