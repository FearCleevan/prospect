import React from 'react';
import styles from './VirtualFourthContainer.module.css';
import scalabilityImage from '../../assets/Scalability1.png';
import expertiseImage from '../../assets/Expertise1.png';
import lowCostImage from '../../assets/LowPriceLogo1.png';
import americaImage from '../../assets/America1.png';
import graphImg from '../../assets/Remake.png';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// --- Data for cards ---
const cardData = [
  {
    title: "Scalability",
    icon: scalabilityImage,
    text:
      "As your business grows, so do the number of administrative tasks an assistant need to perform. Outsourcing to The Launchpad Team gives you the agility to scale the responsibilities of your virtual assistant up or down.",
  },
  {
    title: "Dedication & Professionalism",
    icon: expertiseImage,
    text:
      "Our virtual assistants undergo rigorous training. Possessing superb communication and organizational skills, their support has proven invaluable to our clients.",
  },
  {
    title: "Low Cost",
    icon: lowCostImage,
    text:
      "Even if you have enough work for a full-time assistant, outsourcing this function to The Launchpad Team is a more affordable option.",
  },
  {
    title: "No Geographical\nLimitations",
    icon: americaImage,
    text:
      "Outsourcing the function of an assistant removes language and time zone barriers. If your suppliers or clients are based in a different time zone, finding an in-house assistant to perform relevant tasks is a challenge. The Launchpad Team is the answer.",
  },
];

export default function VirtualFourthContainer() {
  return (
    <div className={styles.fourthContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>What You Can Outsource To A Virtual Assistant</h2>
        <img
          src={graphImg}
          alt="Outsource Graph"
          className={styles.graphImg}
          width={779}
          height={405}
        />
      </div>
      <div className={styles.rightSection}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className={styles.swiper}
        >
          {cardData.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <img
                  src={card.icon}
                  alt={card.title.replace('\n', ' ')}
                  className={styles.cardIcon}
                  width={100}
                  height={100}
                />
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* Dots will be rendered below the card by Swiper's pagination */}
        </Swiper>
      </div>
    </div>
  );
}