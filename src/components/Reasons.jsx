import React from "react";
import styles from "./Reasons.module.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import np from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";
const Reasons = () => {
  return (
    <div className={styles.reasons} id="reasons">
      <div className={styles.left}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <div className={styles.right}>
        <div>some reasons</div>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>

        <div className={styles.details}>
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Exprt coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable partners</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className={styles.partners}>
          <img src={np} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
