import { Fragment } from "react/cjs/react.production.min";
import Hero from "../components/home-page/hero";
import Header from "../components/home-page/header";


function HomePage() {
  return (
    <Fragment> 
      <Hero />
      <Header />
    </Fragment>
  )
}

export default HomePage;