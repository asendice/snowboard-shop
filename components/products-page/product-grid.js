import classes from "./product-grid.module.css";
import ProductItem from "./product-item";

function ProductGrid(props) {
  const { products } = props;
  return (
    <ul className={classes.container}>
      {products.map((product) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </ul>
  );
}

export default ProductGrid;
