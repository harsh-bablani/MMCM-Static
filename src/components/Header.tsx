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
        padding: isScrolled ? '12px 20px' : '20px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
            fontSize: isScrolled ? '1.6rem' : '2.2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'font-size 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-0.02em',
          }}
          whileHover={{ scale: 1.05 }}
        >
          Mirchumal Chothmal
        </motion.div>

        <div style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center',
        }}>
          {['home', 'about', 'items', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1e293b',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '10px 18px',
                borderRadius: '25px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontFamily: 'Poppins, sans-serif',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                backgroundColor: 'rgba(96, 165, 250, 0.1)',
                scale: 1.05,
                color: '#3b82f6',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  transform: 'scaleX(0)',
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
} 