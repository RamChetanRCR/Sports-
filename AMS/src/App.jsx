import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import Athletes from "./pages/Athletes";
import Coaches from "./pages/Coaches";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Leaderboard from "./pages/Leader";
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Home" element={ <Home /> } />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/Athletes" element={<Athletes />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
      
    </>
  );
};

export default App;