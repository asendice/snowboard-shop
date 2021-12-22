import { useState } from "react";
import {
  BsFillCaretDownFill,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import classes from "./product-navigation.module.css";

function ProductNavigation(props) {
  const [itemActive, setItemActive] = useState(false);
  const [sortActive, setSortActive] = useState(false);

  const { pages, activePage, setActivePage, setItemsPerPage, itemsPerPage } = props;

  const itemsPer = [20, 30];
  const sortBy = [
    "Name: A-Z",
    "Name: Z-A",
    "Price: Low-High",
    "Price: High-Low",
  ];

  function genPages() {
    let arr = [];
    for (let i = 0; i < pages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }

  function leftClick() {
    if(activePage > 1){
      setActivePage((currentValue) => currentValue - 1);
    }
  }

  function rightClick() {
    if(activePage < pages) {
      setActivePage((currentValue) => currentValue + 1)
    }
  }


  return (
    <section className={classes.container}>
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
            <li key={num} onClick={() => setItemsPerPage(num)}>{num}</li>
          ))}
        </ul>
      </div>
      <div className={classes.per} onClick={() => setSortActive(!sortActive)}>
        <div className={classes.perHeader}>
          <p>Sort</p> <BsFillCaretDownFill />
        </div>
        <ul
          className={` ${classes.list} ${
            sortActive === true ? classes.active : classes.notActive
          }`}
        >
          {sortBy.map((sort) => (
            <li key={sort}>{sort}</li>
          ))}
        </ul>
      </div>
      <div className={classes.pages}>
        <a href="#" className={classes.pageIcon} onClick={() => setActivePage(1)}>
          <BsChevronDoubleLeft />
        </a>
        <a href="#" className={classes.pageIcon}  onClick={() => leftClick()}>
          <BsChevronLeft />
        </a>

        {genPages().map((num) => (
          <a key={num * 5} className={classes.pageNumber} onClick={() => setActivePage(num)} style={num === activePage ? {textDecoration: "underline"} : {}}>{num}</a>
        ))}

        <a href="#" className={classes.pageIcon} onClick={() => rightClick()}>
          <BsChevronRight />
        </a>
        <a href="#" className={classes.pageIcon} onClick={() => setActivePage(pages)}>
          <BsChevronDoubleRight />
        </a>
      </div>
    </section>
  );
}

export default ProductNavigation;
