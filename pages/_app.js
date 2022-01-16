import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { CartProvider } from "../store/cart-context";
import { NotificationProvider } from "../store/notifcation-context";
import { SaveProvider } from "../store/save-context";

function MyApp({ Component, pageProps }) {
  return (
    <SaveProvider>
      <CartProvider>
        <NotificationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationProvider>
      </CartProvider>
    </SaveProvider>
  );
}

export default MyApp;
