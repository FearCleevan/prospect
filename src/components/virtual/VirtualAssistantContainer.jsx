import { useState, useRef, useEffect } from 'react';
import styles from './VirtualAssistantContainer.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo1 from "../../assets/virtual-assistant.webp";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";
import VirtualSecondContainer from './VirtualSecondContainer';
import VirtualThirdContainer from './VirtualThirdContainer';


export default function VirtualAssistantContainer() {
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
                        <h1 className={styles.title}>
                            Unlock Your Potential with a Supportive Assistant: Relieve Stress and Boost Productivity
                        </h1>
                        <p className={styles.description}>
                            A great assistant offers more than admin help, they reduce work stress and boost productivity. The Launchpad Team connects you with skilled assistants experienced in various tasks, freeing you to focus on your priorities and fueling business growth.
                        </p>
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
            
            <VirtualSecondContainer />
            <VirtualThirdContainer />
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