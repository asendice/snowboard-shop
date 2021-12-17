import classes from "./search-bar.module.css";
import { BsSearch } from "react-icons/bs";
function SearchBar(props) {
  const { placeholder } = props;
  return (
    <div className={classes.container}>
      <input className={classes.input} placeholder={placeholder} />
      <BsSearch className={classes.icon} />
    </div>
  );
}

export default SearchBar;
