// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LeadGenerationAndAppointmentSettings from './components/Solutions/LeadGenerationAndAppointmentSetting';
import MedicalContainer from './components/Med/MedicalContainer';
import VirtualAssistantContainer from './components/virtual/VirtualAssistantContainer';
import CustomerService from './components/customer/CustomerService';
import Faqs from './components/faqs/Faqs';
import Careers from './components/careers/Careers';
import ContactUs from './components/contact/ContactUs';
import OurCompany from './components/ourCompany/OurCompany';
import ScrollToTop from './components/scroll/ScrollToTop';
import ReferralProgram from './components/referral/ReferralProgram';
import LeadGen from './components/leadgen/LeadGen';
import TermsAndCondition from './components/termsandconditions/TermsAndCondition'; // Add this import

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead-generation" element={<LeadGenerationAndAppointmentSettings />} />
        <Route path="/medical-billing" element={<MedicalContainer />} />
        <Route path="/virtual-assistant" element={<VirtualAssistantContainer />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/cost-of-diy-lead-gen" element={<LeadGen />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} /> {/* Add this route */}
      </Routes>
    </>
  );
}

export default App;