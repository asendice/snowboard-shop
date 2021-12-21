import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import classes from "./product-navigation.module.css";

function ProductNavigation() {
  const [itemActive, setItemActive] = useState(false);
  const [sortActive, setSortActive] = useState(false);

  const itemsPerPage = [10, 20, 30];
  const sortBy = [
    "Name: A-Z",
    "Name: Z-A",
    "Price: Low-High",
    "Price: High-Low",
  ];

  return (
    <section className={classes.container}>
      <div className={classes.per} onClick={() => setItemActive(!itemActive)}>
        <div className={classes.perHeader}>
          <p>Items Per Page</p> <BsFillCaretDownFill />
        </div>
        <ul className={`${classes.list} ${itemActive === true ? classes.active : classes.notActive}`}>
          {itemsPerPage.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
      <div className={classes.per} onClick={() => setSortActive(!sortActive)}>
        <div className={classes.perHeader}>
          <p>Sort</p> <BsFillCaretDownFill />
        </div>
        <ul className={` ${classes.list} ${sortActive === true ? classes.active : classes.notActive}`}>
          {sortBy.map((sort) => (
            <li key={sort}>{sort}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductNavigation;
