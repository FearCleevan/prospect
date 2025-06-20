import React from "react";
import styles from "./ReferralProgramThird.module.css";

const ReferralProgramThird = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Introduce Launchpad to a friend today and<br />start reaping your rewards!
      </h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Details</h2>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="First Name" />
              <input className={styles.input} type="text" placeholder="Last Name" />
            </div>
            <div className={styles.row}>
              <input className={styles.inputFull} type="email" placeholder="Work Email" />
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Tell us about your friend</h2>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="First Name" />
              <input className={styles.input} type="text" placeholder="Last Name" />
            </div>
            <div className={styles.row}>
              <input className={styles.input} type="email" placeholder="Work Email" />
              <input className={styles.input} type="text" placeholder="Phone +1" />
            </div>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="Company" />
              <input className={styles.input} type="text" placeholder="Website" />
            </div>
            <div className={styles.row}>
              <input className={styles.inputFull} type="text" placeholder="Note" />
            </div>
          </section>
          <div className={styles.actions}>
            <button className={styles.submitBtn} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralProgramThird;