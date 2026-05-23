import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Design tokens (Identical to Homepage System) ───────────────────────────
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

// ─── Button Primitives ──────────────────────────────────────────────────────
const BtnPrimary = ({ children, style = {}, ...rest }) => (
  <motion.button
    whileHover={{ scale: 1.03, backgroundColor: C.charcoalHov }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: C.charcoal,
      color: C.ivory,
      border: 'none',
      borderRadius: '6px',
      padding: '13px 30px',
      fontFamily: 'Manrope, sans-serif',
      fontSize: '0.88rem',
      fontWeight: 600,
      letterSpacing: '0.03em',
      cursor: 'pointer',
      transition: 'background 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style,
    }}
    {...rest}
  >
    {children}
  </motion.button>
);

const BtnOutline = ({ children, style = {}, ...rest }) => (
  <motion.button
    whileHover={{ scale: 1.03, background: 'rgba(28,25,23,0.06)', borderColor: C.charcoal, color: C.charcoal }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: 'transparent',
      border: `1.5px solid ${C.plum}`,
      borderRadius: '6px',
      padding: '12px 28px',
      fontFamily: 'Manrope, sans-serif',
      fontSize: '0.88rem',
      fontWeight: 500,
      color: C.plum,
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      ...style,
    }}
    {...rest}
  >
    {children}
  </motion.button>
);

// ─── Data Arrays ────────────────────────────────────────────────────────────
const values = [
  { icon: '🕊️', title: 'Compassion First', desc: 'Every session begins with deep, unconditional empathy and zero judgment.' },
  { icon: '🔑', title: 'Emotional Alchemy', desc: 'We believe pain, when witnessed with love, transforms into profound wisdom.' },
  { icon: '🌿', title: 'Safe Sanctuary', desc: 'Your emotional world is sacred here — held with the utmost care and confidentiality.' },
  { icon: '✨', title: 'Empowered Growth', desc: 'We walk beside you — never ahead — as you discover your own inner strength.' },
];

const stats = [
  { number: '12 yrs', label: 'In Practice' },
  { number: '500+', label: 'Clients Supported' },
  { number: '98%', label: 'Would Recommend' },
  { number: '3 Key', label: 'Therapy Modalities' },
];

const testimonial = {
  quote: 'Working with Amara was the turning point I never knew I needed. For the first time in years, I felt truly seen — not fixed, just understood.',
  author: 'A. Patel',
  role: 'Client',
};

