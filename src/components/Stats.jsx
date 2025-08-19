// src/components/Stats.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 150, suffix: '+', label: 'Global Clients', description: 'Trusted partners worldwide' },
    { number: 300, suffix: '+', label: 'Projects Completed', description: 'Successful deliveries' },
    { number: 24, suffix: '/7', label: 'Support Available', description: 'Round-the-clock service' },
    { number: 50, suffix: '+', label: 'Expert Team', description: 'Dedicated professionals' },
  ];

  const AnimatedNumber = ({ targetNumber, suffix, inView }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = targetNumber / 100;
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetNumber) {
            setCurrentNumber(targetNumber);
            clearInterval(timer);
          } else {
            setCurrentNumber(Math.floor(start));
          }
        }, 30);

        return () => clearInterval(timer);
      }
    }, [inView, targetNumber]);

    return (
      <span>
        {currentNumber}
        {suffix}
      </span>
    );
  };

  return (
    <section className="premium-stats-section" ref={ref}>
      <div className="stats-background">
        <div className="stats-overlay"></div>
      </div>
      
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-white">What We Have Achieved So Far</h2>
              <p className="section-subtitle text-white opacity-75">
                Numbers that speak to our commitment and success in delivering excellence
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="stats-row">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="stat-number">
                  <AnimatedNumber 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <h5 className="stat-label">{stat.label}</h5>
                <p className="stat-description">{stat.description}</p>
                <div className="stat-decoration"></div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
