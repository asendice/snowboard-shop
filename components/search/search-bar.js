import classes from "./search-bar.module.css";
import { BsSearch } from "react-icons/bs";
function SearchBar(props) {
  const { placeholder, setTerm } = props;
  return (
    <div className={classes.container}>
      <input onChange={(e) => setTerm(e.target.value)} className={classes.input} placeholder={placeholder} />
      <BsSearch className={classes.icon} />
    </div>
  );
}

export default SearchBar;
