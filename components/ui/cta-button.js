import classes from "./cta-button.module.css";

function CtaButton(props) {
  return(
    <a className={classes.btn}>{props.children}</a>
  )
}

export default CtaButton;