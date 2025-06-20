import React from 'react';
import styles from './OurCompanyFirst.module.css';
import OurCompanyImage from '../../assets/OurCompany.png';

export default function OurCompanyFirst() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <h2 className={styles.dnaTitle}>Our DNA</h2>
                    <p className={styles.dnaContent}>
                        In 2004, the founder discovered the world of outsourcing by starting and rising from the ranks. 
                        She has worked with locally owned outsourcing companies. She has aided the latter be successful 
                        in serving their offshore clients. In this process transitioning, she has helped narrow the gap 
                        of process building, quality of work, client and employment satisfaction between international 
                        BPOs and locally owned startups.
                    </p>
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