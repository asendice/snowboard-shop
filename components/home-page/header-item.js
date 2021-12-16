import classes from "./header-item.module.css";

function HeaderItem(props) {
  const { item } = props;
  return (
    <li className={classes.container} style={{ backgroundImage: `url(${item.image})` }}>
      <span className={classes.title}>
        <p>{item.title}</p>
      </span>
    </li>
  );
}

export default HeaderItem;
