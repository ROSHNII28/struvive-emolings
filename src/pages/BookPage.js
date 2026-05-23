import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
const BookPage = () => {
  const [form, setForm] = useState({ name: '', email: '', session: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* ── HERO ── */}
      <section style={{ padding: '140px 2rem 60px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Central warm blur effect mirroring your core layout styles */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '350px',
          background: 'radial-gradient(circle, rgba(221,183,176,0.10) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1, pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Begin Your Journey</SectionLabel>
          </div>
          <h1 style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
            fontWeight: 600, 
            color: C.plum, 
            lineHeight: 1.2, 
            marginBottom: '1.2rem' 
          }}>
            Book a Session
          </h1>
          <p style={{ 
            fontFamily: 'Manrope, sans-serif', 
            fontSize: '1rem', 
            color: C.mauve, 
            lineHeight: 1.9, 
            maxWidth: '520px', 
            margin: '0 auto' 
          }}>
            You've taken the first brave step. Choose a framework that feels right, and we will create a dedicated space just for you.
          </p>
        </motion.div>
      </section>

      {/* ── CALENDLY INTERACTION WRAPPER ── */}
      <section style={{ padding: '20px 2rem 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: C.surface,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${C.border}`,
              borderRadius: '12px',
              overflow: 'hidden',
              padding: '2.5rem 2rem',
              boxShadow: '0 2px 40px rgba(61,43,56,0.06)',
            }}
          >
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.7rem', color: C.plum, fontWeight: 600, marginBottom: '0.4rem' }}>
                Choose Your Time
              </h2>
              <p style={{ fontFamily: 'Manrope', fontSize: '0.85rem', color: C.mauve }}>
                Select a session type and a time window that suits your personal rhythm.
              </p>
            </div>

            {/* Custom Premium Outlined Placeholder Block */}
            <div style={{
              background: 'rgba(255,253,252,0.4)',
              border: `1.5px dashed ${C.plum}`,
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}>
              <div style={{ fontSize: '2.5rem' }}>📅</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: C.plum, fontWeight: 600 }}>
                Live Scheduler System
              </div>
              <p style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve, maxWidth: '440px', lineHeight: 1.75 }}>
                To integrate live calendar automation, replace this block configuration with your native Calendly embed token:
                <br />
                <code style={{ 
                  background: 'rgba(28,25,23,0.05)', 
                  padding: '6px 12px', 
                  borderRadius: '4px', 
                  fontSize: '0.76rem', 
                  color: C.charcoal, 
                  display: 'block', 
                  marginTop: '0.8rem',
                  fontFamily: 'monospace',
                  textAlign: 'left',
                  border: '1px solid rgba(28,25,23,0.08)'
                }}>
                  {`<!-- Calendly inline widget -->`}<br />
                  {`<div class="calendly-inline-widget"`}<br />
                  {`  data-url="https://calendly.com/YOUR_LINK"`}<br />
                  {`  style="min-width:320px;height:630px;">`}<br />
                  {`</div>`}
                </code>
              </p>

              <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, background: 'rgba(28,25,23,0.06)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  border: `1.5px solid ${C.plum}`,
                  borderRadius: '6px',
                  padding: '10px 24px',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: C.plum,
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                  transition: 'all 0.2s',
                }}
              >
                Configure Link Access
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BACKUP INTENTION FORM ── */}
      <section style={{ padding: '0 2rem 100px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: C.surface,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${C.border}`,
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 2px 40px rgba(61,43,56,0.06)',
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
                    Your Intention Was Received
                  </h3>
                  <p style={{ fontFamily: 'Manrope', fontSize: '0.9rem', color: C.mauve, lineHeight: 1.85 }}>
                    Thank you for connecting. We will review your selection and respond within 24 hours with warmth and deep care. You've taken a beautiful step today.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <div style={{ marginBottom: '1.8rem' }}>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: C.plum, fontWeight: 600, marginBottom: '0.4rem' }}>
                      Send an Inquiry Instead
                    </h2>
                    <p style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve }}>
                      Share a little about yourself and what framework brings you to this sanctuary.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {[
                      { key: 'name', label: 'Your Name', type: 'text', placeholder: 'What shall we call you?' },
                      { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
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
                      <label style={{ display: 'block', fontFamily: 'Manrope', fontSize: '0.78rem', fontWeight: 600, color: C.plum, marginBottom: '#0.4rem' }}>
                        Session Support Framework
                      </label>
                      <select
                        value={form.session}
                        onChange={e => setForm({ ...form, session: e.target.value })}
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
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onFocus={e => e.target.style.borderColor = C.rose}
                        onBlur={e => e.target.style.borderColor = C.plum}
                      >
                        <option value="" style={{ color: C.sage }}>Select a pathway...</option>
                        <option value="anxiety">Anxiety Support Framework</option>
                        <option value="healing">Emotional Healing Alchemy</option>
                        <option value="stress">Nervous System Regulation</option>
                        <option value="student">Student Growth Counseling</option>
                        <option value="relationship">Relational Healing Patterns</option>
                        <option value="selfesteem">Self-Worth & Confidence Expansion</option>
                        <option value="mindfulness">Mindfulness Integration Wellness</option>
                        <option value="discovery">Unsure / General Intake Evaluation</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'Manrope', fontSize: '0.78rem', fontWeight: 600, color: C.plum, marginBottom: '0.4rem' }}>
                        What Is Trending On Your Heart? <span style={{ color: C.sage, fontWeight: 400 }}>(optional)</span>
                      </label>
                      <textarea
                        placeholder="Share as little or as much as you feel completely comfortable with..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4}
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

                    {/* Charcoal Primary Solid Button matching system metrics */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, backgroundColor: C.charcoalHov }}
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
                        marginTop: '0.5rem',
                      }}
                    >
                      Send with Care <ArrowRight size={15} />
                    </motion.button>

                    <p style={{ fontFamily: 'Manrope', fontSize: '0.75rem', color: C.sage, textAlign: 'center', marginTop: '0.5rem' }}>
                      All shared dynamics remain strictly private and protected.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BookPage;