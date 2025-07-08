import { useState, useRef, useEffect } from 'react';
import styles from './ReferralProgram.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReferralProgramFirst from './ReferralProgramFirst';
import ReferralProgramSecond from './ReferralProgramSecond';
import ReferralProgramThird from './ReferralProgramThird';
import { Helmet } from 'react-helmet';

export default function ReferralProgram() {
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
                <title>Referral Program - Top Outsourcing Firm in the Philippines</title>
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <div className={styles.heroBackground}>
                <Header />

                <div className={styles.mainContainer}>
                    <div className={styles.centerContent}>
                        <h1 className={styles.title}>THE LAUNCHPAD REFERRAL PROGRAM</h1>
                    </div>
                </div>
            </div>
            <ReferralProgramFirst />
            <ReferralProgramSecond />
            <ReferralProgramThird />
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