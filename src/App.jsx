// src/App.jsx
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Home from './pages/Home/Home';
import LeadGenerationAndAppointmentSettings from './components/Solutions/LeadGenerationAndAppointmentSetting';
import MedicalContainer from './components/Med/MedicalContainer';
import VirtualAssistantContainer from './components/virtual/VirtualAssistantContainer';

function App() {
  return (
    // Remove the <Router> wrapper since it's already in main.jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lead-generation" element={<LeadGenerationAndAppointmentSettings />} />
      <Route path="/medical-billing" element={<MedicalContainer />} />
      <Route path="/virtual-assistant" element={<VirtualAssistantContainer />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;