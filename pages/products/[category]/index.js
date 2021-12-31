import { Fragment } from "react";
import Products from "../../../components/products-page/products";
import { getAllSnowboards, getAllClothes } from "../../../helpers/api-utils";

function ProductsPage(props) {
  const { products, category } = props;

  return (
    <Fragment>
      <Products products={products} category={category}/>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const category = context.params.category;
  let products = [];
  if (category === "snowboards") {
    products = await getAllSnowboards();
  }
  if (category === "clothes") {
    products = await getAllClothes();
  }

  return {
    props: {
      products: products,
      category: category
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
