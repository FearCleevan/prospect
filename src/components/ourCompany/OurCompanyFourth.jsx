import React from "react";
import styles from "./OurCompanyFourth.module.css";
import ManagementImg from "../../assets/Management.webp";
import InspiredImg from "../../assets/Inspired.webp";
import CpuImg from "../../assets/Cpu.webp";

const OurCompanyFourth = () => {
  const cards = [
    {
      title: "Operational Expertise",
      image: ManagementImg,
      description: "More than 40 years of combined progressive track record in reliable and guaranteed customer relations management, project implementation and quality performance. Dynamic Workforce – We deliver a high-value, strategically aligned workforce anywhere, anytime, with rapid ramp-up.",
      color: "#c0375a"
    },
    {
      title: "Smart Management",
      image: InspiredImg,
      description: "Our Management Team shares their best practices and delivery methods in order to successfully develop core competencies of people, technology, and process at anytime and anywhere around the world",
      color: "#cb4a5e"
    },
    {
      title: "Superior Technology",
      image: CpuImg,
      description: "At our call center, we take pride in our exceptional infrastructure for top-quality customer service. Our state-of-the-art facilities optimize efficiency and the customer experience. A key strength is our 400-seat capacity. This ensures we handle high call volumes and meet client demands, no matter the scale or complexity.",
      color: "#d65d61"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={styles.card}
            style={{ backgroundColor: card.color }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={card.image} 
                alt={card.title} 
                className={styles.cardImage}
              />
            </div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <div className={styles.underline}></div>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompanyFourth;