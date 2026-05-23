import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Design tokens (mirrored from HomePage) ──────────────────────────────────
const C = {
  charcoal:    '#1C1917',
  charcoalHov: '#292524',
  ivory:       '#FFFDFC',
  rose:        '#DDB7B0',
  gold:        '#D6BE8A',
  sage:        '#B8C4B2',
  plum:        '#3D2B38',
  mauve:       '#9B7A8A',
  surface:     'rgba(255,253,252,0.72)',
  border:      'rgba(221,183,176,0.18)',
};

// ─── Reusable primitives ─────────────────────────────────────────────────────
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

const BtnPrimary = ({ children, style = {}, ...rest }) => (
  <motion.button
    whileHover={{ scale: 1.03, backgroundColor: C.charcoalHov }}
    whileTap={{ scale: 0.97 }}
    style={{
      background: C.charcoal, color: C.ivory,
      border: 'none', borderRadius: '6px',
      padding: '13px 30px',
      fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem',
      fontWeight: 600, letterSpacing: '0.03em', cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      transition: 'background 0.2s',
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
    style={{
      background: 'transparent', border: `1.5px solid ${C.plum}`,
      borderRadius: '6px', padding: '12px 28px',
      fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem',
      fontWeight: 500, color: C.plum, cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      transition: 'all 0.2s',
      ...style,
    }}
    {...rest}
  >
    {children}
  </motion.button>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: '🕊️', title: 'Anxiety Support', accent: C.rose,
    tagline: 'Find stillness within the storm.',
    desc: 'Gentle, evidence-based tools to quiet the anxious mind and build lasting inner calm. We work with generalised anxiety, social anxiety, panic, and persistent worry.',
    includes: ['Cognitive reframing', 'Breathing practices', 'Nervous system regulation', 'Worry management'],
  },
  {
    icon: '💗', title: 'Emotional Healing', accent: '#C9918A',
    tagline: 'Reclaim your wholeness.',
    desc: 'Process old wounds, grief, and heartbreak with compassion and professional care. Heal what has been hidden and step back into your fullness.',
    includes: ['Grief processing', 'Trauma-informed support', 'Emotional release', 'Forgiveness work'],
  },
  {
    icon: '🌿', title: 'Stress Management', accent: C.sage,
    tagline: 'Restore your nervous system.',
    desc: 'Rebuild sustainable resilience and restore balance to an overwhelmed system. Life will always carry pressure; we help you carry it with ease.',
    includes: ['Stress mapping', 'Boundary setting', 'Rest practices', 'Lifestyle rebalancing'],
  },
  {
    icon: '📚', title: 'Student Counseling', accent: C.gold,
    tagline: 'Navigate your becoming.',
    desc: 'Navigate academic pressure, identity exploration, and the unique emotional challenges of student life — with guidance that truly sees you.',
    includes: ['Academic stress', 'Identity & belonging', 'Life transitions', 'Future anxiety'],
  },
  {
    icon: '🌸', title: 'Relationship Guidance', accent: C.rose,
    tagline: 'Heal how you connect.',
    desc: 'Uncover relational patterns, deepen communication, and cultivate connections that are loving, secure, and genuinely nourishing.',
    includes: ['Attachment patterns', 'Communication skills', 'Conflict resolution', 'Healthy boundaries'],
  },
  {
    icon: '✨', title: 'Self-Esteem Therapy', accent: '#C9918A',
    tagline: 'Come home to yourself.',
    desc: 'Rediscover your inherent worth, rebuild confidence from within, and step fully into the person you have always been meant to be.',
    includes: ['Inner critic work', 'Self-compassion', 'Identity building', 'Confidence practices'],
  },
  {
    icon: '🧘', title: 'Mindfulness Wellness', accent: C.sage,
    tagline: 'Anchor to the now.',
    desc: 'Ground yourself in the present moment with beautiful, accessible mindfulness and meditation practices designed for real, everyday life.',
    includes: ['Guided meditation', 'Body awareness', 'Present-moment tools', 'Emotional grounding'],
  },
];

const process = [
  { num: '01', title: 'Discovery Call', desc: 'A brief, free conversation to see if we are the right fit for your journey.' },
  { num: '02', title: 'First Session', desc: 'A warm, unhurried space to share what has brought you here, at your own pace.' },
  { num: '03', title: 'Personalised Plan', desc: 'Together we craft a gentle, evidence-based path toward your healing goals.' },
  { num: '04', title: 'Ongoing Support', desc: 'Weekly sessions, reflections, and resources that evolve as you grow.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
const ServicesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

    {/* ── HERO ─────────────────────────────────────────────────────────────── */}
    <section style={{
      padding: '140px 2rem 90px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Grid texture — same as homepage hero */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(184,196,178,0.07) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(184,196,178,0.07) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />
      <div style={{
        position: 'absolute', top: '0', right: '-5%',
        width: '420px', height: '420px',
        background: `radial-gradient(circle, rgba(221,183,176,0.10) 0%, transparent 68%)`,
        borderRadius: '50%', zIndex: 1, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(28,25,23,0.05)',
            border: '1px solid rgba(28,25,23,0.10)',
            borderRadius: '4px', padding: '5px 14px',
            fontFamily: 'Manrope', fontSize: '0.7rem',
            letterSpacing: '0.14em', color: C.plum,
            marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.rose, display: 'inline-block' }} />
            Healing Offerings
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 600, color: C.plum, lineHeight: 1.12, marginBottom: '1.2rem',
          }}>
            Every Wound Deserves<br />
            <span style={{ color: C.rose }}>Gentle</span> Attention.
          </h1>

          <p style={{
            fontFamily: 'Manrope', fontSize: '1rem', color: C.mauve,
            lineHeight: 1.85, maxWidth: '520px', marginBottom: '2.2rem',
          }}>
            Our services are not programmes or packages — they are personal, living conversations
            designed around who you are and what you need right now.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/book">
              <BtnPrimary>Book a Session <ArrowRight size={15} /></BtnPrimary>
            </Link>
            <a href="#services">
              <BtnOutline>See All Services <ChevronRight size={15} /></BtnOutline>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── SERVICES GRID ────────────────────────────────────────────────────── */}
    <section id="services" style={{
      padding: '80px 2rem',
      background: 'rgba(248,243,240,0.55)',
      borderTop: `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      position: 'relative', zIndex: 2,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem' }}
        >
          <SectionLabel>What We Offer</SectionLabel>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: C.plum, fontWeight: 600,
          }}>
            Healing Services
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: '0 14px 40px rgba(61,43,56,0.09)' }}
              style={{
                background: C.surface,
                backdropFilter: 'blur(16px)',
                border: `1px solid ${C.border}`,
                borderLeft: `3px solid ${s.accent}`,
                borderRadius: '0 10px 10px 0',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
            >
              <div style={{ padding: '1.75rem 1.5rem' }}>
                {/* Icon + tagline row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.7rem' }}>{s.icon}</div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.82rem', fontStyle: 'italic',
                    color: C.mauve, opacity: 0.8,
                  }}>
                    {s.tagline}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.25rem', fontWeight: 600,
                  color: C.plum, marginBottom: '0.55rem',
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontFamily: 'Manrope', fontSize: '0.84rem',
                  color: C.mauve, lineHeight: 1.78, marginBottom: '1.3rem',
                }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div style={{
                  borderTop: `1px solid ${C.border}`, paddingTop: '1rem',
                  display: 'flex', flexWrap: 'wrap', gap: '0.4rem',
                }}>
                  {s.includes.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(28,25,23,0.05)',
                      border: '1px solid rgba(28,25,23,0.08)',
                      borderRadius: '4px',
                      padding: '3px 10px',
                      fontFamily: 'Manrope', fontSize: '0.68rem',
                      color: C.plum, letterSpacing: '0.06em',
                      textTransform: 'uppercase', fontWeight: 600,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
    <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3.5rem' }}
        >
          <SectionLabel>The Journey</SectionLabel>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: C.plum, fontWeight: 600, marginBottom: '0.75rem',
          }}>
            How We Work Together
          </h2>
          <p style={{ fontFamily: 'Manrope', fontSize: '0.95rem', color: C.mauve, lineHeight: 1.7, maxWidth: '500px' }}>
            Every healing journey begins with a single, brave step. Here is what yours looks like.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical connector */}
          <div style={{
            position: 'absolute', left: '25px', top: '26px', bottom: '26px',
            width: '1px', background: C.border,
          }} />

          {process.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{
                minWidth: '52px', height: '52px', borderRadius: '50%',
                background: C.charcoal,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.95rem', fontWeight: 600, color: C.ivory,
                flexShrink: 0, position: 'relative', zIndex: 1,
              }}>
                {step.num}
              </div>
              <div style={{
                background: C.surface, backdropFilter: 'blur(12px)',
                border: `1px solid ${C.border}`, borderRadius: '10px',
                padding: '1.1rem 1.4rem', flex: 1,
              }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem',
                  fontWeight: 600, color: C.plum, marginBottom: '0.25rem',
                }}>
                  {step.title}
                </div>
                <div style={{ fontFamily: 'Manrope', fontSize: '0.85rem', color: C.mauve, lineHeight: 1.7 }}>
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
    <section style={{ padding: '40px 2rem 100px', position: 'relative', zIndex: 2 }}>
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
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Rose glow circle */}
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
            borderRadius: '4px', padding: '4px 14px',
            fontFamily: 'Manrope', fontSize: '0.7rem',
            letterSpacing: '0.14em', color: C.rose,
            textTransform: 'uppercase', fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            Not Sure Where to Start?
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: C.ivory, fontWeight: 600,
            marginBottom: '1rem', lineHeight: 1.2,
          }}>
            Your First Session Is a<br />Gentle Discovery
          </h2>

          <p style={{
            fontFamily: 'Manrope', fontSize: '0.92rem',
            color: 'rgba(255,253,252,0.62)', lineHeight: 1.85,
            maxWidth: '460px', margin: '0 auto 2rem',
          }}>
            We explore together what support feels right for you — no pressure, no agenda, just honest conversation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.04, background: C.ivory, color: C.charcoal }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: C.rose, color: C.ivory, border: 'none',
                  borderRadius: '6px', padding: '14px 36px',
                  fontFamily: 'Manrope', fontSize: '0.92rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
              >
                Book a Discovery Session <ArrowRight size={15} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03, background: 'rgba(255,253,252,0.1)' }}
                style={{
                  background: 'transparent',
                  border: '1.5px solid rgba(255,253,252,0.25)',
                  borderRadius: '6px', padding: '13px 28px',
                  fontFamily: 'Manrope', fontSize: '0.88rem', fontWeight: 500,
                  color: 'rgba(255,253,252,0.75)', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Ask a Question
              </motion.button>
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Confidential', 'Compassionate', 'Online & In-Person'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.rose }} />
                <span style={{ fontFamily: 'Manrope', fontSize: '0.75rem', color: 'rgba(255,253,252,0.45)' }}>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  </motion.div>
);

export default ServicesPage;
