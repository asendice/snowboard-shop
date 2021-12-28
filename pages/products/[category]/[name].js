import {
  getSnowboard,
  getFeaturedSnowboards,
} from "../../../helpers/api-utils";
import ProductDetail from "../../../components/product/product-detail";
function ProductDetailPage(props) {
  return (
    <ProductDetail product={props.product[0]} />
  )
}

export async function getStaticProps(context) {
  const name = context.params.name;
  const product = await getSnowboard(name);

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const products = await getFeaturedSnowboards();
  const paths = await products.map((prod) => ({
    params: { name: prod.title, category: "snowboards" },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProductDetailPage;
