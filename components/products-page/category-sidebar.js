import classes from "./category-sidebar.module.css";

function CategorySideBar(props) {
  const { categories } = props;
  return (
    <ul className={classes.container}>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
}
export default CategorySideBar;
