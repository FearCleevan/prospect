import styles from './VirtualSecondContainer.module.css';
import Pic1 from '../../assets/Pic1.webp';

export default function VirtualSecondContainer() {
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.leftSection}>
                    <img src={Pic1} alt="Virtual Assistant Benefits" className={styles.image} />
                </div>
                <div className={styles.rightSection}>
                    <p className={styles.firstParagraph}>
                        A good assistant provides more than administrative support. An assistant eliminates much of hassle from your work, alleviating stress and making you more productive.
                    </p>
                    <p className={styles.secondParagraph}>
                        The Launchpad Team gives you access to virtual assistants who have experience working for international clients and companies of every size. Skilled in time management, communication, data entry, schedule management, travel planning, systems management and more. Our assistants facilitate business growth by reducing the number of tasks you and your staff have to perform, allowing you to focus on your priorities.
                    </p>
                </div>
            </div>
        </section>
    );
}