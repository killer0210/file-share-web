import React from 'react';
import './App.css';
import Header from "../../compunents/Header.js"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/homePage.js';
import "../../index.css";

function App() {
  return (
    <div>
      <Header />
      <main className='Content   justify-items-center bg-blue-50 h-screen-58 w-full  overflow-hidden p-2'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
