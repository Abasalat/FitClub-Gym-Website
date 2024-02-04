import React from "react";
import styles from "./Hero.module.css";
import Header from "./Header";
import hero_image from "..//assets/hero_image.png";
import hero_image_back from "..//assets/hero_image_back.png";
import heart from "..//assets/heart.png";
import calories from "..//assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

export default function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className={styles.hero} id="hero">
      <div className={`blur ${styles.heroblur}`}></div>
      <div className={styles.left}>
        <Header />
        <div className={styles.bestad}>
          <motion.div
            initial={{ left: mobile ? "170px" : "238px " }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best friend club in the town</span>
        </div>

        <div className={styles.herotext}>
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className={styles.figures}>
          <div>
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={978}
                start={900}
                delay="5"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={50}
                start={0}
                delay="3"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>fitness Programs</span>
          </div>
          <div></div>
        </div>

        <div className={styles.herobuttons}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className={styles.right}>
        <button className="btn"> Join Now</button>

        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className={styles.heartrate}
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className={styles.heroimage} />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "24rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className={styles.heroimageback}
        />
        <motion.div
          initial={{ right: "40rem" }}
          whileInView={{ right: "32rem" }}
          transition={transition}
          className={styles.calories}
        >
          <img src={calories} alt="" />
          <div>
            <div>Calories Burned</div>
            <div>220 kcal</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
