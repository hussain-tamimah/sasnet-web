// src/components/Header.jsx
import  { useState, useEffect } from 'react';
import {  Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/images/app-logo.jpeg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`premium-navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <div className="navbar-content">
          <motion.div 
            className="navbar-brand"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="brand-container">
              <div className="brand-icon">
                {/* <div className="icon-inner"></div> */}
                <img src={Logo} alt="Logo" className="icon-inner" />
              </div>
              <div className="brand-text">
                <h3>SASNET Safety</h3>
                <span>The Complete Solutions</span>
              </div>
            </div>
          </motion.div>

          <div className="navbar-menu d-none d-lg-flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ delay: `${index * 0.1}s` }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="navbar-actions d-none d-lg-flex">
            <Button className="cta-button" size="sm">
              <Phone size={16} className="me-2" />
              Get Quote
            </Button>
          </div>

          <button
            className="mobile-menu-toggle d-lg-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            height: mobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <Button className="cta-button mobile-cta">
            <Phone size={16} className="me-2" />
            Get Quote
          </Button>
        </motion.div>
      </Container>
    </motion.nav>
  );
};

export default Header;
