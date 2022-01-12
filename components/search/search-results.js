import { useEffect, useRef } from "react";
import classes from "./search-results.module.css";
import Link from "next/link";
import { BsX } from "react-icons/bs";

function SearchResults(props) {
  const { boards, clothes, term, setActive } = props;
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

  function filterProducts(items) {
    return items.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  const searchedBoards = filterProducts(boards);
  const searchedClothes = filterProducts(clothes);

  if (searchedBoards.length > 0 || searchedClothes.length > 0) {
    return (
      <div ref={searchRef} className={classes.container}>
        <BsX className={classes.closeIcon} onClick={() => setActive(false)} />
        {searchedBoards.length > 0 && (
          <>
            <div className={classes.header}>
              <Link href="/products/snowboards">
                <a>
                  <h5>Snowboards</h5>
                </a>
              </Link>
            </div>
            <ul className={classes.list}>
              {searchedBoards.slice(0, 4).map((item) => (
                <li>
                  <Link href={`/products/snowboards/${item.title}`}>
                    <a>
                      <div className={classes.imgContainer}>
                        <img className={classes.img} src={item.images[0]} />
                      </div>
                      <h5>{item.title}</h5>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {searchedClothes.length > 0 && (
          <>
            <div className={classes.header}>
              <Link href="/products/clothes">
                <a>
                  <h5>Clothes</h5>
                </a>
              </Link>
            </div>
            <ul className={classes.list}>
              {searchedClothes.slice(0, 4).map((item) => (
                <li>
                  <Link href={`/products/clothes/${item.title}`}>
                    <a>
                      <div className={classes.imgContainer}>
                        <img className={classes.img} src={item.images[0]} />
                      </div>
                      <h5>{item.title}</h5>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
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
