import React from 'react';
import styles from './CareersFirst.module.css';
import careersImg from '../../assets/careers.webp';

const CareersFirst = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img
          src={careersImg}
          alt="Careers"
          width={447.39}
          height={391.7}
          className={styles.image}
        />
      </div>
      <div className={styles.rightSection}>
        <h2 className={styles.heading}>
          Elevate Your Career With Us
          <span className={styles.underline} />
        </h2>
        <span className={styles.paragraph}>
          We provide job opportunities that will help you level up your career. Providing you time and effort to develop your skills and knowledge. Your skillset is what we value most and every effort that you make counts.
        </span>
        <span className={styles.paragraph}>
          In line with our company's team-base approach, we practice proper team collaboration helping you to capitalize your strengths, improve your weaknesses and help you make the most out of your career.
        </span>
        <span className={styles.paragraph}>
          As our business expands, more opportunity awaits and we'll make sure to provide you with continuous learnings that will guide you towards these opportunities. Join and work with our passionate team that supports your fresh and unique ideas. Realizes your very own and true potential with us today!
        </span>
      </div>
    </div>
  );
};

export default CareersFirst;