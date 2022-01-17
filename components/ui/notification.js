import classes from "./notification.module.css";
import { useNotification } from "../../store/notification-context";

function Notification(props) {
  const notification = useNotification();
  const { title, message, status } = props;
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h5>"{title}"</h5>
        <h5 className={classes.message}>{message}</h5>
      </div>

      <div className={classes.actions}>
        <a onClick={notification.hideNotification}>Close</a>
      </div>
    </div>
  );
}

export default Notification;
