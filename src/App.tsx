import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deals from './components/Deals';
import Nav from './components/Nav';
import Stores from './components/Stores';
import HowItWorks from './components/HowItWorks';

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
