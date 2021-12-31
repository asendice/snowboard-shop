import { Fragment } from "react/cjs/react.production.min";
import Hero from "../components/home-page/hero";
import Header from "../components/home-page/header";
import Featured from "../components/home-page/featured";
import { getFeaturedClothing, getFeaturedSnowboards } from "../helpers/api-utils";


function HomePage(props) {
  const { snowboards, clothing} = props;
  return (
    <Fragment> 
      <Hero />
      <Header />
      <Featured snowboards={snowboards} clothing={clothing} />
    </Fragment>
  )
}

export async function getStaticProps(){
  const snowboards = await getFeaturedSnowboards();
  const clothing = await getFeaturedClothing();
  return {
    props: {
      snowboards: snowboards,
      clothing: clothing,
    }
  }
}

export default HomePage;