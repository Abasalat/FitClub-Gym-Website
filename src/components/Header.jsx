import React from "react";
import Logo from "../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="" className={styles.logo} />
      <ul className={styles.headermenu}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
