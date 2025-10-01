import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./OurCompanyThird.module.css";

const OurCompanyThird = () => {
  const stats = [
    { value: "98%", label: "Employees Retention" },
    { value: "173", label: "Employees" },
    { value: "110", label: "Clients served from across globe" },
    { value: "70%", label: "Cost Savings" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>Our Flight Path</h2>
            <p className={styles.description}>
              From Hybrid Lead Generation to Sales Virtual Assistants, The Launchpad did not only grow in headcount but with the number of satisfied clients. Our expertise for different verticals has flourished too making us one diversified and flexible BPO. To present, our company is operational to acquire voice inbound and outbound projects and fulfill its corporate goal - to be the company for the people and to be the benchmark of providing jobs in the outsourcing industry.
            </p>
          </div>
          <div className={styles.rightSection}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              //   el: `.${styles.pagination}`,
              // }}
              className={styles.swiper}
            >
              {stats.map((stat, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.statCard}>
                    <span className={styles.value}>{stat.value}</span>
                    <div className={styles.underline}></div>
                    <span className={styles.label}>{stat.label}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.pagination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompanyThird;