import styles from './Header.module.css';
import { useState } from 'react';
import logo from '../../assets/LP-logo.webp';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Mobile Menu Button - Only visible on tablets/mobile */}
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
            <li><a href="/" className={styles.menuItem}>Home</a></li>
            <li 
              className={styles.dropdown}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <a href="#solutions" className={styles.menuItem}>
                Solutions <FaChevronDown className={styles.dropdownIcon} />
              </a>
              {isSolutionsOpen && (
                <div className={styles.dropdownContent}>
                  <a href="/lead-generation">Lead Generation and Appointment Setting</a>
                  <a href="/medical-billing">Medical Billing</a>
                  <a href="/virtual-assistant">Virtual Assistant</a>
                  <a href="/customer-service">Customer Service</a>
                </div>
              )}
            </li>
            <li><a href="/faqs" className={styles.menuItem}>FAQS</a></li>
            <li><a href="/careers" className={styles.menuItem}>Careers</a></li>
            <li><a href="/contact-us" className={styles.menuItem}>Contact Us</a></li>
            <li><a href="/our-company" className={styles.menuItem}>Our Company</a></li>
          </ul>
        </nav>

        <div className={styles.quoteButton}>
          <button className={styles.button}>Get A Quote</button>
        </div>
      </div>
    </header>
  );
}