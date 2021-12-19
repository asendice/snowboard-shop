import classes from "./featured.module.css";
import ProductSlider from "./product-slider";

const DUMMY_DATA = [
  {
    id: "01",
    title: "Snowboard Rosi",
    img: "/images/test-featured.jpeg",
    price: 499.99,
  },
  {
    id: "02",
    title: "Burton Snowboard",
    img: "/images/snowboard-header.webp",
    price: 499.99,
  },
  {
    id: "03",
    title: "Snowboard Rosi",
    img: "/images/test-featured.jpeg",
    price: 499.99,
  },
  {
    id: "04",
    title: "Snowboard Rosi",
    img: "/images/test-featured.jpeg",
    price: 499.99,
  },
  {
    id: "05",
    title: "Snowboard Rosi",
    img: "/images/test-featured.jpeg",
    price: 499.99,
  },
  {
    id: "06",
    title: "Snowboard Rosi",
    img: "/images/test-featured.jpeg",
    price: 499.99,
  },
]

function Featured(props) {
  const { snowboards } = props;
  return (
    <div className={classes.container}>
      <h2>Featured</h2>
      <h3>Snowboards</h3>
      <ProductSlider items={snowboards} />
      <h3>Clothes</h3>
      <ProductSlider items={DUMMY_DATA} />
    </div>
  )
}

export default Featured;