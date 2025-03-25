import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import AboutMe from './components/pages/AboutMe/AboutMe';
import NotFound from './components/pages/NotFound/NotFound';
import ChatBot from './components/Common/ChatBot/ChatBot';
import Help from './components/pages/Help/Help';
import ScrollToTop from "./components/Common/ScrollToTop"; // ✅ IMPORT NOWEGO KOMPONENTU
import Login from './components/pages/Login/Login'; // Dodaj to

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const handleScroll = () => {
      AOS.refresh(); // 🔹 Wymuszamy odświeżanie AOS na każdym scrollu
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div>
        <Header />
        <ChatBot />
        <Help />
        <ScrollToTop />  {/* 🔥 DODAJEMY TUTAJ 🔥 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<Login />} /> {/* 🔐 Nowa trasa */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
