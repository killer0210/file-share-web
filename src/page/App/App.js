import React from 'react';
import './App.css';
import Header from "../../compunents/Header.js"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/homePage.js';
import Login from '../Login/Login.js';
import SignIn from '../SignIn/SignIn.js'; 

import "../../index.css";

function App() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  </div>

  );
}

export default App;
