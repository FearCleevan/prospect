import React from "react";
import styles from "./LeadGenThird.module.css";

const LeadGenThird = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.statement}>
          While it's clear that lead generation is effective, whether handled in-house or externally, the outcomes will depend on the tools and strategies employed. The Launchpad presents an ideal framework for an effective lead generation system, combining expert teams and professional-grade tools at a significantly lower price.
        </p>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.priceContent}>
          <h4 className={styles.priceTitle}>OVERALL COST TO RUN YOUR OWN LEAD GENERATION PROGRAM?</h4>
          <div className={styles.priceWrapper}>
            <h2 className={styles.price}>$ 20,954</h2>
            <h5 className={styles.monthly}>/ Monthly</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenThird;