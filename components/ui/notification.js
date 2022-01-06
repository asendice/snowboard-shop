import classes from "./notification.module.css";
import { useNotification } from "../../store/notifcation-context";

function Notification(props){
  const notification = useNotification();
  const { title, message, status } = props;
  return(
    <div className={classes.container}>
      <h4>{title}</h4>
      <h4>{message}</h4>
      <a onClick={notification.hideNotification}>Close</a>
      <a>View Cart</a>
    </div>
  )
}

export default Notification;