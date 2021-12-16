import { useState } from "react";
import classes from "./product-slider.module.css";
import Product from "./product";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

function ProductSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { items } = props;

  function onRightClick() {
    if(activeIndex < items.length - 4)
    setActiveIndex((prev) => prev + 1);
  }
  function onLeftClick() {
    if (activeIndex >= 1) {
      setActiveIndex((prev) => prev - 1);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <BsCaretLeft className={classes.icon} onClick={() => onLeftClick()} />
      </div>
      <ul style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
      <div className={classes.iconContainer}>
        <BsCaretRight className={classes.icon} onClick={() => onRightClick()} />
      </div>
    </div>
  );
}

export default ProductSlider;
