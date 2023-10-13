import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Allaboutmines from './Allaboutmines.js';
import './App.css';
import Headerbar from './Headerbar.js';
import Order from './Order.js';
function App() {
  
  
  return (
   <div style={{color: "blue"}}>
    <nav>
      
      <ul style={{backgroundColor:"powderblue"}}>
        <li><Link to="/">order here</Link></li>
        <li><Link to="/Headerbar">Mines Cafe</Link></li>
        <li><Link to="/Allaboutmines">Allabout mines</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Order/>}/>
      <Route path="/Headerbar" element={<Headerbar/>}/>
      <Route path="/Allaboutmines" element={<Allaboutmines/>}/>
      

    </Routes>
   </div>
  );
}

export default App;
