// src/components/About.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Globe, Award, Users, Briefcase, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Globe size={40} />,
      title: "Global Reach",
      description: "Serving 150+ clients across more than 30 countries worldwide.",
      color: "primary"
    },
    {
      icon: <Award size={40} />,
      title: "Trusted Excellence", 
      description: "Recognized for our commitment to quality and integrity.",
      color: "success"
    },
    {
      icon: <Users size={40} />,
      title: "Expert Team",
      description: "Dedicated professionals with decades of combined experience.",
      color: "warning"
    },
    {
      icon: <Briefcase size={40} />,
      title: "Comprehensive Solutions",
      description: "End-to-end solutions tailored to your industry needs.",
      color: "info"
    }
  ];

  return (
    <section id="about" className="premium-about-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title gradient-text">About SASNET Safety</h2>
              <p className="section-subtitle">
                We partner with global industries to bring tailored trading solutions 
                that drive innovation, efficiency, and success across multiple sectors.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          {features.map((feature, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <motion.div
                className={`feature-card feature-${feature.color}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-glow"></div>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Vision & Mission Cards */}
        <Row className="mt-5 pt-5">
          <Col lg={6} className="mb-4">
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="vision-header">
                <h3>Our Vision & Mission</h3>
                <div className="vision-line"></div>
              </div>
              <ul className="vision-list">
                <li>Creating a better tomorrow through innovation and excellence</li>
                <li>Empowering customers to achieve goals with integrity and dedication</li>
                <li>Building sustainable partnerships that drive mutual growth</li>
              </ul>
            </motion.div>
          </Col>
          <Col lg={6} className="mb-4">
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="vision-header">
                <h3>Our Commitment</h3>
                <div className="vision-line"></div>
              </div>
              <p>
                As a leading supplier, we strive to become the premier provider of high-quality 
                products and services that meet the unique needs of each industry we serve. 
                We achieve this through continuous innovation, personalized solutions, and 
                unwavering commitment to excellence.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
