import classes from "./cta-button.module.css";
import Link from "next/link";

function CtaButton(props) {
  console.log(props.link);
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return <a className={classes.btn}>{props.children}</a>;
}

export default CtaButton;
