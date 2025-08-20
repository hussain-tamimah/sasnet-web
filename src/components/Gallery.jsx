// src/components/Gallery.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink } from 'lucide-react';
import PipelineImg from '../assets/images/pipeline_img.png';
import IndustrialEquipmentImg from '../assets/images/industrial_equipment.png';
import BuildingMaterialsImg from '../assets/images/building_materials.png';
import ProtectiveGearImg from '../assets/images/protective_gear.png';
import WorkWearImg from '../assets/images/work_wear.png';
import NetworkInfrastructureImg from '../assets/images/network_infrastructure.png';
import RefineryEquipmentImg from '../assets/images/refinery_equipment.png';
import AutomationSystemsImg from '../assets/images/automation_systems.png';
import HeavyMachineryImg from '../assets/images/heavy_machinery.png';


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
  { id: 1, category: 'Oil & Gas', title: 'Pipeline Infrastructure', subtitle: 'Advanced pipeline systems', imgUrl: PipelineImg },
  { id: 2, category: 'Manufacturing', title: 'Industrial Equipment', subtitle: 'Precision manufacturing tools', imgUrl: IndustrialEquipmentImg },
  { id: 3, category: 'Construction', title: 'Building Materials', subtitle: 'High-grade construction supplies', imgUrl: BuildingMaterialsImg },
  { id: 4, category: 'Safety', title: 'Protective Gear', subtitle: 'Complete safety solutions', imgUrl: ProtectiveGearImg },
  { id: 5, category: 'Uniforms', title: 'Professional Work wear', subtitle: 'Industry-specific apparel', imgUrl: WorkWearImg },
  { id: 6, category: 'Network', title: 'Network Infrastructure', subtitle: 'Advanced connectivity solutions', imgUrl: NetworkInfrastructureImg },
  { id: 7, category: 'Oil & Gas', title: 'Refinery Equipment', subtitle: 'Specialized refining systems', imgUrl: RefineryEquipmentImg },
  { id: 8, category: 'Manufacturing', title: 'Automation Systems', subtitle: 'Smart manufacturing solutions', imgUrl: AutomationSystemsImg },
  { id: 9, category: 'Construction', title: 'Heavy Machinery', subtitle: 'Industrial construction equipment', imgUrl: HeavyMachineryImg },
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
                    {/* <div className="image-placeholder"> */}
                      {/* <div className="placeholder-pattern"></div> */}
                       <img src={item.imgUrl} alt={`${item.title} - ${item.subtitle}`} className='w-100' />
                    {/* </div> */}
                    
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
