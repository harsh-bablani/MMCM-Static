'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  price?: string;
}

export default function ProductCard({ name, category, imageUrl, description, price }: ProductCardProps) {
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
            marginBottom: '15px',
          }}>
            {description}
          </p>
        </div>

        {price && (
          <div style={{
            background: 'linear-gradient(135deg, #87ceeb 0%, #5f9ea0 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '1.1rem',
            fontWeight: '600',
            alignSelf: 'center',
          }}>
            {price}
          </div>
        )}
      </div>
    </motion.div>
  );
} 