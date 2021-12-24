import classes from "./group-item.module.css";
import { useRouter } from "next/router";

function GroupItem(props) {
  const { item } = props;

  const router = useRouter();

  function onGroupClick(sub) {
    router.push(`/products/${sub.toLowerCase()}`);
  }
  return (
    <li
      onClick={() => onGroupClick(item.title)}
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

export default GroupItem;
