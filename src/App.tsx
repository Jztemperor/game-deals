import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deals from './components/Deals';
import Nav from './components/Nav';
import Stores from './components/Stores';

const App: FC = () => {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Deals />}></Route>
          <Route path="/stores" element={<Stores />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
