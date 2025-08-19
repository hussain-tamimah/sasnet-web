// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect'; // Import our custom component
import { ArrowRight, Play, Award, Globe, Users } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="home" className="hero-premium">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </div>

      <Container className="hero-container">
        <Row className="align-items-center min-vh-100">
          <Col lg={7} className="hero-content">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* <motion.div className="hero-badge" variants={itemVariants}>
                <Award size={16} className="me-2" />
                <span>Leading Global Trading Company</span>
              </motion.div> */}

              <motion.h1 className="hero-title" variants={itemVariants}>
                SASNET
                {/* <span className="gradient-text">  </span> */}
                <br />
                <TypingEffect
                  strings={[
                    'Safety',
                    'Security',
                    'Global Solutions'
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  delay={2000}
                  className="typed-text"
                />
              </motion.h1>

              <motion.p className="hero-description" variants={itemVariants}>
                Empowering industries worldwide with innovative trading solutions. 
                From oil & gas to manufacturing, construction to network solutions - 
                we deliver excellence that transforms businesses.
              </motion.p>

              <motion.div className="hero-stats" variants={itemVariants}>
                <div className="stat-item">
                  <Globe size={24} />
                  <div>
                    <h4>150+</h4>
                    <span>Global Clients</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Users size={24} />
                  <div>
                    <h4>300+</h4>
                    <span>Projects Delivered</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="hero-actions" variants={itemVariants}>
                <Button className="primary-cta" size="lg">
                  <span>Explore Services</span>
                  <ArrowRight size={20} className="ms-2" />
                </Button>
                <Button variant="link" className="play-button">
                  <Play size={20} className="me-2" />
                  Watch Story
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={5} className="hero-visual">
            <motion.div
              className="hero-card-container"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >

              <motion.div
                className="floating-card accent-card"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="industries-preview">
                  <h6>Industries Served</h6>
                  <div className="industry-tags">
                    <span>Oil & Gas</span>
                    <span>Manufacturing</span>
                    <span>Construction</span>
                    <span>Safety</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
