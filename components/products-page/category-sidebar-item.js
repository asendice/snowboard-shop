import { useState } from "react";
import classes from "./category-sidebar-item.module.css";

function CategorySidebarItem(props) {
  const [active, setActive] = useState(false);
  const { category, options } = props.category;

  function sidebarItemHandler(option) {
    props.updateFilters({
      category: category,
      option: option
    })
  }

  const filterOptionsForUndefined = options.filter((opt) => opt !== undefined);
  const optionsLowerCase = filterOptionsForUndefined.map((option) => option.toLowerCase())

  const filterOptionsForDup = optionsLowerCase.filter((opt, index) => {
    return optionsLowerCase.indexOf(opt) === index;
  });

  return (
    <li className={classes.container}>
      <h4 className={classes.header} onClick={() => setActive(!active)}>
        {category}
      </h4>

      <ul className={`${classes.activeList} ${active === true ? classes.active : classes.nonActive}`}>
        {filterOptionsForDup.sort().map((option) => (
          <li key={option} className={ `${props.filters.filter(item => item.option.includes(option)).length > 0 ? classes.filtered : "" }`}  onClick={() => sidebarItemHandler(option)}>
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CategorySidebarItem;
