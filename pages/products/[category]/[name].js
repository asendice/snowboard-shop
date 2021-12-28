import {
  getSnowboard,
  getFeaturedSnowboards,
} from "../../../helpers/api-utils";
function ProductDetailPage(props) {
  return <div>asdas</div>;
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
