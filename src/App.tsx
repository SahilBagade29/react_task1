import React from 'react';
import './App.css';
import Home from './pages/Home.tsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.tsx';

function App() {
  return (
    // <h2 className="App-h2">Jobs  Messages   Perfomances Cards</h2>
<BrowserRouter>
   <Routes>   
    <Route path='/' element={ <Home/>}/>
    <Route path='/contact' element={ <ContactPage/>}/>
   </Routes>
</BrowserRouter>
  
  );
}

export default App;
