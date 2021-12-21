import classes from "./header-item.module.css";

function HeaderItem(props) {
  const { item } = props;
  return (
    <li
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(${item.image})`,
      }}
    >
      <div className={classes.title}>
        <p>{item.title}</p>
      </div>
    </li>
  );
}

export default HeaderItem;
