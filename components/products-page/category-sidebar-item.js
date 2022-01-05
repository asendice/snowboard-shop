import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import classes from "./category-sidebar-item.module.css";

function CategorySidebarItem(props) {
  const [active, setActive] = useState(false);
  const { category, options } = props.category;

  function sidebarItemHandler(option) {
    props.updateFilters({
      category: category,
      option: option,
    });
  }

  function filterOptionsForDuplicates() {
    const filterOptionsForUndefined = options.filter(
      (opt) => opt !== undefined
    );
    const optionsLowerCase = filterOptionsForUndefined.map((option) =>
      option.toLowerCase()
    );
    return optionsLowerCase.filter(
      (opt, index) => optionsLowerCase.indexOf(opt) === index
    );
  }

  function highlight(option) {
    return props.filters.filter((item) => {
      if (typeof item.option === "string") {
        return item.option === option;
      } else {
        return item.option.includes(option);
      }
    });
  }

  return (
    <li className={classes.container}>
      <h4 className={classes.header} onClick={() => setActive(!active)}>
        {category}
        {props.filters.map((filter) => filter.category === category ? <BsCircleFill className={classes.headerCircle}/> : "")}
      </h4>

      <ul
        className={`${classes.activeList} ${
          active === true ? classes.active : classes.nonActive
        }`}
      >
        {filterOptionsForDuplicates()
          .sort()
          .map((option) => {
            return (
              <li
                key={option}
                className={`${
                  highlight(option).length > 0 ? classes.filtered : ""
                }`}
                onClick={() => sidebarItemHandler(option)}
              >
                {option}
              </li>
            );
          })}
      </ul>
    </li>
  );
}

export default CategorySidebarItem;
