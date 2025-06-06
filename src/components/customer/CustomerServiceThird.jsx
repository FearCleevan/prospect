import React from 'react';
import styles from './CustomerServiceThird.module.css';
import customerServiceImage from '../../assets/customer-service.webp';

export default function CustomerServiceThird() {
    return (
        <div className={styles.container}>
            <div className={styles.rightSection}>
                <h3 className={styles.title}>
                    Focus on Core Competencies
                </h3>
                <p className={styles.description}>
                    Partnering with The Launchpad for customer service outsourcing lets the companies focus on strengths and strategic goals. Delegating support, tasks frees up resources for growth areas like product innovation, marketing, and sales, optimizing potential for expansion.
                </p>
                <div className={styles.underline}></div>
                <h3 className={styles.title}>
                    Enhanced Customer Experience
                </h3>
                <p className={styles.description}>
                    At The Launchpad, we're committed to exceptional customer experiences for our clients. We value customer satisfaction and approach each interaction with professionalism, empathy, and effective problem-solving. Partner with us to boost brand reputation, nurture loyalty, and drive lasting business growth.
                </p>
            </div>
            <div className={styles.leftSection}>
                <img
                    src={customerServiceImage}
                    alt="Customer Service"
                    className={styles.customerImage}
                />
            </div>

        </div>
    );
}