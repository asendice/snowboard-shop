import classes from "./header-item.module.css";

function HeaderItem(props) {
  const { item } = props;
  return (
    <li
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${item.image})`,
      }}
    >
      <span className={classes.title}>
        <p>{item.title}</p>
      </span>
    </li>
  );
}

export default HeaderItem;
