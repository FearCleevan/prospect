import React from "react";
import styles from './SixthContainer.module.css';
import Bulb from '../../assets/Bulb.png';
import Data from '../../assets/Data.png';
import Template from '../../assets/Template.png';
import Cadence from '../../assets/Cadence.png';
import Mic from '../../assets/Mic.png';
import CD from '../../assets/CD.png';

export default function SixthContainer() {
  const cardData = [
    { 
      title: 'Visualization', 
      description: 'Outline your preferred clientele',
      icon: Bulb 
    },
    { 
      title: 'Data Accuracy', 
      description: 'Create precised marketing lists for better conversion',
      icon: Data 
    },
    { 
      title: 'Bespoke Templates', 
      description: 'Craft custom scripts for amplified responses',
      icon: Template 
    },
    { 
      title: 'Cadence', 
      description: 'Proven trigger sequences that elevate prospect engagement',
      icon: Cadence 
    },
    { 
      title: 'Campaign Refinement', 
      description: 'Experimental tests on all strategies to fortify strong points',
      icon: Mic 
    },
    { 
      title: 'Data-Supported Approach', 
      description: 'Dynamic execution that provides an avenue to tap on uncharted markets',
      icon: CD 
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.headerContent}>
          <h6 className={styles.heading}>LAUNCHPAD FRAMEWORK</h6>
          <h2 className={styles.title}>Transforming Prospects Into<br />Profitable Opportunities!</h2>
        </div>
        <div className={styles.grid}>
          {cardData.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.icon} alt={card.title} className={styles.cardIcon} />
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}