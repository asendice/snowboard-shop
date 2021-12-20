import { Fragment } from "react";
import Products from "../../components/products-page/products";
import { getAllSnowboards } from "../../helpers/api-utils";

function ProductsPage(props) {
  const { products } = props;

  return (
    <Fragment>
      <Products products={products} />
    </Fragment>
  )

}

export async function getStaticProps(){
  const snowboards = await getAllSnowboards();
  //will probably also call getAllClothes and getAllAccessories and mergin them here for products props
  return {
    props: {
      products: snowboards
    }
  }
  
}

export default ProductsPage;