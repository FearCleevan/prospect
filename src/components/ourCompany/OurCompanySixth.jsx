import React, { useState } from "react";
import styles from "./OurCompanySixth.module.css";

const OurCompanySixth = () => {
  const [activeTab, setActiveTab] = useState("ISOLATE");

  const tabs = [
    {
      id: "ISOLATE",
      label: "ISOLATE",
      content: "We begin by performing due diligence and fact finding with you to identify all the processes that the outsourcing services will affect. Together, we will identify current strengths and areas for improvement in the campaign. You share with us your expectations and we document them according to the categories of services to be provided. Business rules are identified that currently prioritize the daily workload. This is your most important phase of the project because planning, both strategic and short-term, is key to high ROI."
    },
    {
      id: "STRATEGIZE",
      label: "STRATEGIZE",
      content: "Here we work to review the effective and measure the efficiencies of the implemented support structure for the first 30 to 90 days. Brainstorming and Developmental sessions can be brought about to measure customer satisfaction with the new support structure. Questions that are typically asked include: Are customer expectations being met and/or exceeded? Does the new support structure provide resolutions that aid in the reduction of downtime?"
    },
    {
      id: "EXECUTE",
      label: "EXECUTE",
      content: "The new support structure will be implemented by having all phases of support tasks and activities prepared by the agreed upon target date."
    },
    {
      id: "EVALUATE",
      label: "EVALUATE",
      content: "We begin by performing due diligence and fact finding with you to identify all the processes that the outsourcing services will affect. Together, we will identify current strengths and areas for improvement in the campaign. You share with us your expectations and we document them according to the categories of services to be provided. Business rules are identified that currently prioritize the daily workload. This is your most important phase of the project because planning, both strategic and short-term, is key to high ROI."
    },
    {
      id: "SUSTAIN",
      label: "SUSTAIN",
      content: "During the lifetime of the partnership, our dynamic support team will work with you to facilitate continuous improvement initiatives. Our Vendor Manager is your single point of contact (SPOC) on a daily, weekly or monthly basis. Any issues, concerns or praises regarding our service can be addressed immediately by this individual. The Vendor Manager sets the meeting frequency with your team and reviews the reports generated for the service provided. This individual also engages in a proactive effort to improve your customer service environment."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div className={styles.tabNav}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          <p>{tabs.find(tab => tab.id === activeTab)?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default OurCompanySixth;