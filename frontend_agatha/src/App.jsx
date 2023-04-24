import { useState, useEffect } from 'react'
import './App.scss'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './Pages/Accueil';
import InfosFullPage from './Pages/InfosFullPage';
import ProgrammationFullPage from './Pages/ProgrammationFullPage';
import MentionsLegales from './Pages/MentionsLegales';
import { MyContext } from './Hooks/useContext';
import Contact from './Pages/Contact';


function App() {
  const [navActive, setNavActive] = useState('accueil');


  return (

    <BrowserRouter>
      <MyContext.Provider value={{ navActive, setNavActive }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Accueil />} />
          <Route path="infospratiques" element={<InfosFullPage />} />
          <Route path="programmation" element={<ProgrammationFullPage />} />
          <Route path="mentionslegales" element={<MentionsLegales />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>

  )
}

export default App
