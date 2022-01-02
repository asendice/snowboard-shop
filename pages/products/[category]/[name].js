import {
  getSnowboard,
  getFeaturedSnowboards,
  getClothingItem,
  getFeaturedClothing,
} from "../../../helpers/api-utils";
import ProductDetail from "../../../components/product/product-detail";
function ProductDetailPage(props) {
  return <ProductDetail product={props.product[0]} category={props.category} />;
}

export async function getStaticProps(context) {
  const category = context.params.category;
  const name = context.params.name;
  let product = [];

  if (category === "snowboards") {
    product = await getSnowboard(name);
  }
  if (category === "clothes") {
    product = await getClothingItem(name);
  }

  return {
    props: {
      product: product,
      category: category,
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
