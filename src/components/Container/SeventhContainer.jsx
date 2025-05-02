import styles from './SeventhContainer.module.css';
import settingsIcon from '../../assets/settings.png';
import megaphoneIcon from '../../assets/Megaphone.png';
import headphoneIcon from '../../assets/Headphone.png';
import desktopIcon from '../../assets/Desktop.png';

const steps = [
  {
    icon: settingsIcon,
    title: "1. Kick-off Meeting",
    description: "Knowledge dissemination, thorough product exploration, and technical setup.",
  },
  {
    icon: megaphoneIcon,
    title: "2. Creation of Marketing Materials",
    description: "From the targeted database, to the scripts and email templates.",
  },
  {
    icon: headphoneIcon,
    title: "3. Implementation of the Hybrid Approach",
    description: "Outbound Marketing through Cold Calling, Email Marketing and LinkedIn Marketing.",
  },
  {
    icon: desktopIcon,
    title: "4. Weekly Progress Review",
    description: "A dynamic outbound program is always evolving. Through continuous analysis of what works and what doesn't, we gather insights to shape future campaigns.",
  },
];

export default function SeventhContainer() {
  return (
    <div className={styles.seventhContainer}>
      <div className={styles.contentWrapper}>
        <h4 className={styles.subtitle}>HOW IT WORKS</h4>
        <h2 className={styles.title}>
          START EMPOWERING YOUR SUCCESS <br /> IN FOUR SIMPLE STEPS
        </h2>
        <div className={styles.cardWrapper}>
          {steps.map((step, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconContainer}>
                <img src={step.icon} alt={step.title} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}