// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react';
import Logo from '../assets/images/app-logo.jpeg';

const Footer = () => {
  const services = [
    'Oil & Gas Industry',
    'Manufacturing Solutions',
    'Construction Equipment',
    'Safety Solutions',
    'Uniforms & Workwear',
    'Network Products'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
    { label: 'News & Updates', href: '#' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="premium-footer">
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>
      
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main">
          <Col lg={4} md={6} className="mb-4">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <img src={Logo} alt="Logo" className="icon-inner" />
                </div>
                <div className="footer-logo-text">
                  <h3>SASNET Safety</h3>
                  <span>Excellence in Trading</span>
                </div>
              </div>
              
              <p className="footer-description">
                Creating a better tomorrow through innovation and excellence. 
                Empowering our customers to achieve their goals with integrity, 
                dedication, and personalized solutions.
              </p>

              <div className="footer-contact-quick">
                <div className="contact-quick-item">
                  <Phone size={16} />
                  <span>+966 54 406 5093</span>
                </div>
                <div className="contact-quick-item">
                  <Mail size={16} />
                  <span>info@sasnetsafety.com</span>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title">Our Services</h5>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={14} />
                    <a href={link.href}>{link.label}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="footer-title">Contact Information</h5>
              
              <div className="footer-contact-info">
                <div className="contact-info-item">
                  <MapPin size={18} />
                  <div>
                    <h6>Office Address</h6>
                    <p>
                      Office No.41, 2nd Floor, Port Gate Building<br />
                      A Khalidiyah Al Janubiyah<br />
                      Dammaam 32221, Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Phone size={18} />
                  <div>
                    <h6>Phone Numbers</h6>
                    <p>
                      +966 54 406 5093<br />
                      +966 51 051 6139
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Mail size={18} />
                  <div>
                    <h6>Email Addresses</h6>
                    <p>
                      info@sasnetsafety.com<br />
                      sales@sasnetsafety.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="newsletter-signup">
                <h6>Stay Updated</h6>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="newsletter-input"
                  />
                  <motion.button 
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div
                className="footer-copyright"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p>
                  © 2024 <strong>SASNET Safety</strong>. All rights reserved.
                </p>
              </motion.div>
            </Col>
            
            <Col md={6}>
              <motion.div
                className="footer-social"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span>Follow Us:</span>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="social-link"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
