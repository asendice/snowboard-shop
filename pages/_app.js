import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { CartProvider } from "../store/cart-context";
import { NotificationProvider } from "../store/notifcation-context";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <NotificationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationProvider>
    </CartProvider>
  );
}

export default MyApp;
