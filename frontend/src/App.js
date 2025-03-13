import React from 'react';
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

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <ChatBot />
        <Help />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
