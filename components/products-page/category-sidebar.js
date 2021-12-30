import classes from "./category-sidebar.module.css";
import CategorySidebarItem from "./category-sidebar-item";
import FilterList from "./filter-list";
import { Fragment } from "react";

function CategorySidebar(props) {
  const { categories, updateFilters, filters, setFilters } = props;
  return (
    <Fragment>
    <ul className={classes.container}>
      {categories.map((category) => (
        <CategorySidebarItem
          key={category.category}
          category={category}
          updateFilters={updateFilters}
          filters={filters}
        />
      ))}
      <FilterList filters={filters} setFilters={setFilters} />
    </ul>
    
    </Fragment>
  );
}
export default CategorySidebar;
