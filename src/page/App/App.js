import React from 'react';
import './App.css';
import Header from "../../compunents/Header.js"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/homePage.js';
import Login from '../Login/Login.js';
import SignIn from '../SignIn/SignIn.js'; 
import Transfer from '../Transfer/Transfer.js';
import FileUpload from "../fileUpload/fileUpload.js"
import Profile from "../ProFile/proFile.js"
import { useSelector } from "react-redux";

import "../../index.css";

function App() {
  const userId = useSelector((state) => state.counter.auth.uid);
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 flex flex-col items-center justify-center">
      <Routes>{userId ? <><Route path="/profile" element={<Profile />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/fileUpload" element={<FileUpload />} /></> :<><Route path="/login" element={<Login />} />
        
        <Route path="/signIn" element={<SignIn />} />
       
        
        <Route path="/" element={<HomePage />} /></> 
        }
        
      </Routes>
    </main>
  </div>

  );
}

export default App;
