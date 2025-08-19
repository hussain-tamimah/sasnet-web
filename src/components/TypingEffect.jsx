// src/components/TypingEffect.jsx
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ 
  strings, 
  typeSpeed = 80, 
  backSpeed = 60, 
  delay = 2000,
  className = "typed-text"
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        } else {
          // Move to next string
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentStringIndex, isDeleting, strings, typeSpeed, backSpeed, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingEffect;
