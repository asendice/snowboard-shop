import { useEffect, useState } from "react";
import classes from "./featured.module.css";
import ProductSlider from "./product-slider";
import SavingsModal from "../savings/savings-modal";

function Featured(props) {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState(false);
  const [times, setTimes] = useState(0);

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
  useEffect(() => {
    if (scrollY >= 1400 && times === 0) {
      setActive(true);
      setTimes(1);
    }
  }, [scrollY]);

  

  const { snowboards, clothing } = props;
  return (
    <div className={classes.container}>
      <h2>Featured</h2>
      <h3>Snowboards</h3>
      <ProductSlider items={snowboards} category={"snowboards"} />
      <h3>Clothes</h3>
      <ProductSlider items={clothing} category={"clothes"} />
      {active === true && (
        <SavingsModal setActive={setActive} active={active} />
      )}
    </div>
  );
}

export default Featured;
