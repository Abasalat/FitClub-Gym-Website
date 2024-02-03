import React from "react";
import styles from "./Footer.module.css";
import Github from "..//assets/github.png";
import Instqgram from "../assets/instagram.png";
import LinkedIn from "..//assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <hr />
      <div className={styles.footer}>
        <duv className={styles.socialLink}>
          <img src={Github} />
          <img src={Instqgram} />
          <img src={LinkedIn} />
        </duv>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={styles.blurjustify}>
        <div className={styles.blurl}></div>
        <div className={styles.blurr}></div>
      </div>
    </div>
  );
};

export default Footer;
