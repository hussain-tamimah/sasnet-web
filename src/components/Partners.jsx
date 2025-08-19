// src/components/Partners.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, Handshake, Globe2, Star } from 'lucide-react';

const Partners = () => {
  const exclusivePartners = [
    { 
      name: 'Global Energy Solutions', 
      industry: 'Oil & Gas',
      partnership: 'Exclusive Distributor',
      icon: <Globe2 size={32} />
    },
    { 
      name: 'Advanced Manufacturing Corp', 
      industry: 'Industrial Equipment',
      partnership: 'Strategic Partner',
      icon: <Award size={32} />
    },
    { 
      name: 'Safety First International', 
      industry: 'Safety Solutions',
      partnership: 'Premium Partner',
      icon: <Star size={32} />
    },
  ];

  const dealerPartners = [
    'TechCorp Solutions', 'Industrial Dynamics', 'Safety Plus',
    'Global Networks', 'Construction Pro', 'Uniform Excellence',
    'Energy Solutions', 'Manufacturing Hub', 'Network Systems'
  ];

  return (
    <section className="premium-partners-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Trusted Partners</h2>
              <p className="section-subtitle">
                Building strong relationships with industry leaders to deliver exceptional value
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Exclusive Partners */}
        <Row className="mb-5">
          <Col lg={12}>
            <motion.div
              className="partners-header"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="partners-badge">
                <Handshake size={20} />
                <span>Exclusive Dealers</span>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="exclusive-partners-row">
          {exclusivePartners.map((partner, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={450}
              >
                <motion.div
                  className="exclusive-partner-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="partner-card-background"></div>
                  <div className="partner-card-content">
                    <div className="partner-icon">
                      {partner.icon}
                    </div>
                    <h4 className="partner-name">{partner.name}</h4>
                    <p className="partner-industry">{partner.industry}</p>
                    <div className="partnership-badge">
                      {partner.partnership}
                    </div>
                  </div>
                  <div className="partner-card-glow"></div>
                </motion.div>
              </Tilt>
            </Col>
          ))}
        </Row>

        {/* Dealer Network */}
        <Row className="mt-5">
          <Col lg={12}>
            <motion.div
              className="dealers-header"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="partners-badge secondary">
                <Globe2 size={20} />
                <span>Global Dealer Network</span>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {dealerPartners.map((dealer, index) => (
            <Col lg={4} md={6} sm={6} className="mb-3" key={index}>
              <motion.div
                className="dealer-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="dealer-card-inner">
                  <div className="dealer-logo-placeholder">
                    <span>{dealer.charAt(0)}</span>
                  </div>
                  <h6 className="dealer-name">{dealer}</h6>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Partnership CTA */}
        <Row className="mt-5 pt-5">
          <Col lg={12} className="text-center">
            <motion.div
              className="partnership-cta"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Interested in Partnership?</h3>
              <p>Join our network of trusted partners and grow your business with us</p>
              <motion.button
                className="partnership-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
