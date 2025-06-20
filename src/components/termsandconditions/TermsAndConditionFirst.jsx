import React from "react";
import styles from "./TermsAndConditionFirst.module.css";

const TermsAndConditionFirst = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.mainTitle}>Terms and Conditions</h2>
        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>I. Definition of Terms</h3>
          <p className={styles.sectionText}>
            By participating in The Launchpad Referral Program, you confirm that each referral you provide is eligible for this program and that you agree to the terms and conditions outlined here.
          </p>
          <p className={styles.sectionText}>
            As used in these Terms and Conditions:
          </p>
          <ul className={styles.definitionList}>
            <li><span className={styles.bold}>"You," "referrer," or "referring party"</span> refers to the individual or entity making the referral (or any individual or entity acting on your behalf).</li>
            <li><span className={styles.bold}>"Referral," "referred candidate," or "candidate"</span> refers to the individual or entity being referred.</li>
            <li><span className={styles.bold}>"We," "us," or "The Launchpad"</span> refers to The Launchpad Inc.</li>
            <li><span className={styles.bold}>"Launchpad representative"</span> refers to a Sales Director, Client Success Manager, or Business Development Manager from The Launchpad.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>II. Referral Mechanics</h3>
          <ul className={styles.conditionList}>
            <li>
              <span className={styles.bold}>Referral Eligibility:</span> You may refer an unlimited number of candidates, provided they meet The Launchpad's eligibility criteria.
            </li>
            <li>
              <span className={styles.bold}>Referral Introduction:</span> Referrals must be made explicitly via email, LinkedIn, or WhatsApp, where both the Launchpad representative and the referred candidate are included in the communication.
            </li>
            <li>
              <span className={styles.bold}>New Referral Requirement:</span> The referred candidate must not have previously been added to The Launchpad CRM, received a proposal, or been a client of The Launchpad.
            </li>
            <li>
              <span className={styles.bold}>Referral Credit:</span> You will receive credit for a referral only if it is successfully qualified. A referral is considered qualified when:
              <ul className={styles.subList}>
                <li>The candidate has completed an initial meeting with a Launchpad representative and is deemed valid.</li>
                <li>The candidate has received a complete service presentation from a Launchpad representative.</li>
                <li>The candidate agrees to receive a proposal document from The Launchpad.</li>
              </ul>
            </li>
            <li>
              <span className={styles.bold}>Multiple Referrals:</span> If the same candidate is referred by multiple parties, credit will be given to the first referral.
            </li>
            <li>
              <span className={styles.bold}>Invalid Referrals:</span> Referrals where the referring party and the referred candidate are the same individual or entity (person or company) will be deemed invalid.
            </li>
            <li>
              <span className={styles.bold}>Referral Contact:</span> A Launchpad representative will reach out to the referred candidate via phone or email within five business days using the contact information you provided.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>III. Commission Mechanics</h3>
          <ul className={styles.conditionList}>
            <li>
              The Launchpad will pay you a commission for each referred candidate who signs up (i.e., agrees to engage The Launchpad's services).
            </li>
            <li>
              Commission payments will be made for each confirmed payment made by the referral.
            </li>
            <li>
              <span className={styles.bold}>Commission Calculation:</span> Commissions will be calculated as follows:
              <ul className={styles.subList}>
                <li>10% of the contract amount if paid in cash (e.g., via PayPal or wire transfer).</li>
                <li>Commissions will be paid in your local currency.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.cta}>
          Refer a professional. Launch your journey today.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionFirst;