import classes from "./main-navigation.module.css";
import Link from "next/link";
import SearchBar from "../ui/search-bar";
import { BsCart3 } from "react-icons/bs";

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
        <BsCart3 className={classes.icon} />
      </div>
      <div className={classes.burger}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </div>
  );
}

export default MainNavigation;
