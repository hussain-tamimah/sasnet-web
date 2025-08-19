// src/components/Services.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Droplets, 
  Factory, 
  HardHat, 
  Shield, 
  Shirt, 
  Network,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Oil & Gas Industry",
      shortDesc: "Exceptional service for industry challenges",
      fullDesc: "We understand the complexities of the oil & gas sector and provide comprehensive solutions including equipment, safety systems, and technical expertise to ensure operational excellence.",
      icon: <Droplets size={48} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Pipeline Equipment", "Safety Systems", "Technical Consulting", "Quality Assurance"]
    },
    {
      title: "Manufacturing Industry", 
      shortDesc: "Comprehensive manufacturing solutions",
      fullDesc: "Our experienced team collaborates closely with manufacturing clients to understand unique requirements and deliver specialized products that enhance productivity and efficiency.",
      icon: <Factory size={48} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["Industrial Equipment", "Process Optimization", "Quality Control", "Supply Chain"]
    },
    {
      title: "Construction Industry",
      shortDesc: "Essential materials and equipment",
      fullDesc: "PGT provides critical construction materials, equipment, and project support services to ensure successful completion of projects across various construction segments.",
      icon: <HardHat size={48} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Construction Materials", "Equipment Supply", "Project Support", "Site Safety"]
    },
    {
      title: "Occupational Health & Safety",
      shortDesc: "Workplace safety excellence",
      fullDesc: "We prioritize workplace safety by providing comprehensive safety solutions, training programs, and equipment to help organizations achieve and maintain the highest safety standards.",
      icon: <Shield size={48} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["Safety Equipment", "Training Programs", "Compliance Support", "Risk Assessment"]
    },
    {
      title: "Uniforms & Workwear",
      shortDesc: "High-quality professional apparel",
      fullDesc: "As a premium uniform and workwear supplier, we design and provide high-quality apparel solutions tailored to meet the specific demands of various industries.",
      icon: <Shirt size={48} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: ["Custom Design", "Durable Materials", "Brand Integration", "Comfort Focus"]
    },
    {
      title: "Network Product Solutions",
      shortDesc: "Advanced connectivity solutions",
      fullDesc: "We deliver cutting-edge network infrastructure solutions and connectivity products designed to meet modern business communication and data transfer requirements.",
      icon: <Network size={48} />,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      features: ["Network Infrastructure", "Connectivity Solutions", "Technical Support", "Future-Ready Technology"]
    }
  ];

  return (
    <section id="services" className="premium-services-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Dedicated to Serving Excellence</h2>
              <p className="section-subtitle">
                Comprehensive solutions across multiple industries, delivered with 
                precision, quality, and unwavering commitment to your success.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="services-grid">
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={450}
                gyroscope={true}
              >
                <motion.div
                  className="premium-service-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{ background: service.gradient }}
                >
                  <div className="service-card-inner">
                    <div className="service-icon-container">
                      {service.icon}
                    </div>
                    
                    <h4 className="service-title">{service.title}</h4>
                    
                    <AnimatePresence mode="wait">
                      {hoveredIndex === index ? (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="service-expanded"
                        >
                          <p className="service-full-desc">{service.fullDesc}</p>
                          <ul className="service-features">
                            {service.features.map((feature, i) => (
                              <li key={i}>
                                <CheckCircle size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="service-cta">
                            <span>Learn More</span>
                            <ArrowRight size={16} />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="service-short-desc">{service.shortDesc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="service-card-glow"></div>
                </motion.div>
              </Tilt>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
