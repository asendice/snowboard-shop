import classes from "./groups.module.css";
import GroupItem from "./group-item";

function Groups(props) {
  const { groups } = props;

  return (
    <ul className={classes.container}>
      {groups.map((group) => (
        <GroupItem item={group} />
      ))}
    </ul>
  );
}

export default Groups;
