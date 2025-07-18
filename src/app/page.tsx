'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/LoadingSpinner';
import LazyBackground3D from '../components/LazyBackground3D';
import Header from '../components/Header';
import LazyProductCard from '../components/LazyProductCard';
import ServicesSection from '../components/ServicesSection';

// Lazy load heavy components
const LazyHeader = dynamic(() => import('../components/Header'), {
  ssr: true,
  loading: () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      zIndex: 1000,
    }} />
  ),
});

const products = [
  {
    name: "Premium Almonds",
    category: "Dry Fruits",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Premium quality almonds, rich in nutrients and perfect for healthy snacking."
  },
  {
    name: "Organic Cashews",
    category: "Dry Fruits",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Organic cashews with natural sweetness and creamy texture."
  },
  {
    name: "Golden Raisins",
    category: "Dry Fruits",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Sweet and nutritious golden raisins, perfect for desserts and snacking."
  },
  {
    name: "Premium Walnuts",
    category: "Dry Fruits",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Brain-boosting walnuts with rich omega-3 fatty acids."
  },
  {
    name: "Toor Dal",
    category: "Pulses",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "High-quality toor dal, essential for traditional Indian cooking."
  },
  {
    name: "Moong Dal",
    category: "Pulses",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Nutritious moong dal, perfect for healthy meals and soups."
  },
  {
    name: "Chana Dal",
    category: "Pulses",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Protein-rich chana dal, ideal for various Indian dishes."
  },
  {
    name: "Masoor Dal",
    category: "Pulses",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Quick-cooking masoor dal, perfect for everyday meals."
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure fonts are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Preload critical fonts
    const fontLoader = document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <LazyBackground3D />
      <LazyHeader />

      {/* Hero Section */}
      <section id="home" className="section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px'
      }}>
        <motion.div
          className="glass"
          style={{
            textAlign: 'center',
            padding: '60px 40px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{
              fontSize: '4rem',
              fontWeight: '700',
              marginBottom: '25px',
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Mirchumal Chothmal
          </motion.h1>
          <motion.h2
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              marginBottom: '20px',
              color: '#3b82f6',
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '0.02em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Premium Kiryana & Dry-Fruits Wholesaler
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1.3rem',
              color: '#64748b',
              marginBottom: '35px',
              fontStyle: 'italic',
              fontFamily: 'Playfair Display, serif',
              fontWeight: '400',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            श्री गणेशाय नमः • Quality Since 1985
          </motion.p>
          <motion.button
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('items')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Products
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>

          <div className="grid grid-2">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1e293b' }}>
                Our Story
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555' }}>
                Established in 1985, Mirchumal Chothmal has been serving the community of Nohar with
                the finest quality kiryana items and dry fruits. Our commitment to quality, authenticity,
                and customer satisfaction has made us the trusted name in wholesale grocery business.
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1e293b' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555' }}>
                To provide premium quality products at competitive wholesale prices, ensuring that
                every customer gets the best value for their money while maintaining the highest
                standards of quality and service.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="card"
            style={{ marginTop: '40px' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1e293b', textAlign: 'center' }}>
              Our Team
            </h3>
            <div className="grid grid-3">
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}>
                  GB
                </div>
                <h4 style={{ marginBottom: '5px', color: '#1e293b' }}>Gorishankar Bablani</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Owner</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}>
                  MB
                </div>
                <h4 style={{ marginBottom: '5px', color: '#1e293b' }}>Mirchumal Bablani</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>CEO</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}>
                  GB
                </div>
                <h4 style={{ marginBottom: '5px', color: '#1e293b' }}>Gourav Bablani</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Items Section */}
      <section id="items" className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Premium Products
          </motion.h2>

          <div className="grid grid-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LazyProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>

          <div className="grid grid-2">
            <motion.div
              className="card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1e293b' }}>
                Get In Touch
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📍 Address</h4>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Mirchumal Chothmal Sindhi Bazar, Nohar, Rajasthan 335523
                </p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📞 Phone</h4>
                <a href="tel:+918000398836" style={{ color: '#555', textDecoration: 'none' }}>
                  +91 8000398836
                </a>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>✉️ Email</h4>
                <a href="mailto:mmcm1601@gmail.com" style={{ color: '#555', textDecoration: 'none' }}>
                  mmcm1601@gmail.com
                </a>
              </div>
              <div>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>📍 Location</h4>
                <a
                  href="https://maps.app.goo.gl/jDDmaydchKJGs3hX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#555', textDecoration: 'none' }}
                >
                  View on Google Maps →
                </a>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1e293b' }}>
                Business Hours
              </h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>🕒 Monday - Saturday</h4>
                <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500' }}>
                  8:00 AM - 8:00 PM
                </p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#3b82f6', marginBottom: '10px' }}>🕒 Sunday</h4>
                <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500' }}>
                  8:00 AM - 1:00 PM
                </p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                color: 'white',
                padding: '20px',
                borderRadius: '15px',
                textAlign: 'center',
                marginTop: '20px',
              }}>
                <h4 style={{ marginBottom: '10px' }}>🚚 Wholesale Orders</h4>
                <p>Special pricing for bulk orders and retailers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '60px',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
            Mirchumal Chothmal
          </h3>
          <p style={{ marginBottom: '20px', opacity: 0.9 }}>
            Your trusted partner for premium kiryana and dry fruits since 1985
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
            <p style={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Mirchumal Chothmal. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
