import React, { forwardRef, useRef } from "react";
import styles from "./Join.module.css";
//import emailjs from "@emailjs/browser";

const Join = () => {
  //   const form = useRef();
  //   const sendEmail = () => {
  //     e.preventDefault();
  //     emailjs.sendForm("service", "template", form.current, "id").then(
  //       (redult) => {
  //         console.log(redult.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   };

  return (
    <div className={styles.join} id="join-us">
      <div className={styles.left}>
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className={styles.right}>
        <form
          //  ref={form}
          action=""
          className={styles.emailContainer}
          // onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
          <button className={`btn ${styles.btnj}`}>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
