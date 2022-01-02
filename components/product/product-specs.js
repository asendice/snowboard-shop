import classes from "./product-specs.module.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

function ProductSpecs(props) {
  const filteredKeys = Object.keys(props.product).filter(
    (item) =>
      item !== "_id" &&
      item !== "size" &&
      item !== "featured" &&
      item !== "price" &&
      item !== "title" &&
      item !== "images"
  );
  const filteredValues = filteredKeys.map((key) => props.product[key]);

  return (
    <div className={classes.container}>
      <h3>
        {" "}
        <BsFillGrid3X3GapFill /> Specs{" "}
      </h3>
      <div className={classes.table}>
        <ul>
          {filteredKeys.map((type) => (
            <li className={classes.tableItem} key={type}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {filteredValues.map((type, index) => {
            const item = typeof type  === "string" ? type : type.join(', ');
            return (
              <li className={classes.tableItem} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductSpecs;
