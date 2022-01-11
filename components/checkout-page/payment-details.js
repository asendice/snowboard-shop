import { useState } from "react";
import classes from "./payment-details.module.css";

function PaymentDetails() {
  const [sameAddress, setSameAddress] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [billingStreet, setBillingStreet] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [card, setCard] = useState("");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2022");
  const [code, setCode] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];
  const years = [
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2030",
  ];

  function handleOrder(e) {
    e.preventDefault();

    let order;

    if (sameAddress === false) {
      order = {
        name: fullName,
        email: email,
        street: street,
        state: state,
        zip: zip,
        bStreet: billingStreet,
        bState: billingState,
        bZip: billingZip,
        card: card,
        month: month,
        year: year,
        code: code,
      };
    }

    if (sameAddress === true) {
      order = {
        name: fullName,
        email: email,
        street: street,
        state: state,
        zip: zip,
        bStreet: street,
        bState: state,
        bZip: zip,
        card: card,
        month: month,
        year: year,
        code: code,
      };
    }
  }

  return (
    <form className={classes.container} onSubmit={(e) => handleOrder(e)}>
      <div className={classes.details}>
        <h5>Shipping details</h5>

        <div className={classes.control}>
          <label>First and Last Name</label>
          <input type="text" onChange={(e) => setFullName(e.target.value)} />
        </div>

        <div className={classes.control}>
          <label>Email Address</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className={classes.control}>
          <label>Street</label>
          <input type="text" onChange={(e) => setStreet(e.target.value)} />
        </div>

        <div>
          <div className={classes.control}>
            <label>State</label>
            <input type="text" onChange={(e) => setState(e.target.value)} />
          </div>

          <div className={classes.control}>
            <label>Zip Code</label>
            <input type="text" onChange={(e) => setZip(e.target.value)} />
          </div>
        </div>
      </div>
      <div className={classes.same}>
        <input type="checkbox" onClick={() => setSameAddress(!sameAddress)} />

        <label>Billing Address Same As Shipping Address ?</label>
      </div>
      {sameAddress === false && (
        <div className={classes.details}>
          <h5>Billing details</h5>

          <div className={classes.control}>
            <label>Street</label>
            <input
              type="text"
              onChange={(e) => setBillingStreet(e.target.value)}
            />
          </div>

          <div>
            <div className={classes.control}>
              <label>State</label>
              <input
                type="text"
                onChange={(e) => setBillingState(e.target.value)}
              />
            </div>

            <div className={classes.control}>
              <label>Zip Code</label>
              <input
                type="text"
                onChange={(e) => setBillingZip(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      <div className={classes.details}>
        <h5>Payment Details</h5>

        <div className={classes.control}>
          <label>Card Number</label>
          <input
            onChange={(e) => setCard(e.target.value)}
            type="setFullName(e.target.value)"
          />
        </div>

        <div className={classes.cardSubDetails}>
          <div className={classes.date}>
            <label>Expiration Date</label>

            <select onChange={(e) => setMonth(e.target.value)}>
              <option disabled>Month</option>
              {months.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select onChange={(e) => setYear(e.target.value)}>
              <option disabled>Year</option>
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className={classes.control}>
            <label>Security Code</label>
            <input type="password" onChange={(e) => setCode(e.target.value)} />
          </div>
        </div>
      </div>

      <button type="submit">Place Order</button>
    </form>
  );
}

export default PaymentDetails;
