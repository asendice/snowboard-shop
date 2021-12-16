import { Fragment } from "react/cjs/react.production.min";
import Hero from "../components/home-page/hero";
import Header from "../components/home-page/header";
import Featured from "../components/home-page/featured";
import { getFeaturedSnowboards } from "../helpers/api-utils";


function HomePage(props) {
  const { snowboards } = props;
  return (
    <Fragment> 
      <Hero />
      <Header />
      <Featured snowboards={snowboards} />
    </Fragment>
  )
}

export async function getStaticProps(){
  const featured = await getFeaturedSnowboards();
  return {
    props: {
      snowboards: featured
    }
  }
}

export default HomePage;