import classes from "./shopping-cart.module.css";
import { BsX } from "react-icons/bs";
function ShoppingCart(props) {
  const { setActive } = props;
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <h4>Shopping Cart</h4>
          <BsX className={classes.icon} onClick={() => setActive(false)} />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
