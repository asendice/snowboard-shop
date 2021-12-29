import { useState, useEffect } from "react";
import classes from "./main-navigation.module.css";
import Link from "next/link";
import SearchBar from "../ui/search-bar";
import ShoppingCartBtn from "../ui/shopping-cart-btn";

function MainNavigation() {

  return (
    <div className={classes.container}>
      <Link href="/">
        <a>
          <h1>Snowboard-Shop</h1>
        </a>
      </Link>
      <ul className={classes.nav}>
        <li>
          <Link href="/">Snowboarding</Link>
        </li>
        <li>
          <Link href="/">Womens</Link>
        </li>
        <li>
          <Link href="/">Mens</Link>
        </li>
        <li>
          <Link href="/">Accessories</Link>
        </li>
      </ul>
      <div className={classes.actions}>
        <SearchBar placeholder="Search Snowboard-Shop" />
      </div>
      <ShoppingCartBtn />
      <div className={classes.burger}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </div>
  );
}

export default MainNavigation;
