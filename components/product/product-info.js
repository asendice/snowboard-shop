import { useState } from "react";
import classes from "./product-info.module.css";
import { BsCaretDown, BsCart3 } from "react-icons/bs";
function ProductInfo(props) {
  const [ active, setActive ] = useState(false);
  const { title, price, size, brand } = props.product;
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.price}>
        <h3>${price}</h3>
      </div>
      <ul className={classes.size}>
        {size.map((num) => (
          <li>{num}cm</li>
        ))}
      </ul>
      <div className={classes.qty}>
        <h5>Qty: </h5>
        <input type="number" min="1" max="9" />
      </div>
      <a className={classes.addToCart}>
        <h5>Add To Cart</h5>
        <BsCart3 className={classes.cartIcon}/>
      </a>
    </div>
  );
}

export default ProductInfo;
