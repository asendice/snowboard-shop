import classes from "./product-image.module.css";

function ProductImage(props) {
  const { img } = props;
  return (
    <div className={classes.container}>
      <img className={classes.image} src={img} />
    </div>
  );
}

export default ProductImage;
