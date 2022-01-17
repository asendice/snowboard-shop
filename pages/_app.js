import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { CartProvider } from "../store/cart-context";
import { NotificationProvider } from "../store/notification-context";
import { SaveProvider } from "../store/save-context";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <SaveProvider>
        <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </CartProvider>
      </SaveProvider>
    </NotificationProvider>
  );
}

export default MyApp;
