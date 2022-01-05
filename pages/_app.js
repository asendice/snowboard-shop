import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { CartProvider } from "../store/cart-context";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
