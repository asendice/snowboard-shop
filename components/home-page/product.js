import classes from "./product.module.css";

function Product(props) {
  const { title, img, price, id } = props.item;
  return (
    <div className={classes.container}>
      <img src={img} alt={title}/>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  )
}

export default Product; 