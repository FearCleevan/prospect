import styles from './FifthContainer.module.css';
import CuttingIcon from '../../assets/Cutting.webp';
import SecurityIcon from '../../assets/Security.webp';
import AdaptabilityIcon from '../../assets/Adaptability.webp';

export default function FifthContainer() {
    return (
        <section className={styles.container}>
            {/* First Layer - Icons */}
            <div className={styles.iconLayer}>
                <div className={styles.iconContainer}>
                    <img src={CuttingIcon} alt="Cutting Edge Technology" className={styles.icon} />
                    <p>Cutting Edge Technology</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={SecurityIcon} alt="Security & Compliance" className={styles.icon} />
                    <p>Security & Compliance</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={AdaptabilityIcon} alt="Adaptability" className={styles.icon} />
                    <p>Adaptability</p>
                </div>
            </div>

            {/* Second Layer - Text */}
            <div className={styles.textLayer}>
                <p className={styles.description}>
                    Explore how we can transform your medical billing processes, boost your bottom line, and provide peace of mind.
                </p>
            </div>

            {/* Third Layer - Button */}
            <div className={styles.buttonLayer}>
                <button className={styles.messageButton}>
                    Send us a Message
                </button>
            </div>
        </section>
    );
}