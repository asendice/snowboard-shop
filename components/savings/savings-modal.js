import { useRef, useEffect } from "react";
import classes from "./savings-modal.module.css";
import { BsX } from "react-icons/bs";
import { postEmail } from "../../helpers/api-utils";
import { useSave } from "../../store/save-context";
import { useNotification } from "../../store/notification-context";

function SavingsModal(props) {
  const modalRef = useRef();
  const emailRef = useRef();

  const save = useSave();
  const notification = useNotification();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        props.setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  function activateOfferHandler() {
    const email = emailRef.current.value;
    if (email.length > 0) {
      postEmail(emailRef.current.value)
      .then((response) => {
        if(response){
          return response;
        }
        else {
          throw error;
        }
      })
      .then((email) => {
        console.log(email)
        props.setActive(false);
        save.updateEmail(email.email.email)
        notification.showNotification({
          title: `${email.email.email}`,
          message: `Accepted! 15% automatically added at checkout`,
          status: 'success'
        })
      })
      // return;
    }
  }

  return (
    <div className={classes.container}>
      <div
        ref={modalRef}
        style={{
          backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url("/images/225779.jpg")`,
        }}
        className={classes.content}
      >
        {" "}
        <div className={classes.clsBtn} onClick={() => props.setActive(false)}>
          <BsX />
        </div>
        <h4>Gear Up!</h4>
        <h3>GET 15%! OFF*</h3>
        <p className={classes.subText}>your first order when you sign up!</p>
        <input
          ref={emailRef}
          className={classes.input}
          placeholder="ENTER EMAIL ADDRESS"
        />
        <a className={classes.btn} onClick={() => activateOfferHandler()}>
          ACTIVATE OFFER
        </a>
        <a className={classes.cancel} onClick={() => props.setActive(false)}>
          No Thank You
        </a>
        <p className={classes.finePrint}>
          Offer valid for new subscribers only. *Some exclusions may apply
        </p>
      </div>
    </div>
  );
}

export default SavingsModal;
