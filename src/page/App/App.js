import React from 'react';
import './App.css';
import Header from "../../compunents/Header.js"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/homePage.js';
import "../../index.css";

function App() {
  return (
    <div className='min-h-screen bg-blue-50  flex flex-col '>
      <Header  className=' mt-4 z-50'/>
      <main className='Content flex  justify-items-center  items-center   h-screen-58  overflow-hidden p-2 min-h-screen '>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
