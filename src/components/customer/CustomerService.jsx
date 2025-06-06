import { useState, useRef, useEffect } from 'react';
import styles from './CustomerService.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo1 from "../../assets/CustomerLogo.webp";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import CustomerServiceFirst from './CustomerServiceFirst';
import CustomerServiceSecond from './CustomerServiceSecond';
import CustomerServiceThird from './CustomerServiceThird';
import CustomerServiceFourth from './CustomerServiceFourth';

export default function CustomerService() {
    const [showScrollArrow, setShowScrollArrow] = useState(false);
    const homeRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollArrow(true);
            } else {
                setShowScrollArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.page} ref={homeRef}>
            <div className={styles.heroBackground}>
                <Header />
                <div className={styles.mainContainer}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.subtitle}>B2B LEAD GENERATION AND APPOINTMENT SETTING</h2>
                        <h1 className={styles.title}>
                            Step into The Launchpad Your Reliable Ally for Outsourcing Customer Service Operations
                        </h1>
                        <button className={styles.ctaButton}>
                            BOOK A CONSULTATION
                        </button>
                    </div>

                    <div className={styles.rightColumn}>
                        <img src={conversionGif} alt="Conversion Rate" className={styles.conversionGif} />
                        <img src={profitGif} alt="Profit Growth" className={styles.profitGif} />
                        <img src={emailGif} alt="Email Marketing" className={styles.emailGif} />
                        <img src={logo1} alt="Launchpad" className={styles.mainLogo} />
                    </div>
                </div>
            </div>
            {/* You can add additional sections/components here similar to Home page */}
            <CustomerServiceFirst/>
            <CustomerServiceSecond />
            <CustomerServiceThird />
            <CustomerServiceFourth />
            <Footer />

            {/* Scroll to top arrow */}
            {showScrollArrow && (
                <div className={styles.scrollToTop} onClick={scrollToTop}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </div>
            )}
        </div>
    );
}