import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CollectionItem = ({ category: { title, imageUrl, id } }) => {
  return (
    <div className={`item-${id} collection-item large hover-img`}>
      <div className="collection-inner">
        <Link
          to={`/shop/${title}`}
          className="collection-image img-style rounded-0"
        >
          <img className="lazyload" src={imageUrl} alt="collection-img" />
        </Link>
        <div className="collection-content">
          <Link
            to={`/shop/${title}`}
            className="tf-btn collection-title hover-icon"
          >
            <span>{title.toUpperCase()}</span>
            <i className="icon icon-arrow1-top-left">
              <ArrowUpRightIcon width={16} height={16} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
