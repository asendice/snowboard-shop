import classes from "./product-grid.module.css";
import ProductItem from "./product-item";

function ProductGrid(props) {
  const { products } = props;
  if(products.length > 0){
    return (
      <ul className={classes.container}>
        {products.map((product) => (
          <ProductItem key={product.title} product={product} />
        ))}
      </ul>
    );
  }

  return (
    <div> No Products Found</div>
  )

}

export default ProductGrid;
