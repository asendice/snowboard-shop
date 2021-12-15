import { Fragment } from "react/cjs/react.production.min";
import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}

    </Fragment>
  )
}

export default Layout;