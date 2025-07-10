'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  category: string;
  imageUrl: string;
  description: string;
}

export default function ProductCard({ name, category, imageUrl, description }: ProductCardProps) {
  const handleEnquire = () => {
    // You can customize this to open a contact form, WhatsApp, or phone call
    const message = `Hi, I'm interested in ${name} (${category}). Please provide pricing and availability.`;
    const whatsappUrl = `https://wa.me/918000398836?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="card"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        borderRadius: '15px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(135, 206, 235, 0.9)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '15px',
          fontSize: '0.8rem',
          fontWeight: '500',
        }}>
          {category}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#2c3e50',
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '20px',
          }}>
            {description}
          </p>
        </div>

        <motion.button
          onClick={handleEnquire}
          style={{
            background: 'linear-gradient(135deg, #87ceeb 0%, #5f9ea0 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(135, 206, 235, 0.3)',
            transition: 'all 0.3s ease',
            alignSelf: 'center',
          }}
          whileHover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(135, 206, 235, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Enquire Now
        </motion.button>
      </div>
    </motion.div>
  );
} 