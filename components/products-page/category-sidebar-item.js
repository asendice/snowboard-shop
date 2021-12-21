import { useState } from "react";
import classes from "./category-sidebar-item.module.css";

function CategorySidebarItem(props) {
  const [active, setActive] = useState(false);
  const { category, options } = props.category;

  return (
    <li className={classes.container}>
      <h4 className={classes.header} onClick={() => setActive(!active)}>
        {category}
      </h4>

      <ul className={`${classes.activeList} ${active === true ? classes.active : classes.nonActive}`}>
        {options.sort().map((option) => (
          <li key={option} className={ `${props.filters.includes(option) ? classes.filtered : "" }`}  onClick={() => props.updateFilters(option)}>
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CategorySidebarItem;
