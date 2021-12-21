import classes from "./product-item.module.css";

function ProductItem(props) {
  const { images, title, price, size } = props.product;
  return (
    <div className={classes.container}>
      <img src={images} />
      <h5>{title}</h5>
      <p>{price}</p>
      <ul>
        {size.map((item) => (
          <li>{item}cm</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductItem;
