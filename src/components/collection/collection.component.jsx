import CollectionItem from "../collection-item/collection-item.component";
import categories from "../categories-menu.json";

const Collection = () => {
  return (
    <section className="flat-spacing-8">
      <div className="container-full">
        <div className="masonry-layout wow fadeInUp">
          {categories.map((category) => {
            return <CollectionItem key={category.id} category={category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;
