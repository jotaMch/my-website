import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SectionProjects from "./components/sections/SectionProjects";
import Project from "./components/Projects";
import Contact from "./components/contact/Contact";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const Scroll = window.scrollY;

    if (Scroll > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={< Home scrollToTop={scrollToTop} isVisible={isVisible}/>} />
        <Route path="/project" 
        element={< Project scrollToTop={scrollToTop} isVisible={isVisible}/>} />
        <Route path="/contact" 
        element={< Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
