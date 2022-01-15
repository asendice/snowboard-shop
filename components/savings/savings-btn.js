import { useState, useEffect, Fragment } from "react";
import SavingsModal from "./savings-modal";
import classes from "./savings-btn.module.css";

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
    <a  onClick={() => setActive(true)} className={`${classes.container} ${classes[className]}`}>
      15% OFF!*
    </a>
    {active === true && <SavingsModal />}
    </Fragment>
  )

}

export default SavingsBtn;