import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import { caseStudies } from './data/caseStudies';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {caseStudies.map(cs => (
          <Route key={cs.id} path={`/case/${cs.id}`} element={<CaseStudy study={cs} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
