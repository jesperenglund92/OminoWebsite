import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/polipod-privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
  );
}

export default App;
