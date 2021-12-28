import { Fragment } from "react";
import Products from "../../../components/products-page/products";
import { getAllSnowboards } from "../../../helpers/api-utils";

function ProductsPage(props) {
  const { products } = props;

  return (
    <Fragment>
      <Products products={products} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const category = context.params.category;
  let products = [];
  if (category === "snowboards") {
    products = await getAllSnowboards();
  }

  return {
    props: {
      products: products,
    },
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { category: "snowboards" } }];

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProductsPage;
