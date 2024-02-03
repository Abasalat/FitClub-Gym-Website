import React from "react";
import styles from "./Programs.module.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className={styles.programs} id="programs">
      <div className={styles.programsheader}>
        <div className="stroke-text">Explore our</div>
        <div>Programs</div>
        <div className="stroke-text">to shape you</div>
      </div>
      <div className={styles.programcategories}>
        {programsData.map((program) => (
          <div className={styles.category}>
            {program.image}
            <div>{program.heading}</div>
            <div>{program.details}</div>
            <div className={styles.joinnow}>
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
