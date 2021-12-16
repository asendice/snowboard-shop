import { Fragment } from "react/cjs/react.production.min";
import MainNavigation from "./main-navigation";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout;