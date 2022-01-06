import { useEffect, useRef } from "react";
import classes from "./search-results.module.css";
import Link from "next/link";
import { BsX } from "react-icons/bs";

function SearchResults(props) {
  const { products, term, setActive } = props;
  const searchRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  function filterProducts() {
    return products.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  const searchedProducts = filterProducts();

  if (searchedProducts.length > 0) {
    return (
      <div ref={searchRef} className={classes.container}>
        <div className={classes.header}>
          <Link href="/products">
            <a>
              <h5>Products</h5>
            </a>
          </Link>
          <BsX onClick={() => setActive(false)} />
        </div>
        <ul className={classes.list}>
          {searchedProducts.slice(0, 4).map((item) => (
            <li>
              <div className={classes.imgContainer}>
                <img className={classes.img} src={item.images[0]} />
              </div>
              <h5>{item.title}</h5>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (searchedProducts.length === 0) {
    return (
      <div ref={searchRef} className={classes.container}>
        <h5>No Matching Results for "{term}"</h5>
      </div>
    );
  }
}

export default SearchResults;
