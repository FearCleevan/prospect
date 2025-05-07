import styles from "./Footer.module.css";
import logos from "../../assets/LP-logo.webp";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Company Info with Logo and Socials */}
        <div className={styles.footerSection}>
          <Link to="/">
            <img src={logos} alt="Launchpad Logo" className={styles.footerLogo} />
          </Link>
          <p className={styles.companyDescription}>
            Founded in 2017, The Launchpad is an innovative organization with a
            leadership team boasting over 40 years of combined experience.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>What we do</h3>
          <ul className={styles.footerList}>
            <li><Link to="/lead-generation" className={styles.footerLink}>Appointment Setting</Link></li>
            <li><Link to="/lead-generation" className={styles.footerLink}>B2B Lead Generation</Link></li>
            <li><Link to="/medical-billing" className={styles.footerLink}>Medical Billing</Link></li>
            <li><Link to="/customer-service" className={styles.footerLink}>Customer Service</Link></li>
            <li><Link to="/virtual-assistant" className={styles.footerLink}>Virtual Assistance</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Company</h3>
          <ul className={styles.footerList}>
            <li><Link to="/our-company" className={styles.footerLink}>About The Launchpad Inc</Link></li>
            <li><Link to="/referral-program" className={styles.footerLink}>Referral Program</Link></li>
            <li><Link to="/careers" className={styles.footerLink}>Careers</Link></li>
            <li><Link to="/faqs" className={styles.footerLink}>FAQs</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Resources</h3>
          <ul className={styles.footerList}>
            <li><Link to="/cost-of-diy" className={styles.footerLink}>The Cost of DIY Lead Gen</Link></li>
            <li><Link to="/company-profile" className={styles.footerLink}>Company Profile</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        {/* Headquarters */}
        <div className={styles.footerSection}>
          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <ul className={styles.footerList}>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+1 919 546 2014</span>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>sales@frelaunchpadteam.com</span>
              </li>
            </ul>
          </div>

          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>USA HQ</h3>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <span>
                1500 Colleen Avenue STE 1200
                <br />
                Sheridan, Wyoming (2200)
              </span>
            </div>
          </div>

          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>PHILIPPINES HQ</h3>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <span>
                Southern Tourist Inn, 423 Villa
                <br />
                Airline St, Poblacion District, Davao City
                <br />
                8000 Davao del Sur
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} The Launchpad Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}