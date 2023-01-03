import { useState } from 'react'
import './App.scss'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './Pages/Accueil';
import InfosFullPage from './Pages/InfosFullPage';
import ProgrammationFullPage from './Pages/ProgrammationFullPage';
import { MyContext } from './Hooks/useContext';


function App() {
  const [navActive, setNavActive] = useState('accueil');
  console.log(import.meta.env.VITE_API_URL, "import.meta.env.REACT_APP_API_URL");

  return (

    <BrowserRouter>
      <MyContext.Provider value={{ navActive, setNavActive }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<Accueil />} />
          <Route path="infospratiques" element={<InfosFullPage />} />
          <Route path="programmation" element={<ProgrammationFullPage />} />
          {/* <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="competences" element={<Competences />} /> */}
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>

  )
}

export default App
