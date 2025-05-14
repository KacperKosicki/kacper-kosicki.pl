import React, { useEffect, useState } from 'react';
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
import ScrollToTop from "./components/Common/ScrollToTop";
import Login from './components/pages/Login/Login';
import AdminPanel from './components/pages/AdminPanel/AdminPanel';
import ClientPanel from './components/pages/ClientPanel/ClientPanel';
import ProtectedRoute from './components/pages/ProtectedRoute';
import CookiesPanel from './components/Common/Cookies/CookiesPanel';
import ToolsToggle from './components/Common/ToolsToggle/ToolsToggle';
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy';

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/panel"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <ClientPanel />
              </ProtectedRoute>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ render tylko jeśli aktywne */}
        {showChatbot && <ChatBot />}
        {showCookies && <CookiesPanel />}

        <ToolsToggle
          onToggleChatbot={() => setShowChatbot((prev) => !prev)}
          onToggleCookies={() => setShowCookies((prev) => !prev)}
          isChatbotVisible={showChatbot}
          isCookiesVisible={showCookies}
        />

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
