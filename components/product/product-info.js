import { useRef, useState } from "react";
import classes from "./product-info.module.css";
import { BsCart3 } from "react-icons/bs";
import { useCart, useCartUpdate } from "../../store/cart-context";
function ProductInfo(props) {
  const { title, price, size, images, _id } = props.product;
  const [selectedSize, setSelectedSize] = useState(size[0]);
  const quantityRef = useRef("1");
  const cart = useCart();
  const updateCart = useCartUpdate();

  function addToCartHandler() {
    const enteredQuantity = quantityRef.current.value;

    const product = {
      _id: _id,
      title: title,
      price: price,
      size: selectedSize,
      images: images,
      qty: enteredQuantity,
    };

    updateCart("add", product);
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.price}>
        <h3>${price}</h3>
      </div>
      <h5>Select a size: </h5>
      <ul className={classes.size}>
        {props.category === "snowboards" &&
          size.map((item) => <li onClick={() => setSelectedSize(item)} key={item}>{item}cm</li>)}
        {props.category === "clothes" &&
          size.map((item) => <li onClick={() => setSelectedSize(item)} key={item}>{item}</li>)}
      </ul>
      <div className={classes.qty}>
        <h5>Qty: </h5>
        <input ref={quantityRef} type="number" min="1" max="9" />
      </div>
      <a className={classes.addToCart} onClick={() => addToCartHandler()}>
        <h5>Add To Cart</h5>
        <BsCart3 className={classes.cartIcon} />
      </a>
    </div>
  );
}

export default ProductInfo;
