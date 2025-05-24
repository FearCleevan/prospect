import styles from './SecondMedicalContainer.module.css';

export default function SecondMedicalContainer() {
    return (
        <section className={styles.container}>
            <h3 className={styles.missionText}>
                Our mission is clear; to help you maximize revenue, minimize billing errors, 
                and ensure compliance with ever-evolving healthcare regulations.
            </h3>
        </section>
    );
}