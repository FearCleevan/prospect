import React from 'react';
import styles from './CustomerServiceFirst.module.css';
import customerServiceImage from '../../assets/customer-service.webp';

export default function CustomerServiceFirst() {
    return (
        <div className={styles.container}>
            
            <div className={styles.leftSection}>
                <img
                    src={customerServiceImage}
                    alt="Customer Service"
                    className={styles.customerImage}
                />
            </div>

            <div className={styles.rightSection}>
                <h5 className={styles.subtitle}>LAUNCHPAD CUSTOMER SUPPORT</h5>
                <h2 className={styles.title}>
                    Elevate Customer Support with Launchpad: Customized Solutions for Exceptional Service Excellence
                </h2>
                <div className={styles.underline}></div>
                <p className={styles.description}>
                    We specialized in providing tailored solutions that help companies optimize their customer support
                    processes while delivering exceptional service quality. With our extensive experience and advanced
                    technology, we are well-equipped to assist business in outsourcing their customer service needs.
                </p>
            </div>

        </div>
    );
}