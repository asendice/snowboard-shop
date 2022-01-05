import { Fragment } from "react";
import classes from "./filter-list.module.css";
function FilterList(props) {
  const options = props.filters.map((item) => item.option).reverse();
  return (
    <Fragment>
    <p>Filters:</p>
      <ul className={classes.filters}>
        {options.map((item) => (
          <li key={item}>{`${item},`} </li>
        ))}
        <a className={classes.clear} onClick={() => props.setFilters([])}>clear</a>
      </ul>
    </Fragment>
  );
}

export default FilterList;
