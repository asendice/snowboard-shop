import classes from "./product-item.module.css";
import { useRouter } from "next/router";

function ProductItem(props) {
  const { images, title, price, size } = props.product;
  const router = useRouter();
  function onProductClick() {
    router.push(`/products/${props.category}/${title}`)
  }
  return (
    <div onClick={onProductClick} className={classes.container}>
      <img src={images} />
      <h5>{title}</h5>
      <p>{price}</p>
      <ul>
        {size.map((item) => (
          <li key={item}>{item}cm</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItem;
