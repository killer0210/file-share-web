import React from 'react';
import './App.css';
import Header from "../../compunents/Header.js"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/homePage.js';
import "../../index.css";

function App() {
  return (
    <div className=' bg-blue-50 min-h-dvh  flex flex-col '>
      <Header className='z-50' />
      <main className='flex flex-col items-center justify-center minHeight' >
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
