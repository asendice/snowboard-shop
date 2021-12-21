import classes from "./category-sidebar.module.css";
import CategorySidebarItem from "./category-sidebar-item";

function CategorySidebar(props) {
  const { categories } = props;
  return (
    <ul className={classes.container}>
      {categories.map((category) => (
        <CategorySidebarItem key={category.category} category={category} />
      ))}
    </ul>
  );
}
export default CategorySidebar;
