import classes from "./product-detail.module.css";
import Breadcrumb from "../ui/breadcrumb";
import ProductImage from "./product-image";
import ProductInfo from "./product-info";
import ProductSpecs from "./product-specs";

function ProductDetail (props) {
  const { product } = props;
  return (
    <section className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={classes.image}>
        <ProductImage img={product.images}/>
      </div>
      <div className={classes.info}>
        <ProductInfo product={product}/>
      </div>
      <div className={classes.specs}>
        <ProductSpecs product={product} />
      </div>
    </section>
  )
}

export default ProductDetail;