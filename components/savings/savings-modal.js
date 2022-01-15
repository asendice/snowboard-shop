import classes from "./savings-modal.module.css";
import { BsX } from "react-icons/bs";

function SavingsModal() {
  return (
    <div className={classes.container}>
      <div
        style={{
          backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url("/images/225779.jpg")`,
        }}
        className={classes.content}
      > <div className={classes.clsBtn}><BsX /></div>
        <h4>Gear Up!</h4>
        <h3>GET 15%! OFF*</h3>
        <p className={classes.subText}>your first order when you sign up!</p>
        <input className={classes.input} placeholder="ENTER EMAIL ADDRESS" />
        <a className={classes.btn}>ACTIVATE OFFER</a>
        <a className={classes.cancel}>No Thank You</a>
        <p className={classes.finePrint}>Offer valid for new subscribers only. *Some exclusions may apply</p>
      </div>
    </div>
  );
}

export default SavingsModal;
