import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CareersThird.module.css';
import tiffaImg from '../../assets/tiffa.png';
import ronaldImg from '../../assets/ronald.png';
import khimImg from '../../assets/khim.png';
import janCarlosImg from '../../assets/jan.png';

const testimonies = [
  {
    quote: `I have worked for the Launchpad for over 3 years now, and it has been an amazing journey so far. Starting as an agent and now serving as a trainer for our Insurance Account, I have had the opportunity to train over 100 cold callers, helping them develop.`,
    name: "Tiffa Cainglet",
    role: "Team Leader",
    img: tiffaImg,
  },
  {
    quote: `I've had the opportunity to collaborate with various companies, yet Launchpad stands out as the only one I truly consider my professional home.\n\nThe sense of being valued, appreciated, and fairly compensated sets Launchpad apart.`,
    name: "Ronald Junior Ronquillo",
    role: "Service Delivery Manager",
    img: ronaldImg,
  },
  {
    quote: `Working at The Launchpad for the past four years as a cold caller has been an incredible experience. At 52 years old, I have found a company culture that I truly love, emphasizing teamwork, respect, and personal growth.`,
    name: "Khim Poblacion",
    role: "Calling Agent",
    img: khimImg,
  },
  {
    quote: `Working for The Launchpad has been an incredible journey of growth and opportunity. I joined the company over a year ago as an agent, and thanks to the support and guidance provided by the management team, I have now advanced.`,
    name: "Jan Carlos Cruz",
    role: "Account Manager",
    img: janCarlosImg,
  },
];

const CareersThird = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerArea}>
        <span className={styles.testimoniesLabel}>TESTIMONIES</span>
        <h2 className={styles.title}>Join Our Team Today!</h2>
      </div>
      <div className={styles.carouselArea}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className={styles.swiper}
        >
          {testimonies.map((t, i) => (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <div className={styles.card}>
                <span className={styles.quoteMarkTop}>❝</span>
                <p className={styles.quote}>{t.quote}</p>
                <span className={styles.quoteMarkBottom}>❞</span>
                <div className={styles.profileArea}>
                  <img className={styles.profileImg} src={t.img} alt={t.name} />
                  <div>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination} />
      </div>
    </div>
  );
};

export default CareersThird;