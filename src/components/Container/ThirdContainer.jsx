import React from "react";
import styles from "./ThirdContainer.module.css";
import backgroundImage from "../../assets/pngkey.com-world-map-png-169108.png";

const ThirdContainer = () => {
  return (
    <div className={styles.thirdContainer}>
      <div className={styles.thirdBackground}>
        <div 
          className={styles.imageOverlay}
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center'
          }}
        ></div>
        <div className={styles.content}>
          <h6 className={styles.title}>B2B LEAD GENERATION SOLUTION</h6>
          <h2 className={styles.subtitle}>Unlocking Your Sales Potential:</h2>
          <h2 className={styles.tagline}>
            Expert Lead Generation for Securing Lucrative B2B Deals
          </h2>
          <p className={styles.description}>
            Harnessing years of outbound lead generation expertise, leveraging
            proven marketing channels, and utilizing precise B2B data to
            generate qualified leads and secure sales appointments, enabling you
            to successfully seal deals with your most coveted accounts.
          </p>
          <div className={styles.divider}></div>
          <button className={styles.ctaButton}>Book a Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;