import { useState } from "react";
import classes from "./product-detail.module.css";
import Breadcrumb from "../ui/breadcrumb";
import ProductImage from "./product-image";
import ProductInfo from "./product-info";
import ProductSpecs from "./product-specs";
import ProductDescription from "./product-description";
import ShoppingCartBtn from "../ui/shopping-cart-btn";
import ShoppingCart from "../ui/shopping-cart";

function ProductDetail(props) {
  const [listActive, setListActive] = useState(false);
  const { product } = props;
  return (
    <section className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <ShoppingCartBtn scroll={true} setActive={setListActive} />
      <div className={classes.image}>
        <ProductImage img={product.images} />
      </div>
      <div className={classes.info}>
        <ProductInfo product={product} />
      </div>
      <div className={classes.specs}>
        <ProductSpecs product={product} />
      </div>
      <div className={classes.desc}>
        <ProductDescription />
      </div>
      {listActive && <ShoppingCart setActive={setListActive} />}
    </section>
  );
}

export default ProductDetail;
