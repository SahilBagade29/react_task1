import React from 'react';
import './App.css';
import Home from './pages/Home.tsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.tsx';
<<<<<<< HEAD

function App() {
  return (
    // <h2 className="App-h2">Jobs  Messages   Perfomances Cards</h2>
<BrowserRouter>
   <Routes>   
    <Route path='/' element={ <Home/>}/>
    <Route path='/contact' element={ <ContactPage/>}/>
   </Routes>
</BrowserRouter>
  
=======
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

>>>>>>> origin/master
  );
}

export default App;
