import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deals from './pages/Deals/Deals';
import Nav from './components/Nav/Nav';
import Stores from './pages/Stores/Stores';
import HowItWorks from './pages/HowItWorks/HowItWorks';

const App: FC = () => {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Deals />}></Route>
          <Route path="/stores" element={<Stores />}></Route>
          <Route path="/how-it-works" element={<HowItWorks />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
