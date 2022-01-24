import classes from "./product-grid.module.css";
import ProductItem from "./product-item";
import NotFound from "./notfound";

function ProductGrid(props) {
  const { products, category, setFilters } = props;
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
    <NotFound setFilters={setFilters}/>
  )

}

export default ProductGrid;
