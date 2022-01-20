import { useState, useEffect } from "react";
import classes from "./checkout-grid.module.css";
import CartSummary from "./cart-summary";
import PaymentDetails from "./payment-details";
import Breadcrumb from "../ui/breadcrumb";
import { useCart } from "../../store/cart-context";
import { useSave } from "../../store/save-context";
import { rounder } from "../../helpers/numbers-utils";

function CheckoutGrid() {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const save = useSave();

  const savings = .15;
  // const savings = save.active === true ? .15 : 1;
  const taxRate = 0.825;
  const shipping = 29.99;
  const cart = useCart();
  const prices = cart.map((item) => {
    return rounder(item.price * item.qty);
  });
  let pricesTotaled = prices.reduce((a, b) => a + b, 0);

  
  useEffect(() => {
    if (save.saveActive === true){
      pricesTotaled = pricesTotaled - (pricesTotaled * savings);
    }
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
        <CartSummary items={cart} total={total} tax={tax} savings={rounder(pricesTotaled * savings)}/>
      </div>
      <div className={classes.payment}>
        <PaymentDetails />
      </div>
    </div>
  );
}

export default CheckoutGrid;
