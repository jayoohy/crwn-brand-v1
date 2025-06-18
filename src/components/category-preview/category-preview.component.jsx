import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { Preview } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <div id="wrapper">
      <div className="tf-page-title">
        <div className="container-full">
          <Link className="heading text-center mb-3" to={title}>
            {title.toUpperCase()}
          </Link>
          <Preview>
            {products
              .filter((_, index) => index < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
