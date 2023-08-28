import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects';
import Products from './pages/Products.jsx';
import Tickets from './pages/Tickets';
import Invoices from './pages/Invoices';
// import Credit Note from './pages/Credit Note';
import Estimates from './pages/Estimates';
import Payments from './pages/Payments';
import Events from './pages/Events';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/invoices" element={<Invoices />} />
          {/* <Route path="/credit note" element={<Credit Note />} /> */}
          <Route path="/estimates" element={<Estimates/>} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/events" element={< Events/>} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;