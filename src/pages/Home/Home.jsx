import { useState, useRef, useEffect } from 'react';
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SecondContainer from '../../components/Container/SecondContainer';
import ThirdContainer from '../../components/Container/ThirdContainer';
import FourthContainer from '../../components/Container/FourthContainer';
import FifthContainer from '../../components/Container/FifthContainer';
import SixthContainer from '../../components/Container/SixthContainer';
import SeventhContainer from '../../components/Container/SeventhContainer';
import EightContainer from '../../components/Container/EightContainer';
import NinthContainer from '../../components/Container/NinthContainer';
import GetQuote from '../../components/modals/GetQoute';
import logo1 from "../../assets/Logo-1.webp";
import conversionGif from "../../assets/ConversionRate3DAnimatedIcon-ezgif.com-crop.gif";
import profitGif from "../../assets/Profit-3D-Animated-Icon.gif";
import emailGif from "../../assets/Email-Marketing-3D-Animated-Icon-1.gif";


export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); 
  const dropdownRef = useRef(null);
  const homeRef = useRef(null);

  const options = [
    'I need more Clients',
    'I need more Leads',
    'I need more Sales',
    'All of the Above'
  ];

  const handleSelect = (option) => {
    if (option !== 'Please Select') {
      setSelectedOption(option);
    }
    setIsDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.home} ref={homeRef}>
      <div className={styles.heroBackground}>
        <Header />
          <div className={styles.mainContainer}>
            <div className={styles.leftColumn}>
              <h2 className={styles.subtitle}>YOUR SUCCESS, OUR MISSION.</h2>
              <h1 className={styles.title}>
                Supercharge your
                <br />
                sales funnel with the
                <br />
                <span className={styles.highlight}>Launchpad</span>
              </h1>
              <p className={styles.description}>
                We help businesses optimize pipeline generation with our Turn-key
                outbound team.
              </p>
              <div className={styles.combinedContainer} ref={dropdownRef}>
                <div 
                  className={styles.combinedSelect} 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className={styles.selectDisplay}>
                    {selectedOption || 'Please Select'}
                    <span className={styles.dropdownArrow}>▼</span>
                  </div>
                  {isDropdownOpen && (
                    <div className={styles.dropdownOptions}>
                      <div 
                        className={`${styles.dropdownOption} ${styles.disabledOption}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect('Please Select');
                        }}
                      >
                        Please Select
                      </div>
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className={styles.dropdownOption}
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button 
                  className={styles.combinedButton}
                  onClick={() => setShowQuoteModal(true)}
                >
                  GET A QUOTE
                </button>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <img src={conversionGif} alt="Conversion Rate" className={styles.conversionGif} />
              <img src={profitGif} alt="Profit Growth" className={styles.profitGif} />
              <img src={emailGif} alt="Email Marketing" className={styles.emailGif} />
              <img src={logo1} alt="Launchpad" className={styles.mainLogo} />
            </div>
          </div>
      </div>
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer /> 
      <SixthContainer />
      <SeventhContainer />
      <EightContainer />
      <NinthContainer />
      <Footer />

      <GetQuote 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
      />

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
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
      )}
    </div>
  );
}