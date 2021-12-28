import classes from "./product-detail.module.css";
import Breadcrumb from "../ui/breadcrumb";
import ProductImage from "./product-image";

function ProductDetail (props) {
  const { product } = props;
  console.log(product)
  return (
    <section className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={classes.image}>
        <ProductImage img={product.images}/>
      </div>
    </section>
  )
}

export default ProductDetail;