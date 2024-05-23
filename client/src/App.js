import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Home from "./pages/Home/Home";
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import AboutMe from './pages/AboutMe/AboutMe';
import NotFound from './pages/NotFound/NotFound';
import ChatBot from './pages/ChatBot/ChatBot';

const App = () => {
  return (
    <div>
      <Header />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
