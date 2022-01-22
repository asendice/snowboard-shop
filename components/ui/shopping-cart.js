import { useRef, useEffect, useState, Fragment } from "react";
import classes from "./shopping-cart.module.css";
import CheckoutBtn from "./checkout-btn";
import Link from "next/link";
import { BsX, BsCartX } from "react-icons/bs";
import { useCart, useCartUpdate } from "../../store/cart-context";
import { rounder } from "../../helpers/numbers-utils";

function ShoppingCart(props) {
  const { setActive } = props;
  const [total, setTotal] = useState();
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

  useEffect(() => {
    const prices = cart.map((item) => {
      return rounder(item.price * item.qty);
    });
    const pricesTotaled = prices.reduce((a, b) => a + b, 0);
    setTotal(rounder(pricesTotaled));
  }, [cart]);

  return (
    <section id="container" className={classes.container}>
      <div ref={modalRef} className={classes.content}>
        <div className={classes.header}>
          <h4>Shopping Cart</h4>
          <BsX className={classes.icon} onClick={() => setActive(false)} />
        </div>

        {cart.length > 0 ? (
          <Fragment>
            <ul className={classes.list}>
              {cart.map((item) => {
                // puke -- going to need to fix this before adding accessories
                const href = `/products/${
                  item.size.length > 3 ? "clothes" : "snowboards"
                }/${item.title}`;
                return (
                  <li className={classes.listItem} key={item._id}>
                    <img src={item.images[0]} />
                    <div className={classes.listItemContent}>
                      <Link href={href}>
                        <a className={classes.listTitle}>
                          <h5>{item.title}</h5>
                        </a>
                      </Link>
                      <p>Size: {item.size}</p>
                      <p>Qty: {item.qty}</p>
                      <p>${item.price * item.qty}</p>
                    </div>
                    <a
                      className={classes.remove}
                      onClick={() => updateCart("delete", item)}
                    >
                      remove
                    </a>
                  </li>
                );
              })}
            </ul>
            <CheckoutBtn title="Checkout" setActive={setActive}>
              ${total}
            </CheckoutBtn>
          </Fragment>
        ) : (
          <div className={classes.emptyCart}> 
            <BsCartX className={classes.cartIcon} />
            <h5>Your Cart Is Empty</h5>
            <Link href="/products"><a className={classes.shopBtn}>Shop Now</a></Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShoppingCart;
