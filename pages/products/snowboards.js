import { Fragment } from "react";
import Products from "../../components/products-page/products";
import { getAllSnowboards } from "../../helpers/api-utils";

function SnowboardsPage(props) {
  const { products } = props;

  return (
    <Fragment>
      <Products products={products} />
    </Fragment>
  )

}

export async function getStaticProps(){
  const snowboards = await getAllSnowboards();

  return {
    props: {
      products: snowboards
    }
  }
  
}

export default SnowboardsPage;