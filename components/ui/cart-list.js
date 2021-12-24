import classes from "./cart-list.module.css";
import { BsX } from "react-icons/bs";
function CartList() {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <h4>Shopping Cart</h4>
          <BsX className={classes.icon} />
        </div>
      </div>
    </section>
  );
}

export default CartList;
