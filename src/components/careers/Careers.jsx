import { useState, useRef, useEffect } from 'react';
import styles from './Careers.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CareersFirst from './CareersFirst';
import CareersSecond from './CareersSecond';
import CareersThird from './CareersThird';
import { Helmet } from 'react-helmet';    

export default function Careers() {
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
            <Helmet>
                <title>Careers - Top Outsourcing Firm in the Philippines</title>
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <div className={styles.heroBackground}>
                <Header />
                <div className={styles.mainContainer}>
                    <div className={styles.centerContent}>
                        <h1 className={styles.title}>Start Your Success Story and Grow With Us</h1>
                        <p className={styles.subtitle}>
                            Be part of our story and help us shape an industry. Check out our open positions to start your career with The Launchpad.
                        </p>
                        <a
                            href="https://forms.gle/Ss3ESA5UMCYnCvYR6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.applyButton}
                        >
                            <span className={styles.applyText}>Apply Now</span>
                        </a>

                    </div>
                </div>
            </div>
            <CareersFirst />
            <CareersSecond />
            <CareersThird />
            <Footer />
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