import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./shopping-cart-btn.module.css";
import ShoppingCart from "./shopping-cart";
import { useCart } from "../../store/cart-context";

function ShoppingCartBtn(props) {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(false);
  const cart = useCart();

  useEffect(() => {
    if (active === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (props.scroll) {
    return (
      <Fragment>
        <a
          onClick={() => setActive(true)}
          className={`${classes.scrolled} ${
            scrollY >= 100 ? classes.active : classes.notActive
          }`}
        >
          <BsCart3 className={classes.icon} />
          {cart.length > 0 && (
            <div className={classes.notificationDot}>{cart.length}</div>
          )}
        </a>
        {active && <ShoppingCart setActive={setActive} />}
      </Fragment>
    );
  }
  return (
    <Fragment>
      <a onClick={() => setActive(true)} className={classes.container}>
        <BsCart3 className={classes.icon} />
        {cart.length > 0 && <div className={classes.notificationDot}>{cart.length}</div>}
      </a>
      {active && <ShoppingCart setActive={setActive} />}
    </Fragment>
  );
}

export default ShoppingCartBtn;
