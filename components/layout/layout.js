import { Fragment, useEffect, useState } from "react";
import MainNavigation from "./main-navigation";
import Footer from "./footer";
import { getAllProducts } from "../../helpers/api-utils";

function Layout(props) {
  const [products, setProducts] = useState([]);
 
  async function getProducts(){
    const allProducts = await getAllProducts();
    setProducts(allProducts)
  }
  useEffect(() => {
    getProducts()

  },[])
  return (
    <Fragment>
      <MainNavigation products={products} />
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout;