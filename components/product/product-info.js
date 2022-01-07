import { useState } from "react";
import classes from "./product-info.module.css";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { useCart, useCartUpdate } from "../../store/cart-context";
import { useNotification } from "../../store/notifcation-context";

function ProductInfo(props) {
  const { title, price, size, images, _id } = props.product;
  const [selectedSize, setSelectedSize] = useState(size[0]);
  const [qty, setQty] = useState(1);
  const cart = useCart();
  const updateCart = useCartUpdate();
  const notification = useNotification();


  function addToCartHandler() {
    const product = {
      _id: _id,
      title: title,
      price: price,
      size: selectedSize,
      images: images,
      qty: qty,
    };

    updateCart("add", product);
    notification.showNotification({
      title: `${product.title}`,
      message: `added to shopping cart!`,
      status: 'success'
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.price}>
        <h3>${price}</h3>
      </div>
      <ul className={classes.size}>
        {props.category === "snowboards" &&
          size.map((item) => (
            <li
              key={item}
              className={selectedSize === item ? classes.selected : undefined}
              onClick={() => setSelectedSize(item)}
            >
              {item}cm
            </li>
          ))}
        {props.category === "clothes" &&
          size.map((item) => (
            <li
              key={item}
              className={selectedSize === item ? classes.selected : undefined}
              onClick={() => setSelectedSize(item)}
            >
              {item}
            </li>
          ))}
      </ul>
      <div className={classes.qty}>
        <h5>Qty: </h5>
        <input
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          type="number"
          min="1"
          max="9"
        />
      </div>
      {!cart.map((item) => item._id === _id).includes(true) ? (
        <a className={classes.addToCart} onClick={() => addToCartHandler()}>
          <h5>Add To Cart</h5>
          <BsCart3 className={classes.cartIcon} />
        </a>
      ) : (
        <h5>
          Item Added To Cart <Link href="/products"><a className={classes.continue}>Continue Shopping</a></Link>
        </h5>
      )}
    </div>
  );
}

export default ProductInfo;
