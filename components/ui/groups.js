import classes from "./groups.module.css";
import GroupItem from "./group-item";
import { useRouter } from "next/router";

function Groups(props) {
  const { groups } = props;

  // const router = useRouter();

  // function onGroupClick(sub) {
  //   router.push(`/products/${sub.toLowerCase()}`);
  // }

  return (
    <ul className={classes.container}>
      {groups.map((group) => (
        <GroupItem item={group}/>
      ))}
    </ul>
  );
}

export default Groups;
