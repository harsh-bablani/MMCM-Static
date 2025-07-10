'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: "🛒",
    title: "Wholesale Distribution",
    description: "Bulk supply of premium kiryana items and dry fruits to retailers, restaurants, and institutions at competitive wholesale prices.",
    features: ["Bulk pricing", "Regular supply", "Quality assurance", "Flexible payment terms"]
  },
  {
    icon: "🚚",
    title: "Delivery Services",
    description: "Reliable delivery services to your doorstep with careful handling and timely delivery across Nohar and surrounding areas.",
    features: ["Same day delivery", "Careful handling", "Tracking system", "Free delivery on bulk orders"]
  },
  {
    icon: "📦",
    title: "Custom Packaging",
    description: "Professional packaging solutions for retail and gift purposes with branded packaging options available.",
    features: ["Retail packaging", "Gift packaging", "Branded options", "Bulk packaging"]
  },
  {
    icon: "🔍",
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensuring only the finest products reach our customers with proper certifications.",
    features: ["Quality testing", "Freshness guarantee", "Certified products", "Regular inspections"]
  },
  {
    icon: "💼",
    title: "Business Solutions",
    description: "Comprehensive business solutions for retailers including inventory management and business consultation.",
    features: ["Inventory support", "Business consultation", "Market insights", "Growth strategies"]
  },
  {
    icon: "🎯",
    title: "Special Orders",
    description: "Custom orders and special requirements fulfilled with personalized attention to meet specific customer needs.",
    features: ["Custom orders", "Special requirements", "Personalized service", "Flexible solutions"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '60px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.7',
            fontFamily: 'Poppins, sans-serif',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We provide comprehensive wholesale and retail solutions for all your kiryana and dry fruit needs.
          From bulk supply to personalized services, we ensure quality and satisfaction in every transaction.
        </motion.p>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card"
              style={{
                textAlign: 'center',
                padding: '40px 30px',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                transform: 'translateY(-8px) scale(1.02)',
              }}
            >
              {/* Service Icon */}
              <motion.div
                style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                  display: 'block',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#1e293b',
                fontFamily: 'Playfair Display, serif',
              }}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '25px',
                fontFamily: 'Poppins, sans-serif',
              }}>
                {service.description}
              </p>

              {/* Service Features */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid rgba(96, 165, 250, 0.1)',
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#3b82f6',
                  fontFamily: 'Poppins, sans-serif',
                }}>
                  Key Features:
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left',
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      style={{
                        fontSize: '0.9rem',
                        color: '#64748b',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '2px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                      }} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(96, 165, 250, 0.1)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '15px',
            color: '#1e293b',
            fontFamily: 'Playfair Display, serif',
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '30px',
            fontFamily: 'Poppins, sans-serif',
          }}>
            Contact us today to discuss your requirements and get the best wholesale prices
          </p>
          <motion.button
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Quote Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 