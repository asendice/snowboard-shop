import { Fragment, useEffect, useState } from "react";
import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Notification from "../ui/notification";
import { useNotification } from "../../store/notifcation-context";
import { getAllProducts } from "../../helpers/api-utils";

function Layout(props) {
  const [products, setProducts] = useState([]);
  const notificationContext = useNotification();
  const notification = notificationContext.notification;
  async function getProducts() {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Fragment>
      <MainNavigation products={products} />
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
