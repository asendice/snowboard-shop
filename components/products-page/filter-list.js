import { Fragment } from "react";
import classes from "./filter-list.module.css";
function FilterList(props) {
  const options = props.filters.map((item) => item.option).reverse();
  return (
    <Fragment>
      <ul className={classes.filters}>
        {options.map((item) => (
          <li key={item}>{`${item},`} </li>
        ))}
      </ul>
      <a className={classes.clear} onClick={() => props.setFilters([])}>clear</a>
    </Fragment>
  );
}

export default FilterList;
