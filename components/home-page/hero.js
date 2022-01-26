import CtaButton from "../ui/cta-button";
import classes from "./hero.module.css";

function Hero() {
  return (
    <div className={classes.container}>
      <h1>Shred down the mountains with the best gear</h1>
      <div className={classes.btn}>
        <CtaButton link={"/products"}> Shop The Best </CtaButton>
      </div>
    </div>
  );
}

export default Hero;
