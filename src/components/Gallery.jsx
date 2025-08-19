// src/components/Gallery.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const filters = [
    'All',
    'Oil & Gas',
    'Manufacturing', 
    'Construction',
    'Safety',
    'Uniforms',
    'Network'
  ];

  const galleryItems = [
    { id: 1, category: 'Oil & Gas', title: 'Pipeline Infrastructure', subtitle: 'Advanced pipeline systems' },
    { id: 2, category: 'Manufacturing', title: 'Industrial Equipment', subtitle: 'Precision manufacturing tools' },
    { id: 3, category: 'Construction', title: 'Building Materials', subtitle: 'High-grade construction supplies' },
    { id: 4, category: 'Safety', title: 'Protective Gear', subtitle: 'Complete safety solutions' },
    { id: 5, category: 'Uniforms', title: 'Professional Workwear', subtitle: 'Industry-specific apparel' },
    { id: 6, category: 'Network', title: 'Network Infrastructure', subtitle: 'Advanced connectivity solutions' },
    { id: 7, category: 'Oil & Gas', title: 'Refinery Equipment', subtitle: 'Specialized refining systems' },
    { id: 8, category: 'Manufacturing', title: 'Automation Systems', subtitle: 'Smart manufacturing solutions' },
    { id: 9, category: 'Construction', title: 'Heavy Machinery', subtitle: 'Industrial construction equipment' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="premium-gallery-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Portfolio Gallery</h2>
              <p className="section-subtitle">
                Explore our comprehensive range of products and solutions across various industries
              </p>
            </motion.div>
          </Col>
        </Row>
        
        {/* Filter Buttons */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <div className="gallery-filters">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </Col>
        </Row>
        
        {/* Gallery Grid */}
        <Row>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <Col lg={4} md={6} className="mb-4" key={item.id}>
                <motion.div
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="gallery-image">
                    <div className="image-placeholder">
                      <div className="placeholder-pattern"></div>
                    </div>
                    
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          className="gallery-overlay"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="overlay-content">
                            <div className="gallery-actions">
                              <button className="gallery-action-btn">
                                <Eye size={20} />
                              </button>
                              <button className="gallery-action-btn">
                                <ExternalLink size={20} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h5 className="gallery-title">{item.title}</h5>
                    <p className="gallery-subtitle">{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
