import { useState, useRef, useEffect } from 'react';
import styles from './LeadGen.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeadGenFirst from './LeadGenFirst';
import LeadGenSecond from './LeadGenSecond';
import LeadGenThird from './LeadGenThird';
import LeadGenFourth from './LeadGenFourth';
import LeadGenFifth from './LeadGenFifth';
import { Helmet } from 'react-helmet'; 


export default function LeadGen() {
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
                <title>Cost of DIY Lead Gen - Top Outsourcing Firm in the Philippines</title>
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <div className={styles.heroBackground}>
                <Header />
                <div className={styles.mainContainer}>
                    <div className={styles.centerContent}>
                        <h1 className={styles.title}>The Cost of Operating an In-House Lead Generation Program</h1>
                        <p className={styles.subtitle}>
                            Discover the typical expenses with established and operating a fully managed, cross-channel lead generation program independently.
                        </p>
                        <a
                            href="https://forms.gle/Ss3ESA5UMCYnCvYR6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.applyButton}
                        >
                            <span className={styles.applyText}>Request a Custom Quote</span>
                        </a>

                    </div>
                </div>
            </div>
            <LeadGenFirst />
            <LeadGenSecond />
            <LeadGenThird />
            <LeadGenFourth />
            <LeadGenFifth />
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