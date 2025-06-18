import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div id="wrapper">
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">{category.toUpperCase()}</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of {category}
          </p>
        </div>
      </div>

      <section className="flat-spacing-2">
        <div className="container">
          <div className="wrapper-control-shop">
            <div id="gridLayout" className={`tf-grid-layout wrapper-shop`}>
              <CategoryContainer>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}

                {/* Pagination */}
                <ul className="wg-pagination tf-pagination-list">
                  <li className="active">
                    <a href="#" className="pagination-link">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pagination-link animate-hover-btn">
                      <span className="icon icon-arrow-right">
                        <ArrowRightIcon width={16} height={16} />
                      </span>
                    </a>
                  </li>
                </ul>
              </CategoryContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
