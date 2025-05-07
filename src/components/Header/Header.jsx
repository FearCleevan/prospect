import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/LP-logo.webp';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import GetQuote from '../modals/GetQoute'; // Import the modal component

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); // State for modal visibility
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return activePath === path || 
           (path === '#solutions' && (
             activePath.includes('/lead-generation') ||
             activePath.includes('/medical-billing') ||
             activePath.includes('/virtual-assistant') ||
             activePath.includes('/customer-service')
           ));
  };

  const isDropdownItemActive = (path) => {
    return activePath === path;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div className={styles.logoContainer}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.menu}>
              <li>
                <a 
                  href="/" 
                  className={`${styles.menuItem} ${isActive('/') ? styles.active : ''}`}
                >
                  Home
                </a>
              </li>
              <li 
                className={styles.dropdown}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <a 
                  href="#solutions" 
                  className={`${styles.menuItem} ${isActive('#solutions') ? styles.active : ''}`}
                >
                  Solutions <FaChevronDown className={styles.dropdownIcon} />
                </a>
                {isSolutionsOpen && (
                  <div className={styles.dropdownContent}>
                    <a 
                      href="/lead-generation"
                      className={isDropdownItemActive('/lead-generation') ? styles.activeDropdownItem : ''}
                    >
                      Lead Generation and Appointment Setting
                    </a>
                    <a 
                      href="/medical-billing"
                      className={isDropdownItemActive('/medical-billing') ? styles.activeDropdownItem : ''}
                    >
                      Medical Billing
                    </a>
                    <a 
                      href="/virtual-assistant"
                      className={isDropdownItemActive('/virtual-assistant') ? styles.activeDropdownItem : ''}
                    >
                      Virtual Assistant
                    </a>
                    <a 
                      href="/customer-service"
                      className={isDropdownItemActive('/customer-service') ? styles.activeDropdownItem : ''}
                    >
                      Customer Service
                    </a>
                  </div>
                )}
              </li>
              <li>
                <a 
                  href="/faqs" 
                  className={`${styles.menuItem} ${isActive('/faqs') ? styles.active : ''}`}
                >
                  FAQS
                </a>
              </li>
              <li>
                <a 
                  href="/careers" 
                  className={`${styles.menuItem} ${isActive('/careers') ? styles.active : ''}`}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className={`${styles.menuItem} ${isActive('/contact-us') ? styles.active : ''}`}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/our-company" 
                  className={`${styles.menuItem} ${isActive('/our-company') ? styles.active : ''}`}
                >
                  Our Company
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.quoteButton}>
            <button 
              className={styles.button}
              onClick={() => setShowQuoteModal(true)} // Open modal on click
            >
              Get A Quote
            </button>
          </div>
        </div>
      </header>

      {/* GetQuote Modal */}
      <GetQuote 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)}
      />
    </>
  );
}