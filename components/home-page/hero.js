import CtaButton from "../ui/cta-button";
import classes from "./hero.module.css";


function Hero() {
  return (
    <div className={classes.container}>
      <h1>Shred down the mountains with the best gear</h1>
        <CtaButton link={"/products"}> Shop The Best </CtaButton>
    </div>
  );
}

export default Hero;
