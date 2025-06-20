import React from "react";
import styles from "./LeadGenFifth.module.css";

const LeadGenFifth = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Request a Custom Quote Tailored to Your Own Lead Generation Program
      </h2>
      <div className={styles.buttonRow}>
        <button className={styles.ctaButton}>
          <span className={styles.ctaText}>REQUEST A CUSTOM QUOTE</span>
        </button>
      </div>
    </div>
  );
};

export default LeadGenFifth;