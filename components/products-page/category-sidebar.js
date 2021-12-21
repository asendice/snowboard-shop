import classes from "./category-sidebar.module.css";
import CategorySidebarItem from "./category-sidebar-item";

function CategorySidebar(props) {
  const { categories, updateFilters, filters } = props;
  return (
    <ul className={classes.container}>
      {categories.map((category) => (
        <CategorySidebarItem
          key={category.category}
          category={category}
          updateFilters={updateFilters}
          filters={filters}
        />
      ))}
    </ul>
  );
}
export default CategorySidebar;
