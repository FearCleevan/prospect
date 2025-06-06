import React from "react";
import styles from "./CustomerServiceSecond.module.css";
import costIcon from "../../assets/time-is-money.webp";
import multichannelIcon from "../../assets/user-generated-content.webp";
import scalabilityIcon from "../../assets/Scalability2.webp";
import expertTeamIcon from "../../assets/customer-review.webp";
import technologyIcon from "../../assets/digitalization.webp";

export default function CustomerServiceSecond() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftContainer}>
        <div className={styles.leftContent}>
          <p className={styles.advantage}>LAUNCHPAD COMPETITIVE ADVANTAGE</p>
          <h2 className={styles.title}>
            FORGE YOUR <br />
            COMPETITIVE EDGE <br />
            AT THE LAUNCHPAD
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightContainer}>
        <div className={styles.rightContent}>
          <div className={styles.cardsContainer}>
            <div className={`${styles.row} ${styles.topRow}`}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={costIcon} alt="Cost Efficiency" className={styles.icon} />
                    <div className={styles.cardText}>
                      <span>Cost Efficiency</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p>Choose The Launchpad for cost-effective customer service outsourcing. Cut expenses on infrastructure, tech, recruitment, and training by partnering with us. Our scalable solutions ensure efficient resource allocation, letting you pay for what you need.</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={multichannelIcon} alt="Multichannel Support" className={styles.icon} />
                    <div className={styles.cardText}>
                      <span>Multichannel<br />Support</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p>In the digital age, customers want support on multiple channels. The Launchpad provides seamless multichannel interactions-phone, email, live chat, and social media. We excel in inquiries, ensuring consistent, efficient support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.bottomRow}`}>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={scalabilityIcon} alt="Scalability" className={styles.icon} />
                    <div className={styles.cardText}>
                      <span>Scalability</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p>At The Launchpad, we understand dynamic customer support needs due to seasons, launches, or campaigns. Our flexibility enables smooth scaling of operations, adjusting staffing and resources for peak support.</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={expertTeamIcon} alt="Expert Team" className={styles.icon} />
                    <div className={styles.cardText}>
                      <span>Expert Team</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p>At The Launchpad, our skilled customer service experts receive rigorous training, staying current with industry trends. With vast knowledge, they handle diverse queries promptly, providing exceptional support beyond expectations.</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={technologyIcon} alt="Advanced Technology" className={styles.icon} />
                    <div className={styles.cardText}>
                      <span>Advanced<br />Technology</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p>We use top tech and tools for efficiency. Our systems include advanced CRM, tickets, call software, and analytics. Track interactions, give personal support, and gain insights for improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}