import classes from "./checkout-btn.module.css";
import { useRouter } from "next/router";

function CheckoutBtn(props) {
  const router = useRouter();
  function handleClick() {
    props.setActive(false)
    router.push("/checkout");
  }

  return (
    <a className={classes.btn} onClick={handleClick}>
      <span>Checkout</span> <span>{props.children}</span>
    </a>
  );
}

export default CheckoutBtn;
