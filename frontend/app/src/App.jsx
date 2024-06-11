import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/landing';
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import ChoosePet from '../src/components/choosepet';
import Dog from '../src/components/Dog';
import Cat from '../src/components/Cat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choosepet" element={<ChoosePet />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </Router>
  );
}

export default App;
