import { getSnowboard, getFeaturedSnowboards } from "../../../helpers/api-utils/getSnowboard";
function ProductDetailPage () {
  return (
    <div>

    </div>
  )
}

export async function getStaticProps(context){
  const name = context.params.name;
  const product = getSnowboard(name);

  return {
    props: {
      product: product,
    }
  }
}

export async function getStaticPaths(){
  const products = getFeaturedSnowboards();
  const paths = products.map((prod) => ({
    params: { name: prod.title },
  })),
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export default ProductDetailPage;