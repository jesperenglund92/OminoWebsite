import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="polipod-privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
