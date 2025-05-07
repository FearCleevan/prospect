import React from 'react';
import styles from './NinthContainer.module.css';
import Slider from 'react-slick';
import Group1 from '../../assets/Group1.png';
import Group2 from '../../assets/Group2.png';
import Group3 from '../../assets/Group3.png';
import Group4 from '../../assets/Group4.png';
import Group5 from '../../assets/Group5.png';
import Group6 from '../../assets/Group6.png';
import Group7 from '../../assets/Group7.png';
import Group8 from '../../assets/Group8.png';
import Group9 from '../../assets/Group9.png';

export default function NinthContainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const reviews = [
    { image: Group1 },
    { image: Group2 },
    { image: Group3 },
    { image: Group4 },
    { image: Group5 },
    { image: Group6 },
    { image: Group7 },
    { image: Group8 },
    { image: Group9 }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>MORE REVIEWS FROM OUR CLIENTS</h2>
        <div className={styles.sliderContainer}>
          <Slider {...settings} className={styles.slider}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.slide}>
                <img 
                  src={review.image} 
                  alt={`Client Review ${index + 1}`} 
                  className={styles.reviewImage}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}