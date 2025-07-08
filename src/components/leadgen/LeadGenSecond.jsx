import React from "react";
import styles from "./LeadGenSecond.module.css";
import toolsIcon from "../../assets/tools.png";
import workforceIcon from "../../assets/workforce.png";
import overheadIcon from "../../assets/overhead.png";

const LeadGenSecond = () => {
    return (
        <div className={styles.bgContainer}>
            <div className={styles.cardRow}>
                {/* Tools Card */}
                <div className={styles.card}>
                    <div className={styles.titleContainer}>
                        <div className={styles.iconHolder}>
                            <img src={toolsIcon} alt="Tools" className={styles.icon} />
                        </div>
                        <h2 className={styles.cardTitle}>Tools</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.item}>
                            <span className={styles.bold}>Marketing Automation Tools</span><br />
                            <span>Fee: $400/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Basic CRM/Sales Development Automation</span><br />
                            <span>Fee: $45/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>LinkedIn Automation</span><br />
                            <span>Fee: $45/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Dialer</span><br />
                            <span>Fee: $440/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Database</span><br />
                            <span>Fee: $1000/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Other inclusion</span><br />
                            <span className={styles.smallText}>
                                Inbound Marketing, Content Creation, Prospecting and Outreach, Automation and Nurturing, etc...
                            </span>
                        </div>
                    </div>
                    <div className={styles.totalBox}>
                        <div className={styles.totalContainer}>
                            <span className={styles.totalLabel}>Total</span>
                            <span className={styles.totalValueBlue}>$1,930/month</span>
                        </div>
                    </div>
                </div>
                {/* Workforce Card */}
                <div className={styles.card}>
                    <div className={styles.titleContainer}>
                        <div className={styles.iconHolder}>
                            <img src={workforceIcon} alt="Workforce" className={styles.icon} />
                        </div>
                        <h2 className={styles.cardTitle}>Workforce</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.item}>
                            <span className={styles.boldRed}>Full-Time Linkedin Marketer</span><br />
                            <span className={styles.red}>Fee: $850/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.boldRed}>Caller</span><br />
                            <span className={styles.red}>Fee: $1,200/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.boldRed}>Email Marketing Specialist</span><br />
                            <span className={styles.red}>Fee: $900/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.boldRed}>Account Manager and Campaign Manager</span><br />
                            <span className={styles.red}>Fee: $4200/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Other inclusion</span><br />
                            <span className={styles.smallText}>
                                Telemarketers, QA Specialist, Account Manager, Production Manager, Research and Data Analyst, LinkedIn Marketers, Email Marketers, Sales Support, and etc...
                            </span>
                        </div>
                    </div>
                    <div className={styles.totalBox}>
                        <div className={styles.totalContainer}>
                            <span className={styles.totalLabel}>Total</span>
                            <span className={styles.totalValueRed}>$8,350/month</span>
                        </div>
                    </div>
                </div>
                {/* Overhead Card */}
                <div className={styles.card}>
                    <div className={styles.titleContainer}>
                        <div className={styles.iconHolder}>
                            <img src={overheadIcon} alt="Overhead" className={styles.icon} />
                        </div>
                        <h2 className={styles.cardTitle}>Overhead</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.item}>
                            <span className={styles.bold}>Company Benefits</span><br />
                            <span>Fee: $6174/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Staffing and Utilities</span><br />
                            <span>Fee: $4500/month</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.bold}>Other inclusion</span><br />
                            <span className={styles.smallText}>
                                Recruiting and Hiring Costs, Office Rent, Electricity, Telco Equipment, Repair and Maintenance, and other Operational Expenditures
                            </span>
                        </div>
                    </div>
                    <div className={styles.totalBox}>
                        <div className={styles.totalContainer}>
                            <span className={styles.totalLabel}>Total</span>
                            <span className={styles.totalValueBlue}>$10,674/month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadGenSecond;