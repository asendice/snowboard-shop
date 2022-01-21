import { useRef, useEffect, useState } from "react";
import classes from "./savings-modal.module.css";
import { BsX } from "react-icons/bs";
import { postEmail } from "../../helpers/api-utils";
import { useSave } from "../../store/save-context";
import { useNotification } from "../../store/notification-context";

function SavingsModal(props) {
  const [inputError, setInputError] = useState("");
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

  function emailValidation() {
    const email = emailRef.current.value;
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.length === 0 || regex.test(email) === false) {
      setInputError("Invalid Email");
    } else {
      activateOfferHandler(email);
    }
  }

  function activateOfferHandler(text) {
    setInputError("");
    postEmail(text).then((response) => {
      if (response.status === 200) {
        props.setActive(false);
        save.updateEmail(response.email.email);
        notification.showNotification({
          title: `${response.email.email}`,
          message: `Accepted! 15% automatically added at checkout`,
          status: "success",
        });
      }
      if (response.status !== 200) {
        notification.showNotification({
          title: `FAILED: `,
          message: `${response.error}`,
          status: "failed",
        });
      }
    });
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
        <div className={classes.clsBtn} onClick={() => props.setActive(false)}>
          <BsX />
        </div>
        <h4>Gear Up!</h4>
        <h3>GET 15%! OFF*</h3>
        <p className={classes.subText}>your first order when you sign up!</p>
        <div>
          <input
            ref={emailRef}
            className={classes.input}
            placeholder="ENTER EMAIL ADDRESS"
          />
          {inputError.length > 0 && (
            <p className={classes.error}>{inputError}*</p>
          )}
        </div>
        <a className={classes.btn} onClick={() => emailValidation()}>
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
