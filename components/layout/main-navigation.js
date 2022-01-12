import { useState, useEffect } from "react";
import classes from "./main-navigation.module.css";
import Link from "next/link";
import SearchBar from "../search/search-bar";
import SearchResults from "../search/search-results";
import ShoppingCartBtn from "../ui/shopping-cart-btn";

function MainNavigation(props) {
  const [term, setTerm] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(term.length > 0){
      setActive(true);
    }
    if(term.length === 0){
      setActive(false)
    }
  },[term]) 

  const { boards, clothes } = props;
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
        <SearchBar setTerm={setTerm} term={term} placeholder="Search Snowboard-Shop" />
        {active === true && <SearchResults boards={boards} clothes={clothes} term={term} setActive={setActive} />}
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
