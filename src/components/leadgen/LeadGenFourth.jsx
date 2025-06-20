import React from "react";
import styles from "./LeadGenFourth.module.css";

const LeadGenFourth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutSection}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          The Launchpad Inc. is dedicated to empowering businesses through innovative solutions and exceptional service. With over 40 years of combined experiences, we specialize in helping clients grow by providing reliable, scalable strategies that align with their goals and market needs.
        </p>
      </div>
      <div className={styles.cardsSection}>
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <div className={styles.iconHolder}>
              {/* Star Icon */}
              <svg viewBox="0 0 40 40" width="120" height="120">
                <circle cx="20" cy="20" r="18" fill="#f7f7fb" />
                <path d="M20 11l2.62 5.93 6.38.55-4.82 4.29 1.48 6.23L20 24.02l-5.66 4.02 1.48-6.23-4.82-4.29 6.38-.55z" fill="#db6563"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Over 40 Years of Expertise</div>
            <div className={styles.cardText}>
              With a solid, progressive track record in customer relations management, project implementation, and quality assurance, we deliver reliable and guaranteed results.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconHolder}>
              {/* Globe Icon */}
              <svg viewBox="0 0 40 40" width="120" height="120">
                <circle cx="20" cy="20" r="18" fill="#f7f7fb" />
                <path d="M20 10c5.52 0 10 4.48 10 10s-4.48 10-10 10S10 25.52 10 20 14.48 10 20 10zm0 2.5A7.5 7.5 0 1 0 27.5 20c0-4.14-3.36-7.5-7.5-7.5zm-2.6 7.5c0-1.44.52-2.76 1.37-3.79A6.02 6.02 0 0 0 14 20c0 1.11.3 2.16.81 3.05.6-.81 1.54-1.33 2.59-1.33z" fill="#db6563"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Dynamic Global Workforce</div>
            <div className={styles.cardText}>
              We provide a strategically aligned workforce, ready to scale up anytime, anywhere, ensuring rapid and effective service delivery.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconHolder}>
              {/* Leader/Person Icon */}
              <svg viewBox="0 0 40 40" width="120" height="120">
                <circle cx="20" cy="20" r="18" fill="#f7f7fb" />
                <circle cx="20" cy="16" r="6" fill="#e1e1e1"/>
                <rect x="13" y="25" width="14" height="6" rx="3" fill="#e1e1e1"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Leadership &amp; Best Practices</div>
            <div className={styles.cardText}>
              Our experienced management team shares industry-leading practices and methods to develop core competencies in people, technology, and processes—worldwide.
            </div>
          </div>
        </div>
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <div className={styles.iconHolder}>
              {/* Building Icon */}
              <svg viewBox="0 0 40 40" width="120" height="120">
                <circle cx="20" cy="20" r="18" fill="#f7f7fb" />
                <rect x="15" y="15" width="10" height="14" rx="2" fill="#db6563"/>
                <rect x="19" y="21" width="2" height="8" fill="#fff"/>
                <rect x="17" y="17" width="2" height="2" fill="#fff"/>
                <rect x="21" y="17" width="2" height="2" fill="#fff"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>Advanced Infrastructure</div>
            <div className={styles.cardText}>
              At our call center, we leverage cutting-edge facilities designed to optimize efficiency and enhance the customer experience.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.iconHolder}>
              {/* Chair Icon */}
              <svg viewBox="0 0 40 40" width="120" height="120">
                <circle cx="20" cy="20" r="18" fill="#f7f7fb" />
                <rect x="15" y="19" width="10" height="6" rx="2" fill="#db6563"/>
                <rect x="18" y="25" width="2" height="5" fill="#db6563"/>
                <rect x="20" y="25" width="2" height="5" fill="#db6563"/>
                <rect x="17" y="15" width="6" height="4" rx="2" fill="#db6563"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>400-Seat Capacity</div>
            <div className={styles.cardText}>
              With our impressive 400-seat capacity, we can handle high call volumes and address complex client needs with seamless efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenFourth;