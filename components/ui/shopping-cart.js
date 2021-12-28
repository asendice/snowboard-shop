import { useRef, useEffect } from "react";
import classes from "./shopping-cart.module.css";
import { BsX } from "react-icons/bs";

function ShoppingCart(props) {
  const { setActive } = props;
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <section id="container" className={classes.container}>
      <div ref={modalRef} className={classes.content}>
        <div className={classes.header}>
          <h4>Shopping Cart</h4>
          <BsX className={classes.icon} onClick={() => setActive(false)} />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
