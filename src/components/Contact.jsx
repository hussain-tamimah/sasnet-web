// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success"); // 'success' | 'error'
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function formatPrettyTimestampLower(d = new Date()) {
    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("en-US", { month: "short" }).toLowerCase(); // "aug"
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const hoursStr = String(hours).padStart(2, "0");

    return `${day}-${month}-${year} ${hoursStr}:${minutes} ${ampm}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formEl = e.currentTarget;
      const formDataToSend = new FormData(formEl);
      const name = (formData.name || "").trim() || "Visitor";
      const email = (formData.email || "").trim();
      const ts = formatPrettyTimestampLower();
      formDataToSend.append(
        "_subject",
        `Contact from ${name} <${email}> — ${ts}`
      );

      formDataToSend.append("_template", "table");
      formDataToSend.append("_captcha", "true");
      // Honeypot (empty string is fine; bots may fill it)
      formDataToSend.append("_honey", "");

      const res = await fetch(
        "https://formsubmit.co/ajax/info@sasnetsafety.com",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

      if (res.ok && (data.success === "true" || data.success === true)) {
        setAlertType("success");
        setAlertMessage(
          "Message sent successfully! We'll get back to you soon."
        );
        setShowAlert(true);

        // Clear inputs
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });

        // Hide after 5s
        setTimeout(() => setShowAlert(false), 5000);
      } else {
        // Handle known error formats from FormSubmit
        const msg =
          (data && (data.message || data.error || data.errors?.join(", "))) ||
          "Submission failed. Please try again.";
        setAlertType("error");
        setAlertMessage(msg);
        setShowAlert(true);
      }
    } catch (err) {
      setAlertType("error");
      setAlertMessage(
        "Network error. Please check your connection and try again."
      );
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: [
        "CR.7050207021",
        "Business center Al Khaldiyah",
        "Khamis Mushait.Abha",
        "KINGDOM OF SAUDI ARABIA",
      ],
      color: "primary",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["info@sasnetsafety.com", "sales@sasnetsafety.com"],
      color: "success",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: ["+966 54 406 5093", "+966 51 051 6139"],
      color: "info",
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 5:00 PM", "Friday: Closed"],
      color: "warning",
    },
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
                Ready to start your next project? Contact us today and let's
                discuss how we can help transform your business.
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
                    <div className="contact-info-icon">{info.icon}</div>
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
                  <p>
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                {showAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="custom-alert success"
                  >
                    <div className="alert-content">
                      <Send size={20} />
                      <span>
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  </motion.div>
                )}

                <Form onSubmit={handleSubmit}>
                  {/* Optional honeypot field in DOM (also appended in code) */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

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
