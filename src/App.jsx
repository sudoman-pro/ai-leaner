import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ConvertNotes from './pages/ConvertNotes';
import Summarize from './pages/Summarize';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

function App() {
  const isLoggedIn = false; // temporary auth flag

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {isLoggedIn && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/convert-notes" element={<ConvertNotes />} />
          <Route path="/summarize" element={<Summarize />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
        </>
      )}
    </Routes>
  );
}

export default App;
