// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowAlert(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Our Location',
      details: [
        'CR. 2051238344',
        'Office No.41, 2nd Floor',
        'Port Gate Building',
        'A Khalidiyah Al Janubiyah',
        'Dammaam 32221, Saudi Arabia'
      ],
      color: 'primary'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: [
        'info@sasnetgroup.com',
        'sales@sasnetgroup.com',
        'support@sasnetgroup.com'
      ],
      color: 'success'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      details: [
        '+966 53 335 0205',
        '+966 13 123 4567'
      ],
      color: 'info'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: [
        'Sunday - Thursday: 8:00 AM - 6:00 PM',
        'Friday: 1:00 PM - 6:00 PM',
        'Saturday: Closed'
      ],
      color: 'warning'
    }
  ];

  return (
    <section id="contact" className="premium-contact-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Ready to start your next project? Contact us today and let's discuss 
                how we can help transform your business.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-5">
          {/* Contact Information */}
          <Col lg={5} className="mb-5">
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-subtitle">
                We're here to help and answer any question you might have.
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={`contact-info-card contact-${info.color}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="contact-info-icon">
                      {info.icon}
                    </div>
                    <div className="contact-info-content">
                      <h5>{info.title}</h5>
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Map Placeholder */}
              <motion.div
                className="map-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="map-placeholder">
                  <Globe size={48} />
                  <h6>Interactive Map</h6>
                  <p>Click to view our location</p>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <div className="form-header">
                  <h3>Send us a Message</h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                {showAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="custom-alert success"
                  >
                    <div className="alert-content">
                      <Send size={20} />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="premium-form-group">
                        <div className="input-container">
                          <User size={18} className="input-icon" />
                          <Form.Control
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="premium-input"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="premium-form-group">
                        <div className="input-container">
                          <Mail size={18} className="input-icon" />
                          <Form.Control
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="premium-input"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="premium-form-group">
                        <div className="input-container">
                          <Building size={18} className="input-icon" />
                          <Form.Control
                            type="text"
                            placeholder="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="premium-input"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="premium-form-group">
                        <div className="input-container">
                          <MessageSquare size={18} className="input-icon" />
                          <Form.Control
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="premium-input"
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="premium-form-group">
                    <div className="textarea-container">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="premium-textarea"
                      />
                    </div>
                  </Form.Group>

                  <motion.button
                    type="submit"
                    className="premium-submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
