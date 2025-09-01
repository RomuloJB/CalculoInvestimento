import React from 'react';

import Home from './pages/home/Home';
import Calculo from './components/calculo/Calculo';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculo" element={<Calculo />} />
    </Routes>
  </Router>
);

export default App;