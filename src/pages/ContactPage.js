import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Twitter } from 'lucide-react';
import { useState } from 'react';

// ─── Design Tokens (Identical to Homepage System) ───────────────────────────
const C = {
  charcoal:    '#1C1917',   // primary button bg
  charcoalHov: '#292524',   // hover
  ivory:       '#FFFDFC',
  rose:        '#DDB7B0',
  gold:        '#D6BE8A',
  sage:        '#B8C4B2',
  plum:        '#3D2B38',
  mauve:       '#9B7A8A',
  surface:     'rgba(255,253,252,0.72)',
  border:      'rgba(221,183,176,0.18)',
};

// ─── Shared Section Label Primitive ─────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '12px',
    fontFamily: 'Manrope', fontSize: '0.7rem',
    letterSpacing: '0.18em', color: C.sage, textTransform: 'uppercase',
    marginBottom: '1rem',
  }}>
    <div style={{ width: '24px', height: '1px', background: C.sage }} />
    {children}
  </div>
);

// ─── Page Component ──────────────────────────────────────────────────────────
const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* ── HERO ── */}
      <section style={{ 
        padding: '140px 2rem 80px', 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>We Are Here For You</SectionLabel>
          </div>
          <h1 style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 600, 
            color: C.plum, 
            lineHeight: 1.2, 
            marginBottom: '1.2rem' 
          }}>
            Reach Out
          </h1>
          <p style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: '1rem', 
            color: C.mauve, 
            lineHeight: 1.9, 
            maxWidth: '520px', 
            margin: '0 auto' 
          }}>
            Whether you have a question, need support, or simply want to say hello — our door is always open with warmth.
          </p>
        </motion.div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section style={{ padding: '20px 2rem 100px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            
            {/* Left Column: Info Blocks */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontSize: '2rem', 
                  color: C.plum, 
                  fontWeight: 600, 
                  marginBottom: '1.5rem' 
                }}>
                  Let's Connect
                </h2>

                {[
                  { Icon: Mail, label: 'Email Us', value: 'hello@struviveemolings.com', sub: 'We respond within 24 hours' },
                  { Icon: Clock, label: 'Availability', value: 'Mon–Fri, 9am–6pm', sub: 'Online sessions available' },
                  { Icon: MapPin, label: 'Location', value: 'Healing happens everywhere', sub: 'Virtual & in-person sessions' },
                ].map(({ Icon, label, value, sub }) => (
                  <div key={label} style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    background: C.surface,
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${C.border}`,
                    borderLeft: `3px solid ${C.rose}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '1.2rem',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '8px',
                      background: 'rgba(28,25,23,0.05)',
                      border: '1px solid rgba(28,25,23,0.10)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      color: C.plum,
                    }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.sage, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        {label}
                      </div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: C.plum, fontWeight: 600, marginBottom: '0.1rem' }}>
                        {value}
                      </div>
                      <div style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve }}>
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Block */}
                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{ fontFamily: 'Manrope', fontSize: '0.7rem', letterSpacing: '0.12em', color: C.sage, textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Follow Our Journey
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    {[
                      { Icon: Instagram, label: '@struviveemolings' },
                      { Icon: Facebook, label: 'Struvive Emolings' },
                      { Icon: Twitter, label: '@struvive' },
                    ].map(({ Icon, label }) => (
                      <motion.a
                        key={label}
                        href="#"
                        whileHover={{ scale: 1.05, background: 'rgba(28,25,23,0.06)' }}
                        title={label}
                        style={{
                          width: '42px', height: '42px', borderRadius: '6px',
                          background: 'transparent',
                          border: `1.5px solid ${C.plum}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: C.plum,
                          transition: 'all 0.2s',
                        }}
                      >
                        <Icon size={17} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quote block matching homepage style */}
                <div style={{
                  marginTop: '2.5rem',
                  background: 'rgba(248,243,240,0.55)',
                  border: `1px solid ${C.border}`,
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: C.plum,
                    lineHeight: 1.8,
                  }}>
                    "You don't have to be in crisis to deserve support. Reaching out is a profound act of self-love."
                  </div>
                  <div style={{ fontFamily: 'Manrope', fontSize: '0.75rem', color: C.sage, marginTop: '0.8rem', letterSpacing: '0.05em' }}>
                    — DR. AMARA LINDEN
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Form Module */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: C.surface,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${C.border}`,
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 2px 40px rgba(61,43,56,0.08)',
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: 'center', padding: '2rem 0' }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌸</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: C.plum, fontWeight: 600, marginBottom: '1rem' }}>
                      Message Received
                    </h3>
                    <p style={{ fontFamily: 'Manrope', fontSize: '0.9rem', color: C.mauve, lineHeight: 1.85 }}>
                      Thank you for reaching out. Your message has been received with care. We will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: C.plum, fontWeight: 600, marginBottom: '0.4rem' }}>
                      Send a Message
                    </h3>
                    <p style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve, marginBottom: '1.8rem' }}>
                      All messages are received with warmth and complete confidentiality.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      {[
                        { key: 'name', label: 'Your Name', type: 'text', placeholder: 'How should we address you?' },
                        { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                        { key: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
                      ].map(field => (
                        <div key={field.key}>
                          <label style={{ display: 'block', fontFamily: 'Manrope', fontSize: '0.78rem', fontWeight: 600, color: C.plum, marginBottom: '0.4rem' }}>
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={form[field.key]}
                            onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                            required
                            style={{
                              width: '100%',
                              background: 'rgba(255,253,252,0.5)',
                              border: `1.5px solid ${C.plum}`,
                              borderRadius: '6px',
                              padding: '12px 15px',
                              fontFamily: 'Manrope, sans-serif',
                              fontSize: '0.88rem',
                              color: C.charcoal,
                              outline: 'none',
                              transition: 'all 0.2s',
                            }}
                            onFocus={e => {
                              e.target.style.background = C.ivory;
                              e.target.style.borderColor = C.rose;
                            }}
                            onBlur={e => {
                              e.target.style.background = 'rgba(255,253,252,0.5)';
                              e.target.style.borderColor = C.plum;
                            }}
                          />
                        </div>
                      ))}
                      
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Manrope', fontSize: '0.78rem', fontWeight: 600, color: C.plum, marginBottom: '0.4rem' }}>
                          Your Message
                        </label>
                        <textarea
                          placeholder="Share what's on your heart..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          rows={5}
                          required
                          style={{
                            width: '100%',
                            background: 'rgba(255,253,252,0.5)',
                            border: `1.5px solid ${C.plum}`,
                            borderRadius: '6px',
                            padding: '12px 15px',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '0.88rem',
                            color: C.charcoal,
                            outline: 'none',
                            resize: 'vertical',
                            lineHeight: 1.7,
                            transition: 'all 0.2s',
                          }}
                          onFocus={e => {
                            e.target.style.background = C.ivory;
                            e.target.style.borderColor = C.rose;
                          }}
                          onBlur={e => {
                            e.target.style.background = 'rgba(255,253,252,0.5)';
                            e.target.style.borderColor = C.plum;
                          }}
                        />
                      </div>

                      {/* Primary Solid Charcoal Action Button matching homepage style */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03, backgroundColor: C.charcoalHov }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          background: C.charcoal,
                          color: C.ivory,
                          border: 'none',
                          borderRadius: '6px',
                          padding: '14px',
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          letterSpacing: '0.03em',
                          cursor: 'pointer',
                          transition: 'background 0.2s',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          marginTop: '0.4rem',
                        }}
                      >
                        Send with Love <ArrowRight size={15} />
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;