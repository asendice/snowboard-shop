import { useRef, useEffect } from "react";
import classes from "./shopping-cart.module.css";
import { BsX } from "react-icons/bs";
import { useCart, useCartUpdate } from "../../store/cart-context";

function ShoppingCart(props) {
  const { setActive } = props;
  const modalRef = useRef(null);
  const cart = useCart();
  const updateCart = useCartUpdate();

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

  console.log(cart, "cart from sc")

  return (
    <section id="container" className={classes.container}>
      <div ref={modalRef} className={classes.content}>
        <div className={classes.header}>
          <h4>Shopping Cart</h4>
          <BsX className={classes.icon} onClick={() => setActive(false)} />
        </div>
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              {/* <img>{item.images[0]}</img> */}
              <h5>{item.title}</h5>
              <BsX onClick={() => updateCart("delete", item)}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ShoppingCart;
