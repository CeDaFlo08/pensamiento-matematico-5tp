import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './rutes/inicio';
import Notfound from './rutes/NoEncontrado';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path="/home" element={<Inicio />} />
        <Route id='INICIO'  path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
