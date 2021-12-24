import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import classes from "./shopping-card.module.css";

function ShoppingCart(props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])
  if (props.scroll) {
    return (
      <a onClick={() => props.setActive(true)} className={`${classes.scrolled} ${scrollY >= 100 ? classes.active: classes.notActive}`}>
        <BsCart3 className={classes.icon} />
      </a>
    );
  }
  return (
    <div className={classes.container}>
      <BsCart3 className={classes.icon} />
    </div>
  );
}

export default ShoppingCart;
