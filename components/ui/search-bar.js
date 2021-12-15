import classes from "./search-bar.module.css";
import { BsSearch } from "react-icons/bs";
function SearchBar() {
  return (
    <div className={classes.container}>
      <input />
      <BsSearch className={classes.icon} />
    </div>
  );
}

export default SearchBar;
