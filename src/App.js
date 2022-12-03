import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './styling/custom.scss'

function App() {
  return (
    <div className="App">
      
        <Navbar />

        <Routes>

           <Route path="" element={<AboutMe/>} /> 

          <Route path="/Projects" element={<Projects />} /> 

          <Route path="/Resume" element={<Resume />} />

          <Route path="/Contact" element={<Contact />} /> 

        </Routes>

        <Footer />
     
    </div>
  );
}

export default App;
