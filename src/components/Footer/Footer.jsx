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
            <a
              href="https://www.facebook.com/thelaunchpadteam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/company/launchpadteam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@the.launchpad.fam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://x.com/CareersLaunchp1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/inc.thelaunchpad?fbclid=IwY2xjawLLl0FleHRuA2FlbQIxMABicmlkETFMdDNEZjZPWEJiTnhqS0Z2AR7gwx4ChntErGc-5m6DVE3xJasgGN7oblUCWBvqxEJNRR7B4CtFoJxfKbpN0Q_aem_7JYMzpHhyiJycs7PPbk7Ng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
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
            <li><Link to="/cost-of-diy-lead-gen" className={styles.footerLink}>The Cost of DIY Lead Gen</Link></li>
            <li>
              <a
                href="https://leadgeneration.thelaunchpadteam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Company Profile
              </a>
            </li>
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
                <a href="tel:+19786937878" className={styles.contactLink}>
                  +1 978 693 7878
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=sales@thelaunchpadteam.com&tf=cm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  sales@thelaunchpadteam.com
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>USA HQ</h3>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <a
                href="https://www.google.com/maps/place/1309+Coffeen+Ave+STE+1200,+Sheridan,+WY+82801,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                1309 Coffeen Avenue STE 1200
                <br />
                Sheridan, Wyoming 82801
              </a>
            </div>
          </div>

          <div className={styles.headquarters}>
            <h3 className={styles.footerHeading}>PHILIPPINES HQ</h3>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <a
                href="https://www.google.com/maps/place/Southern+Tourist+Inn+Supply/@7.0747759,125.6124979,17z/data=!3m1!4b1!4m6!3m5!1s0x32f96d98d296ab7f:0x489fc084d6e8bfe0!8m2!3d7.0747706!4d125.6150782!16s%2Fg%2F1vtqsm17?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.addressLink}
              >
                Southern Tourist Inn, 423 Villa
                <br />
                Abrille St, Poblacion District, Davao City,
                <br />
                8000 Davao del Sur
              </a>
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