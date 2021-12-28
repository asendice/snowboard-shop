import classes from "./product-grid.module.css";
import ProductItem from "./product-item";

function ProductGrid(props) {
  const { products, category } = props;
  if(products.length > 0){
    return (
      <ul className={classes.container}>
        {products.map((product) => (
          <ProductItem key={product.title} product={product} category={category} />
        ))}
      </ul>
    );
  }

  return (
    <div> No Products Found</div>
  )

}

export default ProductGrid;
