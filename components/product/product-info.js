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
      <div className={classes.size}>
        <h5 onClick={() => setActive(!active)}>select a size <BsCaretDown className={classes.sizeIcon} /></h5>
        <ul className={`${classes.activeList} ${active === true ? classes.active : classes.nonActive}`}>
          {size.map((num) => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
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
