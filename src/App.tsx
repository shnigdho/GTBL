import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import NFCCards from './pages/products/NFCCards';
import SIMCards from './pages/products/SIMCards';
import BankingCards from './pages/products/BankingCards';
import GovernmentIDs from './pages/products/GovernmentIDs';
import MembershipCards from './pages/products/MembershipCards';
import SmartCards from './pages/products/SmartCards';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-100 relative overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="floating-shape w-64 h-64 bg-gradient-to-r from-red-200 to-pink-200 rounded-full top-10 left-10 animate-morphing"></div>
        <div className="floating-shape w-48 h-48 bg-gradient-to-r from-orange-200 to-red-200 rounded-full top-1/2 right-20 animate-morphing" style={{ animationDelay: '-3s' }}></div>
        <div className="floating-shape w-32 h-32 bg-gradient-to-r from-pink-200 to-red-200 rounded-full bottom-20 left-1/3 animate-morphing" style={{ animationDelay: '-6s' }}></div>
        
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/nfc" element={<NFCCards />} />
            <Route path="/products/sim" element={<SIMCards />} />
            <Route path="/products/banking" element={<BankingCards />} />
            <Route path="/products/government" element={<GovernmentIDs />} />
            <Route path="/products/membership" element={<MembershipCards />} />
            <Route path="/products/smart" element={<SmartCards />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;