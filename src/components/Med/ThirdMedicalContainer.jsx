import styles from './ThirdMedicalContainer.module.css';
import medicalBillingImage from '../../assets/Medical Billing.webp';

export default function ThirdMedicalContainer() {
    return (
        <section className={styles.container}>
            <div className={styles.leftSection}>
                <p className={styles.description}>
                    In today's healthcare landscape, having a proficient and reliable medical billing service is more critical than ever. Our comprehensive solutions go beyond just submitting claims; we offer a seamless, end-to-end approach that optimizes your revenue stream, allowing you to focus on what truly matters – providing exceptional patient care.
                </p>
            </div>
            
            <div className={styles.rightSection}>
                <img 
                    src={medicalBillingImage} 
                    alt="Medical Billing Services" 
                    className={styles.medicalBillingImage} 
                />
            </div>
        </section>
    );
}