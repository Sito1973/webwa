import React, { useState, useEffect } from 'react';
import { GrainGradient, MeshGradient, PulsingBorder } from '@paper-design/shaders-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, 
  Zap, 
  Brain, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  BarChart3,
  Smartphone,
  Play,
  Rocket,
  MessageCircle,
  Check
} from 'lucide-react';

function App() {
  // Estado para controlar las animaciones del chat
  const [animationKey, setAnimationKey] = useState(0);
  
  // Refs for scroll animations
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const pricingRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });

  // Efecto para repetir la animación con pausa de 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 9800); // 4.8s (última animación completa) + 5s (pausa) = 9.8s total

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Mensajes del agente (desde la izquierda)
  const messageReceivedVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Mensajes del usuario (desde la derecha)
  const messageSentVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <GrainGradient
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
          colorBack="hsla(0, 0%, 0%, 1)"
          softness={1.2}
          intensity={0.45}
          noise={1.2}
          shape="corners"
          offsetX={0.3}
          offsetY={0.4}
          scale={1.5}
          rotation={15}
          speed={0.8}
          colors={[
            "hsla(0, 0%, 0%, 1)",
            "hsla(142, 70%, 49%, 1)",
            "hsla(94, 78%, 87%, 1)",
            "hsla(32, 28%, 90%, 1)"
          ]}
        />
        
        <div className="hero-content">
          <motion.div className="hero-text" variants={textVariants}>
            <motion.h1 variants={textVariants}>
              <Bot className="inline-block mr-3" size={48} strokeWidth={2} />
              Agente IA para <span style={{color: 'var(--malachite)'}}>WhatsApp</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={textVariants}>
              Automatiza la atención al cliente de tu empresa con inteligencia artificial avanzada
            </motion.p>
            <motion.p className="hero-description" variants={textVariants}>
              Conecta directamente con tus clientes a través de <span style={{color: 'var(--malachite)'}}>WhatsApp Business</span> con respuestas instantáneas, 
              inteligentes y personalizadas las 24 horas del día.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={textVariants}>
              <motion.button 
                className="cta-button primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 211, 102, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Smartphone className="inline-block mr-2" size={20} />
                Prueba Gratis
              </motion.button>
              <motion.button 
                className="cta-button secondary"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Play className="inline-block mr-2" size={20} />
                Ver Demo
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div className="hero-image" variants={phoneVariants}>
            <div className="phone-mockup">
              <div className="whatsapp-chat">
                <motion.div className="chat-header">
                  <motion.div 
                    className="avatar"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                  >
                    <Bot size={24} color="white" strokeWidth={2} />
                  </motion.div>
                  <div className="chat-info">
                    <div className="name">Agente IA</div>
                    <motion.div 
                      className="status"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >En línea</motion.div>
                  </div>
                </motion.div>
                <div className="chat-messages">
                  <motion.div 
                    key={`received-1-${animationKey}`}
                    className="message received"
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 1.8,
                      duration: 0.6, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
                  </motion.div>
                  <motion.div 
                    key={`sent-1-${animationKey}`}
                    className="message sent"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 2.8,
                      duration: 0.6, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    Quiero información sobre sus productos
                  </motion.div>
                  <motion.div 
                    key={`received-2-${animationKey}`}
                    className="message received"
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 4.2,
                      duration: 0.6, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    ¡Perfecto! Te comparto nuestro catálogo completo con precios actualizados...
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        className="features-section"
        ref={featuresRef}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ¿Por qué elegir nuestro Agente IA?
          </motion.h2>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Zap size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Respuestas Instantáneas</h3>
              <p>Atiende a tus clientes al instante, sin esperas ni horarios limitados</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Brain size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Inteligencia Avanzada</h3>
              <p>Comprende el contexto y proporciona respuestas precisas y personalizadas</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Briefcase size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Integración Empresarial</h3>
              <p>Conecta con tu CRM, inventario y sistemas de ventas existentes</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <TrendingUp size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Aumenta tus Ventas</h3>
              <p>Convierte más conversaciones en ventas con seguimiento automatizado</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Globe size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Multiidioma</h3>
              <p>Atiende clientes en español, inglés y otros idiomas automáticamente</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <BarChart3 size={32} color="var(--malachite)" strokeWidth={2} />
              </motion.div>
              <h3>Analytics Completos</h3>
              <p>Obtén insights valiosos sobre tus clientes y conversaciones</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        className="benefits-section"
        ref={benefitsRef}
        style={{ position: 'relative', padding: 0, margin: 0 }}
      >
        <PulsingBorder
          style={{ 
            width: '100%', 
            height: '600px',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
          colorBack="hsl(0, 0%, 0%)"
          roundness={0}
          thickness={0.2}
          softness={0.75}
          intensity={0.3}
          bloom={0.6}
          spots={4}
          spotSize={0.5}
          pulse={0.3}
          smoke={0.4}
          smokeSize={0.8}
          scale={0.8}
          rotation={0}
          offsetX={0}
          offsetY={0}
          speed={0.8}
          colors={[
            "hsl(142, 70%, 49%)",
            "hsl(94, 78%, 87%)",
            "hsl(32, 28%, 90%)"
          ]}
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '600px',
              textAlign: 'center',
              color: 'white',
              padding: '4rem 2rem',
              transform: 'translateY(-80px)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                marginBottom: '3rem',
                color: 'white',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
                maxWidth: '800px'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={benefitsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transforma tu atención al cliente
            </motion.h2>
            
            <motion.div
              style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                width: '100%'
              }}
              initial={{ opacity: 0 }}
              animate={benefitsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 255, 255, 0.15)' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check size={32} color="var(--malachite)" strokeWidth={3} />
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ 
                    margin: 0, 
                    marginBottom: '0.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                  }}>
                    Reduce costos operativos hasta 70%
                  </h3>
                  <p style={{ 
                    margin: 0,
                    fontSize: '1rem',
                    opacity: 0.9,
                    textShadow: '0 1px 5px rgba(0,0,0,0.7)'
                  }}>
                    Menos personal necesario para atención al cliente
                  </p>
                </div>
              </motion.div>

              <motion.div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 255, 255, 0.15)' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check size={32} color="var(--malachite)" strokeWidth={3} />
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ 
                    margin: 0, 
                    marginBottom: '0.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                  }}>
                    Aumenta satisfacción del cliente
                  </h3>
                  <p style={{ 
                    margin: 0,
                    fontSize: '1rem',
                    opacity: 0.9,
                    textShadow: '0 1px 5px rgba(0,0,0,0.7)'
                  }}>
                    Respuestas inmediatas y precisas 24/7
                  </p>
                </div>
              </motion.div>

              <motion.div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 255, 255, 0.15)' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check size={32} color="var(--malachite)" strokeWidth={3} />
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ 
                    margin: 0, 
                    marginBottom: '0.5rem',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                  }}>
                    Escala sin límites
                  </h3>
                  <p style={{ 
                    margin: 0,
                    fontSize: '1rem',
                    opacity: 0.9,
                    textShadow: '0 1px 5px rgba(0,0,0,0.7)'
                  }}>
                    Atiende miles de conversaciones simultáneas
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div 
        className="pricing-section"
        ref={pricingRef}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Planes que se adaptan a tu negocio
          </motion.h2>
          
          <motion.div 
            className="pricing-grid"
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="pricing-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="plan-name">Básico</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <motion.span 
                  className="amount"
                  initial={{ scale: 0 }}
                  animate={pricingInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >49</motion.span>
                <span className="period">/mes</span>
              </div>
              <ul className="plan-features">
                <li>✅ 1,000 conversaciones/mes</li>
                <li>✅ Respuestas básicas de IA</li>
                <li>✅ Integración WhatsApp</li>
                <li>✅ Soporte por email</li>
              </ul>
              <motion.button 
                className="plan-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Comenzar</motion.button>
            </motion.div>
            
            <motion.div 
              className="pricing-card featured"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 25px 50px rgba(37, 211, 102, 0.3)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="plan-badge"
                initial={{ y: -20, opacity: 0 }}
                animate={pricingInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ delay: 0.3 }}
              >Más Popular</motion.div>
              <div className="plan-name">Profesional</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <motion.span 
                  className="amount"
                  initial={{ scale: 0 }}
                  animate={pricingInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >149</motion.span>
                <span className="period">/mes</span>
              </div>
              <ul className="plan-features">
                <li>✅ 5,000 conversaciones/mes</li>
                <li>✅ IA avanzada personalizada</li>
                <li>✅ Integración CRM</li>
                <li>✅ Analytics completos</li>
                <li>✅ Soporte prioritario</li>
              </ul>
              <motion.button 
                className="plan-button"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >Comenzar</motion.button>
            </motion.div>
            
            <motion.div 
              className="pricing-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="plan-name">Empresarial</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <motion.span 
                  className="amount"
                  initial={{ scale: 0 }}
                  animate={pricingInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >399</motion.span>
                <span className="period">/mes</span>
              </div>
              <ul className="plan-features">
                <li>✅ Conversaciones ilimitadas</li>
                <li>✅ IA personalizada completa</li>
                <li>✅ Integraciones múltiples</li>
                <li>✅ Dedicated manager</li>
                <li>✅ SLA garantizado</li>
              </ul>
              <motion.button 
                className="plan-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >Contactar</motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para revolucionar tu atención al cliente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Únete a más de 500 empresas que ya confían en nuestro Agente IA
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="cta-button primary large"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(37, 211, 102, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Rocket className="inline-block mr-2" size={20} />
              Comenzar Prueba Gratuita
            </motion.button>
            <motion.button 
              className="cta-button secondary large"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.25)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <MessageCircle className="inline-block mr-2" size={20} />
              Hablar con un Experto
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>
                <Bot className="inline-block mr-2" size={24} />
                Agente IA
              </h3>
              <p>La solución de IA para <span style={{color: 'var(--malachite)'}}>WhatsApp</span> que transforma tu negocio</p>
            </div>
            <div className="footer-section">
              <h4>Producto</h4>
              <ul>
                <li><a href="#features">Características</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#demo">Demo</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Soporte</h4>
              <ul>
                <li><a href="#help">Centro de Ayuda</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#api">API Docs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#careers">Carreras</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Agente IA <span style={{color: 'var(--malachite)'}}>WhatsApp</span>. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;