// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Home from './pages/Home/Home';
import LeadGenerationAndAppointmentSettings from './components/Solutions/LeadGenerationAndAppointmentSetting';
import MedicalContainer from './components/Med/MedicalContainer';
import VirtualAssistantContainer from './components/virtual/VirtualAssistantContainer';
import CustomerService from './components/customer/CustomerService';
import Faqs from './components/faqs/Faqs';

function App() {
  return (
    // Remove the <Router> wrapper since it's already in main.jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lead-generation" element={<LeadGenerationAndAppointmentSettings />} />
      <Route path="/medical-billing" element={<MedicalContainer />} />
      <Route path="/virtual-assistant" element={<VirtualAssistantContainer />} />
      <Route path="/customer-service" element={<CustomerService />} />
      <Route path="/faqs" element={<Faqs />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;