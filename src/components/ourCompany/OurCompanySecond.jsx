import React from 'react';
import styles from './OurCompanySecond.module.css';
import OurCompanyImage from '../../assets/OurCompany1.png';

export default function OurCompanySecond() {
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
                    <h2 className={styles.sectionTitle}>Early Years</h2>
                    <p className={styles.sectionContent}>
                        In 2015, The Launchpad was established. With over 40 years of combined experience of the pioneering leadership team; we started with 10 seats. We were armed with the IAA Idealism. <strong>Integrity, Accountability</strong> and <strong>Adaptability</strong>. We have started small but we've always had the "Big" mindset.
                    </p>
                    
                    <h5 className={styles.subHeading}>Our actions have always been based on</h5>
                    
                    <ol className={styles.numberedList}>
                        <li>Is it fair, honest and just? Both to our internal (employees) and external clients.</li>
                        <li>Have we assisted in the growth and success of our clients?</li>
                        <li>Were we able to attune with the demands of the fast paced industry? From Telemarketing, we have also served our customers with the hybrid approach, taking care of their data, marketing, email marketing and social media.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}