// ─── Page Component ──────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 2rem 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle background layouts */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(184,196,178,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(184,196,178,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />
        
        <div style={{
          position: 'absolute', top: '5%', right: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(221,183,176,0.08) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 1, pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionLabel>Our Philosophy</SectionLabel>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: 600,
              color: C.plum,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              The Art of<br />
              <span style={{ color: C.rose }}>Emotional Alchemy</span>
            </h1>

            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1rem',
              color: C.mauve,
              lineHeight: 1.9,
              maxWidth: '640px',
              margin: '0 auto 2.5rem',
            }}>
              We believe every emotion — no matter how overwhelming — carries a hidden message,
              a gift waiting to be unwrapped with patience and love. Emotional alchemy is the
              sacred process of turning your pain into your greatest power.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/book">
                <BtnPrimary>
                  Book a Session <ArrowRight size={15} />
                </BtnPrimary>
              </Link>
              <Link to="/services">
                <BtnOutline>
                  Explore Services <ChevronRight size={15} />
                </BtnOutline>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <section style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '32px 2rem',
        background: 'rgba(255,253,252,0.6)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.4rem',
                fontWeight: 600,
                color: C.plum,
                lineHeight: 1,
                marginBottom: '4px',
              }}>{s.number}</div>
              <div style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.mauve, letterSpacing: '0.06em' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── THE STORY ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>

            {/* Left Column: Interactive Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                background: C.surface,
                backdropFilter: 'blur(20px)',
                borderRadius: '12px',
                border: `1px solid ${C.border}`,
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: '0 2px 40px rgba(61,43,56,0.06)',
              }}
            >
              {/* Profile Ring System */}
              <div style={{ position: 'relative', width: '120px', margin: '0 auto 1.5rem' }}>
                <motion.div
                  animate={{ boxShadow: ['0 0 0 0 rgba(221,183,176,0.3)', '0 0 0 14px rgba(221,183,176,0)', '0 0 0 0 rgba(221,183,176,0)'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeOut' }}
                  style={{
                    width: '120px', height: '120px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(221,183,176,0.2), rgba(184,196,178,0.2))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.8rem',
                    border: `2px solid ${C.rose}`,
                  }}
                >
                  🌸
                </motion.div>
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.6rem', fontWeight: 600, color: C.plum, marginBottom: '0.3rem',
              }}>
                Dr. Amara Linden
              </h3>
              
              <div style={{
                fontFamily: 'Manrope', fontSize: '0.72rem',
                color: C.sage, letterSpacing: '0.08em', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600
              }}>
                Licensed Therapist · Wellness Expert
              </div>

              <div style={{ height: '1px', background: C.border, margin: '0 auto 1.5rem', width: '50px' }} />

              <p style={{ fontFamily: 'Manrope', fontSize: '0.85rem', color: C.mauve, lineHeight: 1.8 }}>
                With over 12 years of experience in trauma-informed care, emotional healing,
                and mindfulness therapy, Amara creates a space where every client feels truly
                seen, heard, and deeply understood.
              </p>

              {/* Badges mapped to match unified theme */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
                {['Trauma-Informed', 'CBT Certified', 'Mindfulness'].map(tag => (
                  <div key={tag} style={{
                    background: 'rgba(28,25,23,0.05)',
                    border: '1px solid rgba(28,25,23,0.08)',
                    color: C.plum,
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontFamily: 'Manrope',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Narrative Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Our Story</SectionLabel>

              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 600, color: C.plum, lineHeight: 1.2, marginBottom: '1.8rem',
              }}>
                Why Struvive Emolings<br />Was Born
              </h2>

              <p style={{ fontFamily: 'Manrope', fontSize: '0.95rem', color: C.mauve, lineHeight: 1.9, marginBottom: '1.2rem' }}>
                Struvive Emolings was created from a deep belief that emotional wellbeing is not a luxury —
                it is a fundamental human need. Too many people walk through life carrying invisible weights
                they were never taught to put down.
              </p>
              <p style={{ fontFamily: 'Manrope', fontSize: '0.95rem', color: C.mauve, lineHeight: 1.9, marginBottom: '1.2rem' }}>
                Our name holds our mission: <span style={{ color: C.plum, fontWeight: 600 }}>"Struvive"</span> — to strive and thrive —
                and <span style={{ color: C.plum, fontWeight: 600 }}>"Emolings"</span> — emotional beings on a journey of becoming.
                Together, it means thriving through absolute emotional growth.
              </p>
              <p style={{ fontFamily: 'Manrope', fontSize: '0.95rem', color: C.mauve, lineHeight: 1.9 }}>
                We are a sanctuary for those brave enough to look inward, and for those ready to transform
                their emotional landscape from simple survival into flourishing wellness.
              </p>

              <div style={{ marginTop: '2.2rem' }}>
                <Link to="/book">
                  <BtnPrimary>
                    Begin Your Journey <ArrowRight size={15} />
                  </BtnPrimary>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section style={{
        padding: '80px 2rem',
        background: 'rgba(248,243,240,0.55)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        position: 'relative', zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ fontSize: '2.5rem', color: C.rose, lineHeight: 1, marginBottom: '0.5rem', fontFamily: 'Cormorant Garamond, serif' }}>“</div>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            color: C.plum,
            fontWeight: 500,
            lineHeight: 1.7,
            fontStyle: 'italic',
            marginBottom: '1.8rem',
          }}>
            {testimonial.quote}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
            <div style={{ width: '24px', height: '1px', background: C.sage }} />
            <div style={{ fontFamily: 'Manrope', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span style={{ fontWeight: 600, color: C.plum }}>{testimonial.author}</span>
              <span style={{ color: C.mauve, marginLeft: '0.4rem' }}>• {testimonial.role}</span>
            </div>
            <div style={{ width: '24px', height: '1px', background: C.sage }} />
          </div>
        </motion.div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionLabel>What Guides Us</SectionLabel>
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
              color: C.plum, fontWeight: 600,
            }}>
              Our Core Values
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -4 }}
                style={{
                  background: C.surface,
                  backdropFilter: 'blur(16px)',
                  border: `1px solid ${C.border}`,
                  borderLeft: `3px solid ${C.rose}`,
                  borderRadius: '0 10px 10px 0',
                  padding: '2.2rem 1.8rem',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem', fontWeight: 600, color: C.plum, marginBottom: '0.5rem',
                }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve, lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section style={{ padding: '60px 2rem 100px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: C.charcoal,
              borderRadius: '14px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', bottom: '-60px', right: '-60px',
              width: '220px', height: '220px',
              background: 'radial-gradient(circle, rgba(221,183,176,0.12) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{
              display: 'inline-block',
              background: 'rgba(221,183,176,0.15)',
              border: '1px solid rgba(221,183,176,0.3)',
              borderRadius: '4px',
              padding: '4px 14px',
              fontFamily: 'Manrope', fontSize: '0.7rem',
              letterSpacing: '0.14em', color: C.rose,
              textTransform: 'uppercase', fontWeight: 600,
              marginBottom: '1.5rem',
            }}>
              Take the First Step
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: C.ivory, fontWeight: 600,
              marginBottom: '1rem', lineHeight: 1.2,
            }}>
              Ready to Begin?
            </h2>
            
            <p style={{
              fontFamily: 'Manrope', fontSize: '0.92rem',
              color: 'rgba(255,253,252,0.62)', lineHeight: 1.85,
              marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem',
            }}>
              Take the first courageous step toward your emotional freedom.
              Your journey to wholeness starts with a single conversation.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/book">
                <motion.button
                  whileHover={{ scale: 1.04, background: C.ivory, color: C.charcoal }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: C.rose,
                    color: C.ivory,
                    border: 'none',
                    borderRadius: '6px',
                    padding: '14px 36px',
                    fontFamily: 'Manrope', fontSize: '0.92rem',
                    fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                  }}
                >
                  Book Your Session <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, background: 'rgba(255,253,252,0.08)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: 'transparent',
                    color: C.ivory,
                    border: `1.5px solid ${C.rose}`,
                    borderRadius: '6px',
                    padding: '13px 34px',
                    fontFamily: 'Manrope', fontSize: '0.92rem',
                    fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                  }}
                >
                  Ask a Question
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;