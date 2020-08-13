import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import InfoPanel from './Components/InfoPanel'
import FooterNav from './Components/FooterNav'

function App() {
  const screenchange = useState(0)
  return (
    <div>
      <NavBar />
      <InfoPanel currentScreen ={screenchange[0]}/>
      <FooterNav screenchange= {screenchange} />
    </div>
  );
}

export default App;
