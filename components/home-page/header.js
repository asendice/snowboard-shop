import classes from "./header.module.css";
import HeaderItem from "./header-item";

const DUMMY_DATA = [
  {
    title: "Snowboards",
    image: "/images/snowboard-header.webp",
  },
  {
    title: "Clothing",
    image: "/images/clothing-header.jpeg",
  },
  {
    title: "Accessories",
    image: "/images/accessories-header.jpg",
  },
];

function Header() {
  return (
    <div className={classes.container}>
      <h2>Newest Arrivals For The Winter Season</h2>
      <ul className={classes.list}>
        {DUMMY_DATA.map((item) => (
          <HeaderItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Header;
