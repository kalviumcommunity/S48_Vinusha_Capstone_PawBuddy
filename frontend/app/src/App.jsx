import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/landing';
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import ChoosePet from '../src/components/choosepet'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choosepet" element={<ChoosePet />} />
      </Routes>
    </Router>
  );
}

export default App;
