import classes from "./notfound.module.css";
import { BsFilter } from "react-icons/bs";

function NotFound(props) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <BsFilter />
      </div>
      <h3>No Results Found</h3>
      <a onClick={() => props.setFilters([])} className={classes.clearBtn}>
        Clear Filters
      </a>
    </div>
  );
}

export default NotFound;
