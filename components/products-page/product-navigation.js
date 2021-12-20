import classes from "./product-navigation.module.css";

function ProductNavigation() {
  return (
    <section className={classes.container}>
      <div classNmae={classes.per}>
        <p>Items Per Page: </p>
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
      <div classNmae={classes.per}>
        <p>Sort:</p>
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </div>
    </section>
  );
}

export default ProductNavigation;
