import React from "react";
import styles from "./FifthContainer.module.css";

const FifthContainer = () => {
  const stats = [
    {
      percentage: "62%",
      description: "of B2B companies struggle with lead generation.",
      source: "Salesmate"
    },
    {
      percentage: "40%",
      description: "of marketers believe that biggest barrier to lead generation is lack of resources, budget and staffing.",
      source: "Marketing Sherpa"
    },
    {
      percentage: "65%",
      description: "of B2B brands lack a clear lead nurturing strategy and process.",
      source: "Salesmate"
    }
  ];

  return (
    <div className={styles.fifthContainer}>
      <div className={styles.cardsContainer}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`${styles.card} ${index === 1 ? styles.centerCard : ''}`}
          >
            <div className={styles.percentage}>{stat.percentage}</div>
            <p className={styles.description}>{stat.description}</p>
            <div className={styles.source}>{stat.source}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FifthContainer;