import classes from "./checkout-btn.module.css";
import Link from "next/link";
import { BsCartCheck } from "react-icons";

function CheckoutBtn(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>
          <span>Checkout</span> <span>{props.children}</span>
        </a>
      </Link>
    );
  }
  return (
    <a className={classes.btn}>
      <span>Checkout</span> <span>{props.children}</span>
    </a>
  );
}

export default CheckoutBtn;
