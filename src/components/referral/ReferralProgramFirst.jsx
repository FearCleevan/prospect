import React from 'react';
import styles from './ReferralProgramFirst.module.css';
import OurCompanyImage from '../../assets/Refer1.webp';

export default function ReferralProgramFirst() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <h2 className={styles.dnaTitle}>High-Quality Referrals Promise Exceptional Rewards</h2>
                    <p className={styles.dnaContent}>
                        Know a business that could benefit from Launchpad? Refer them and earn fantastic rewards. Help us drive growth by connecting organizations to better opportunities.
                    </p>
                    <button className={styles.applyButton}><span className={styles.applyText}>Refer A Friend</span></button>
                </div>
                
                {/* Right Section */}
                <div className={styles.rightSection}>
                    <img 
                        src={OurCompanyImage} 
                        alt="Our Company" 
                        className={styles.companyImage}
                    />
                </div>
            </div>
        </div>
    );
}