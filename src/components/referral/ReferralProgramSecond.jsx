import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import styles from './ReferralProgramSecond.module.css';
import OurCompanyImage from '../../assets/Refer2.webp';

export default function ReferralProgramSecond() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleTermsClick = () => {
        navigate('/terms-and-conditions'); // Navigate to terms page
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                {/* Left Section - Image */}
                <div className={styles.leftSection}>
                    <img
                        src={OurCompanyImage}
                        alt="Our Company"
                        className={styles.companyImage}
                    />
                </div>

                {/* Right Section - Content */}
                <div className={styles.rightSection}>
                    <h2 className={styles.sectionTitle}>Get up to 10% Commission!</h2>
                    <p className={styles.sectionContent}>
                        For every one of your referrals that signs up
                        with Launchpad, you're getting a commission of
                        up to 10% of the contract amount.
                    </p>
                    <button 
                        className={styles.applyButton}
                        onClick={handleTermsClick} // Add click handler
                    >
                        <span className={styles.applyText}>Terms and Conditions Only</span>
                    </button>
                </div>
            </div>
        </div>
    );
}