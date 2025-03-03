import React from 'react';
import './App.css';
import Home from './pages/Home.tsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.tsx';
import ServicePage from './pages/ServicePage.tsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}/> 
     <Route path='/contact' element={<ContactPage />}/> 
     <Route path='/service' element={<ServicePage />}/> 
      </Routes>
      </BrowserRouter>

  );
}

export default App;
