import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import Support from './Support';
import DeleteAccount from './DeleteAccount';
import Download from './Download';
import WWF from './WWF';

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/polipod-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/polipod-delete-account" element={<DeleteAccount />} />
          <Route path='/download' element={<Download />} />
          <Route path='/wwf' element={<WWF />} />
      </Routes>
  );
}

export default App;
