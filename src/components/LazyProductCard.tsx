'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LazyProductCardProps {
  name: string;
  category: string;
  imageUrl: string;
  description: string;
}

export default function LazyProductCard({ name, category, imageUrl, description }: LazyProductCardProps) {
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEnquire = () => {
    const message = `Hi, I'm interested in ${name} (${category}). Please provide pricing and availability.`;
    const whatsappUrl = `https://wa.me/918000398836?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      className="product-card"
      style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        rotateY: 2,
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '25px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        background: '#f1f5f9',
      }}>
        {isInView && (
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setImageLoaded(true)}
            priority={false}
            loading="lazy"
          />
        )}

        {/* Loading placeholder */}
        {!imageLoaded && isInView && (
          <div className="shimmer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }} />
        )}

        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
          color: 'white',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(96, 165, 250, 0.3)',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
        }}>
          {category}
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3))',
          zIndex: 1,
        }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#1e293b',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.3',
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '25px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400',
          }}>
            {description}
          </p>
        </div>

        <motion.button
          onClick={handleEnquire}
          style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
            color: 'white',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'Poppins, sans-serif',
          }}
          whileHover={{
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(96, 165, 250, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            Enquire Now
          </span>
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: -100,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            }}
            whileHover={{ x: 200 }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
} 