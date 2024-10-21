import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Index from './components/ShortenedUrl/Index';
import Login from './components/Login';
import Create from './components/ShortenedUrl/Create';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;