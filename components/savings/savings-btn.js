import classes from "./savings-btn.module.css";
import { useState, useEffect, Fragment } from "react";

function SavingsBtn() {
  const [ active, setActive ] = useState(false);
  const [ scrollY, setScrollY ] = useState(0);

  useEffect(() => {
    if (active === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let className = 'nonActive' ;
  if(scrollY > 150){
    className = 'active';
  }
  // if(scrollY < 150){
  //   className = 'nonActive';
  // }

  return (
    <Fragment>
    <a className={`${classes.container} ${classes[className]}`}>
      15% OFF!*
    </a>
    {active === true && <SavingModal />}
    </Fragment>
  )

}

export default SavingsBtn;