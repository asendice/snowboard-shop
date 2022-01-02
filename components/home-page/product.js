import classes from "./product.module.css";
import { useRouter } from "next/router";

function Product(props) {
  const { title, images, price, id } = props.item;

  const router = useRouter();
  function onProductClick() {
    router.push(`/products/${props.category}/${title}`);
  }
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <a onClick={onProductClick} className={classes.btn}>
          More Info
        </a>
      </div>
      <div className={classes.imgContainer}>
        <img src={images} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
}

export default Product;
