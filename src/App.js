import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TheRollRoster from './pages/TheRollRoster';
import './pages/modules/styles/body.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therollroster" element={<TheRollRoster />} />
      </Routes>
    </>
  );
}

export default App;