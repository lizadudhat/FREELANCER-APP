import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectManagement from './components/ProjectManagement';
import PaymentTracking from './components/PaymentTracking';
import Header from './Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/project-management" element={<ProjectManagement projects={projects} setProjects={setProjects} />} />
          <Route path="/payment-tracking" element={<PaymentTracking payments={payments} setPayments={setPayments} />} />
          <Route path="/" element={<Dashboard projects={projects} payments={payments} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
