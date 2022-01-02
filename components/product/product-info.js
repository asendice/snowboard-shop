import classes from "./product-info.module.css";
import { BsCart3 } from "react-icons/bs";
function ProductInfo(props) {
  const { title, price, size } = props.product;
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.price}>
        <h3>${price}</h3>
      </div>
      <h5>Select a size: </h5>
      <ul className={classes.size}>
        {props.category === "snowboards" &&
          size.map((item) => <li key={item}>{item}cm</li>)}
        {props.category === "clothes" &&
          size.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className={classes.qty}>
        <h5>Qty: </h5>
        <input type="number" min="1" max="9" />
      </div>
      <a className={classes.addToCart}>
        <h5>Add To Cart</h5>
        <BsCart3 className={classes.cartIcon} />
      </a>
    </div>
  );
}

export default ProductInfo;
