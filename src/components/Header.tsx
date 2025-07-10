'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '10px 20px' : '20px',
        transition: 'all 0.3s ease',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <motion.div
          style={{
            fontSize: isScrolled ? '1.5rem' : '2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #2c3e50 0%, #5f9ea0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'font-size 0.3s ease',
          }}
          whileHover={{ scale: 1.05 }}
        >
          Mirchumal Chothmal
        </motion.div>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
        }}>
          {['home', 'about', 'items', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                background: 'none',
                border: 'none',
                color: '#2c3e50',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 16px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                backgroundColor: 'rgba(135, 206, 235, 0.2)',
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
} 