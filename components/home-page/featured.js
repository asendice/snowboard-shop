import classes from "./featured.module.css";
import ProductSlider from "./product-slider";

function Featured(props) {
  const { snowboards, clothing } = props;
  return (
    <div className={classes.container}>
      <h2>Featured</h2>
      <h3>Snowboards</h3>
      <ProductSlider items={snowboards} category={'snowboards'}/>
      <h3>Clothes</h3>
      <ProductSlider items={clothing} category={'clothes'} />
    </div>
  )
}

export default Featured;