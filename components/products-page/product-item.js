import classes from "./product-item.module.css";
import { useRouter } from "next/router";

function ProductItem(props) {
  const { images, title, price, size } = props.product;
  const router = useRouter();
  function onProductClick() {
    router.push(`/products/${props.category}/${title}`);
  }
  return (
    <div onClick={onProductClick} className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={images} />
      </div>
      <h5>{title}</h5>
      <p>${price}</p>
      <ul>
        {props.category === "snowboards" && size.map((item) => (
          <li key={item}>{item}cm</li>
        ))}
        {props.category === "clothes" && size.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItem;
