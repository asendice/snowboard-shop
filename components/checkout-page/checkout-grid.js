import classes from "./checkout-grid.module.css";
import CartSummary from "./cart-summary";
import PaymentDetails from "./payment-details";
import Breadcrumb from "../ui/breadcrumb";
import { useCart } from "../../store/cart-context";

function CheckoutGrid() {
  const cart = useCart();

  return (
    <div className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={classes.summary}>
        <CartSummary items={cart} />
      </div>

      <div className={classes.payment}>
        <PaymentDetails />
      </div>
    </div>
  );
}

export default CheckoutGrid;
