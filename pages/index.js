import { Fragment } from "react/cjs/react.production.min";
import Hero from "../components/home-page/hero";
import Header from "../components/home-page/header";
import Featured from "../components/home-page/featured";


function HomePage() {
  return (
    <Fragment> 
      <Hero />
      <Header />
      <Featured />
    </Fragment>
  )
}

export default HomePage;