import classes from "./product.module.css";

function Product(props) {
  const { title, images, price, id } = props.item;
  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <a className={classes.btn}> More Info </a>
      </div>
      <img src={images} alt={title}/>
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  )
}

export default Product; 