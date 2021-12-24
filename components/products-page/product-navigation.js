import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import Breadcrumb from "../ui/breadcrumb";
import PageNavigator from "./page-navigatior";
import classes from "./product-navigation.module.css";

function ProductNavigation(props) {
  const [itemActive, setItemActive] = useState(false);
  const [sortActive, setSortActive] = useState(false);

  const {
    pages,
    activePage,
    setActivePage,
    setItemsPerPage,
    itemsPerPage,
    sortedBy,
    setSortedBy,
  } = props;

  const itemsPer = [20, 30, 40];
  const sortBy = [
    "Name: A-Z",
    "Name: Z-A",
    "Price: Low-High",
    "Price: High-Low",
  ];

  return (
    <section className={classes.container}>
      <Breadcrumb />
      <div className={classes.per} onClick={() => setItemActive(!itemActive)}>
        <div className={classes.perHeader}>
          <p>Items Per Page: {itemsPerPage}</p> <BsFillCaretDownFill />
        </div>
        <ul
          className={`${classes.list} ${
            itemActive === true ? classes.active : classes.notActive
          }`}
        >
          {itemsPer.map((num) => (
            <li key={num} onClick={() => setItemsPerPage(num)}>
              {num}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.per} onClick={() => setSortActive(!sortActive)}>
        <div className={classes.perHeader}>
          <p>Sort: {sortedBy}</p> <BsFillCaretDownFill />
        </div>
        <ul
          className={` ${classes.list} ${
            sortActive === true ? classes.active : classes.notActive
          }`}
        >
          {sortBy.map((sort) => (
            <li key={sort} onClick={() => setSortedBy(sort)}>
              {sort}
            </li>
          ))}
        </ul>
      </div>
      <PageNavigator setActivePage={setActivePage} pages={pages} activePage={activePage} />
    </section>
  );
}

export default ProductNavigation;
