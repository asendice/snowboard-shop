import classes from "./cart-summary.module.css";
import { BsCart3 } from "react-icons/bs";

function CartSummary(props) {
  const { items } = props;
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <BsCart3 className={classes.icon} />
        <h4>Cart Summary</h4>
      </div>

      <ul className={classes.list}>
        {items.map((item) => (
          <li className={classes.listItem} key={item}>
            <div className={classes.listItemHeader}>
              <h5>
                {item.qty}x {item.title}
              </h5>
              <h5>${item.price}</h5>
            </div>
            <p>Size: {item.size}</p>
          </li>
        ))}
      </ul>

      <div className={classes.feeContainer}>
        <p>Tax: </p>
        <p>Shipping: </p>
      </div>

      <div className={classes.total}>
        <h5>Total: $MONEY </h5>
      </div>
    </div>
  );
}

export default CartSummary;
