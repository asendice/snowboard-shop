import { useState, useEffect } from "react";
import classes from "./checkout-grid.module.css";
import CartSummary from "./cart-summary";
import PaymentDetails from "./payment-details";
import Breadcrumb from "../ui/breadcrumb";
import { useCart } from "../../store/cart-context";
import { rounder } from "../../helpers/numbers-utils";

function CheckoutGrid() {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const taxRate = 0.825;
  const shipping = 29.99;
  const cart = useCart();

  useEffect(() => {
    const prices = cart.map((item) => {
      return rounder(item.price * item.qty);
    });
    const pricesTotaled = prices.reduce((a, b) => a + b, 0);
    const tax = pricesTotaled * taxRate;
    setTax(rounder(pricesTotaled - tax));
    const totalWithAll = pricesTotaled + (pricesTotaled - tax) + shipping;
    setTotal(rounder(totalWithAll));
  }, [cart]);

  return (
    <div className={classes.container}>
      <div className={classes.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={classes.summary}>
        <CartSummary items={cart} total={total} tax={tax} />
      </div>

      <div className={classes.payment}>
        <h4>Payment Details</h4>
        <PaymentDetails />
      </div>
    </div>
  );
}

export default CheckoutGrid;
