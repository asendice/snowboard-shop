import { Fragment, useEffect, useState } from "react";
import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Notification from "../ui/notification";
import { useNotification } from "../../store/notifcation-context";
import { getAllSnowboards, getAllClothes} from "../../helpers/api-utils";

function Layout(props) {
  const [boards, setBoards] = useState([]);
  const [clothes, setClothes] = useState([]);
  const notificationContext = useNotification();
  const notification = notificationContext.notification;
  async function getProducts() {
    const snowboards = await getAllSnowboards();
    const clothess = await getAllClothes();
    setBoards(snowboards);
    setClothes(clothess);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Fragment>
      <MainNavigation boards={boards} clothes={clothes} />
      {props.children}
      <Footer />
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
