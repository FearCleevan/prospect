import React, { useState } from 'react';
import styles from './FaqsFirst.module.css';

export default function FaqsFirst() {
  const [activeTopic, setActiveTopic] = useState('General');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = {
    General: [
      {
        question: 'What is Business Process Outsourcing (BPO)',
        answer: 'Business Process Outsourcing (BPO) involves contracting specific business functions to an external service providers. It enables companies to focus on their core competencies while experts handle non-core activities.'
      },
      {
        question: 'How can your company help with Business Process Outsourcing?',
        answer: 'Our company specializes in BPO and offers a wide range of services to support businesses across various industries. Our team can handle tasks like customer service, data entry, lead generation, and appointment setting. We tailor our solutions to your specific business needs.'
      },
      {
        question: 'How do you ensure the quality of outsourced services?',
        answer: 'We prioritized quality skilled professionals, rigorous training, standardized processes, quality control measures, performance evaluations, and open communication.'
      },
      {
        question: 'How do you ensure data security and confidentiality in BPO?',
        answer: 'We employ strict security measures, including secure networks, encrypted communication, and access controls. We comply with industry regulations and maintain confidentiality agreements to protect sensitive data.'
      },
      {
        question: 'Can you customize BPO solutions to align with our business requirements?',
        answer: 'Yes, we can customize BPO solutions to fit your unique business requirements. We work closely with you to understand your processes and goals, ensuring seamless integration with your existing workflows.'
      }
    ],
    'Lead Generation and Appointment Setting': [
      {
        question: 'What is lead generation using the hybrid approach?',
        answer: 'Lead Generation through the hybrid approach blends multiple strategies like telemarketing, email campaigns, and LinkedIn outreach to attract high-quality leads. By combining the strengths of each channel, this approach maximizes the impact of your efforts, ensuring you capture the right prospects at the right time.'
      },
      {
        question: 'How can your company help with Lead Generation using the hybrid approach?',
        answer: 'When it comes to LinkedIn marketing, we help you leverage the power of this professional network to find and connect with the right leads. From building a solid LinkedIn presence to sharing insightful content, engaging in industry groups, and fostering genuine relationships, we help you stand out, build credibility, and drive meaningful connections that convert into valuable leads.'
      },
      {
        question: 'What are the benefits of outsourcing Lead Generation?',
        answer: 'Outsourcing your lead generation offers incredible advantages. It frees up your team to focus on core business activities, while experts take care of generating fresh leads. Not only does this save time and resources, but it also gives access to specialized skills, cutting-edge technology, and scalable process that can grow with you business needs.'
      },
      {
        question: 'How do you measure the success of lead generation campaigns?',
        answer: 'We believe in data-driven success. To track the effectiveness of our lead generation campaigns, we use a variety of key performance indicators like the number of leads, conversion rates, cost per lead, engagement rates (like email open and click-through rates), and overall ROI. With regular reports and insights, you\'ll always know how your campaign is performing and were we can improve.'
      },
      {
        question: 'What is the significance of LinkedIn marketing in Lead Generation?',
        answer: 'LinkedIn marketing is all about harnessing the power of the world\'s largest professional network to build connections with decision-makers and potential clients. By creating a strong profile, sharing valuable content, and engaging meaningful discussions, LinkedIn helps establish your credibility, expand you reach, and generate high-quality leads within a professional context.'
      }
    ],
    'Customer Services': [
      {
        question: 'What is customer service outsourcing?',
        answer: 'Customer Service outsourcing means partnering with a third-party provider to handle your customer support needs. Whether it\'s phone support, live chat, or social media engagement, outsourcing allows you to delegate these tasks to experts, so you can focus on growing your business while ensuring top-notch support for your customers.'
      },
      {
        question: 'How can you company help with customer service outsourcing?',
        answer: 'Outsourcing customer service offers a range of benefits, it allows you to concentrate on what you do best, leaving customer support to the professionals. You\'ll save on costs, gain access to specialized skills and advanced technology, and be able to scale quickly when support demand fluctuates all while providing better customer experiences with 24/7 availability and multiple channels.'
      },
      {
        question: 'What customer service channels can you handle?',
        answer: 'We\'ve got you covered across all major communication channels! From phone support and live chat to email, social media, and self-service options like FAQs and knowledge bases, our multichannel approach ensures your customers can reach us however they prefer, boosting satisfaction and convenience.'
      },
      {
        question: 'How do you ensure quality in customer service?',
        answer: 'Quality is our top priority, We train our team extensively, ensuring they\'re equipped with the knowledge, skills, and expertise needed to deliver exceptional service. Through strict quality assurance measures, ongoing training, and regular performance evaluations, we maintain high standards that ensure your customers get the best experience, every time.'
      }
    ],
    'Medical Billing': [
      {
        question: 'What is medical billing?',
        answer: 'Medical Billing is the behind-the-scenes of ensuring healthcare providers get paid for their services. It involves converting medical procedures, diagnoses, and treatments into standardized codes, submitting insurance claims, and following up to ensure timely payment. It\'s a critical step that helps healthcare practices stay financially healthy and focused on patient care.'
      },
      {
        question: 'How can outsourcing medical billing benefit my healthcare practice?',
        answer: 'Outsourcing your medical billing allows you to focus on what really matters - your patients. By handling over the complex and time-consuming task of billing to experts, you can reduce administrative stress, streamline claim processing, and boost your revenue cycle management. With more time on your hands, you can improve the patient experience while ensuring accuracy, speed, and efficiency in your billing operations.'
      },
      {
        question: 'What medical billing services do you provide?',
        answer: 'We offer a full suite of medical billing services tailored to your practice\'s unique needs. This includes everything from generating and submitting claims to verifying insurance eligibility, managing denials, posting payments, following up on accounts receivable, and ensuring compliance with the latest regulations. With our comprehensive approach, you can rest easy knowing billing is in expert hands.'
      },
      {
        question: 'Is outsourcing medical billing cost-effective?',
        answer: 'Absolutely! Outsourcing medical billing can actually save you money in the long run. By bypassing the need to hire, train, and manage an in-house billing team, you eliminate overhead costs and the burden of constantly updating billing software. Plus, fewer errors and denials mean faster payments and improved cash flow, which directly boosts your bottom line.'
      },
      {
        question: 'How can I track the performance and financial health of my practice?',
        answer: 'We provide detailed reports and analytics that give you a clear picture of your practice\'s financial health. From claim submission and acceptance rates to reimbursement rates and accounts receivable days, our insights help you make data-driven decisions. This way, you can continually optimize your revenue cycle and ensure your practice is financially thriving.'
      }
    ],
    'Virtual Assistant': [
      {
        question: 'How can virtual assistants help my business?',
        answer: 'Virtual assistants are a game-changer for any business. From managing emails and schedules to providing customer support, handling social media, assisting with content creation, and conducting research, they\'re the extra set of hands you\'ve been looking for. By outsourcing these tasks, you can focus on growing your business and boosting productivity without feeling bogged down by day-to-day tasks.'
      },
      {
        question: 'What types of virtual assistants do you provide?',
        answer: 'We offer virtual assistants with a broad range of skills to meet the unique needs of your business. Whether you need help with administrative tasks, customer service, social media management, content writing, data entry, bookkeeping, or graphic design, we\'ve got you covered. We\'ll match you with a VA who has the expertise needed to support your business goals and enhance your operations.'
      },
      {
        question: 'How do you ensure the security and confidentiality of my information?',
        answer: 'Your information is safe with us. We take confidentiality seriously, using secure file-sharing platforms, signing non-disclosure agreements (NDAs) with our virtual assistants, and restricting access to sensitive data. Rest assured, your business information is handled with the utmost care, giving you peace of mind that everything is secure and private.'
      },
      {
        question: 'How do I get started with outsourcing and hiring a virtual assistant?',
        answer: 'Starting is simple! Just reach out to us via our website or phone, and one of our representatives will guide you through the process. We\'ll discuss your specific needs, match you with the perfect virtual assistant, and walk you through the next steps. We aim to make the onboarding process as smooth and hassle-free as possible so you can get started quickly and efficiently.'
      },
      {
        question: 'How do I monitor and manage the work of my virtual assistant?',
        answer: 'Managing your virtual assistant is easy with the right tools. We recommend using project management software to assign and track tasks, as well as holding regular check-ins through video or voice calls to stay aligned on priorities. We encourage open communication and regular feedback to ensure everything is running smoothly and that your VA is fully supported.'
      }
    ]
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className={styles.faqsFirstContainer}>
      <div className={styles.leftTabs}>
        {Object.keys(faqData).map((topic) => (
          <div
            key={topic}
            className={`${styles.tab} ${activeTopic === topic ? styles.active : ''}`}
            onClick={() => {
              setActiveTopic(topic);
              setActiveQuestion(null);
            }}
          >
            <span>{topic}</span>
          </div>
        ))}
      </div>
      <div className={styles.rightQuestions}>
        {faqData[activeTopic].map((item, index) => (
          <div
            key={index}
            className={`${styles.questionContainer} ${activeQuestion === index ? styles.active : ''}`}
          >
            <div
              className={styles.question}
              onClick={() => toggleQuestion(index)}
            >
              <span className={styles.arrowIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d={activeQuestion === index ? "M19 9L12 16L5 9" : "M9 5L16 12L9 19"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.questionText}>{item.question}</span>
            </div>
            <div className={styles.answerWrapper}>
              <div className={styles.answer}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}