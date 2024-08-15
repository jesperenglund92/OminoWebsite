import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import Support from './Support';
import Download from './Download';

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/polipod-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path='/download' element={<Download />} />
      </Routes>
  );
}

export default App;
