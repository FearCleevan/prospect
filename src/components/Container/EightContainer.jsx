import React from 'react';
import styles from './EightContainer.module.css';
import Slider from 'react-slick';
import LaptopIcon from '../../assets/Laptop.png';
import BillingIcon from '../../assets/Billing.png';
import AgentIcon from '../../assets/Agent.png';
import CalendarIcon from '../../assets/Calendar.png';

export default function EightContainer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "ease-in-out",
        arrows: false,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    };

    const cards = [
        {
            icon: LaptopIcon,
            title: "VIRTUAL ASSISTANT",
            desc: "A good assistant monitor even has more attractive support. An assistant eliminates most of these factors and allows, alleviating stress and making you more productive."
        },
        {
            icon: BillingIcon,
            title: "MEDICAL BILLING",
            desc: "We understand the complexities and nuances involved in medical billing processes, and our business is a critical step towards this latest industry standards and regulations."
        },
        {
            icon: AgentIcon,
            title: "CUSTOMER SERVICE",
            desc: "We specialize in providing tailored solutions that help consumers optimize their customer experience while delivering exceptional service quality."
        },
        {
            icon: CalendarIcon,
            title: "APPOINTMENT SETTING/ B2B LEAD GENERATION",
            desc: "The combination of calls, email and social media platform provides an ideal approach towards better contact ratio, more qualified leads and higher conversion rates."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <p className={styles.subtitle}>OTHER OUTSOURCING SERVICES</p>
                <h1 className={styles.title}>
                    UNLOCK YOUR<br />
                    BUSINESS POTENTIAL<br />
                    WITH THE LAUNCHPAD!
                </h1>
                <p className={styles.description}>
                    Work Smarter And Scale Your Business<br />
                    Using Our Flexible Outsourcing<br />
                    Solutions.
                </p>
            </div>

            <div className={styles.rightSection}>
                <Slider {...settings} className={styles.slider}>
                    {cards.map((card, idx) => (
                        <div key={idx} className={styles.slide}>
                            <div className={styles.card}>
                                <img src={card.icon} alt={card.title} className={styles.icon} />
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}