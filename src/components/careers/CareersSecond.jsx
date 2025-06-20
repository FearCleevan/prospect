import React from 'react';
import styles from './CareersSecond.module.css';
import holisticIcon from '../../assets/holistic.png';
import learningIcon from '../../assets/learning.png';
import engagementIcon from '../../assets/engagement.png';
import referralIcon from '../../assets/referral.png';
import financialIcon from '../../assets/financial.png';

const cards = [
  {
    icon: holisticIcon,
    text: 'Holistic Employee Experience',
  },
  {
    icon: learningIcon,
    text: 'Learning & Development',
  },
  {
    icon: engagementIcon,
    text: 'Engagement Activities',
  },
  {
    icon: referralIcon,
    text: 'Paid Referral Program',
  },
  {
    icon: financialIcon,
    text: 'Financial Solutions',
  },
];

const CareersSecond = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSection}>
          <h2 className={styles.heading}>
            We make sure you have what you need from day one.
          </h2>
          <div className={styles.underline}></div>
          <p className={styles.paragraph}>
            We invest in our employees' well-being by providing top-tier benefits that are competitive within our industry and that support employee total wellness.
          </p>
          <p className={styles.paragraph}>
            We believe in providing the best package that aligns with our employees' priorities.
          </p>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.cardGrid}>
            <div className={styles.cardRow}>
              {cards.slice(0, 2).map((card, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <img src={card.icon} alt="" className={styles.icon} />
                  </div>
                  <h6 className={styles.cardTitle}>{card.text}</h6>
                </div>
              ))}
            </div>
            <div className={styles.cardRow}>
              {cards.slice(2).map((card, index) => (
                <div key={index + 2} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <img src={card.icon} alt="" className={styles.icon} />
                  </div>
                  <h6 className={styles.cardTitle}>{card.text}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersSecond;