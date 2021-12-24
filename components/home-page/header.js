import classes from "./header.module.css";
import Groups from "../ui/groups";

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
      <Groups groups={DUMMY_DATA} />
    </div>
  );
}

export default Header;
