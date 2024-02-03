import React from "react";
import styles from "./Plans.module.css";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className={styles.plancontainer}>
      <div className={`blur ${styles.plansblur1}`}></div>
      <div className={`blur ${styles.plansblur2}`}></div>
      <div className={styles.planheader}>
        <div className="stroke-text">READY TO START</div>
        <div>YOUR JOURNEY</div>
        <div className="stroke-text">NOW WITHUS</div>
      </div>

      <div className={styles.plans}>
        {plansData.map((plan, i) => (
          <div className={styles.plan}>
            {plan.icon}
            <div>{plan.name}</div>
            <div>$ {plan.price}</div>

            <div className={styles.features}>
              {plan.features.map((feature, i) => (
                <div className={styles.feature}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits-></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
