'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4fd 25%, #f0f8ff 50%, #e6f3ff 75%, #f5f9ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{ textAlign: 'center' }}>
        <motion.div
          style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(96, 165, 250, 0.2)',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            margin: '0 auto 20px',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h2
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1e293b',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '10px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mirchumal Chothmal
        </motion.h2>
        <motion.p
          style={{
            color: '#64748b',
            fontSize: '1rem',
            fontFamily: 'Poppins, sans-serif',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading your premium experience...
        </motion.p>
      </div>
    </div>
  );
} 