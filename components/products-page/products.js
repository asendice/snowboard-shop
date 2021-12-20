import classes from "./products.module.css";
import CategorySideBar from "./category-sidebar";
import ProductNavigation from "./product-navigation";
import ProductGrid from "./product-grid";

function Products(props) {
  const categories = Object.keys(props.products[0]).filter(
    (item) =>
      item !== "_id" &&
      item !== "title" &&
      item !== "images" &&
      item !== "featured"
  );
  return (
    <section className={classes.container}>
      <CategorySideBar categories={categories} />
      <ProductNavigation />
      <ProductGrid />
    </section>
  );
}

export default Products;
