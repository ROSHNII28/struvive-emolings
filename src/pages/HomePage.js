import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TherapyIllustration from '../components/TherapyIllustration';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  })
};

// ─── Design tokens ───────────────────────────────────────────────────────────
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
  borderFocus: 'rgba(221,183,176,0.45)',
};

// Button primitives
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '500+', label: 'Clients Supported' },
  { value: '5 yrs', label: 'In Practice' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '97%', label: 'Would Recommend' },
];

const services = [
  { icon: '🕊️', title: 'Anxiety Support', desc: 'Gentle tools to quiet the anxious mind and find calm within the storm.' },
  { icon: '💗', title: 'Emotional Healing', desc: 'Process old wounds with compassion, tenderness, and deep understanding.' },
  { icon: '🌿', title: 'Stress Management', desc: 'Build resilience and restore balance to an overwhelmed nervous system.' },
];

const timeline = [
  { num: '01', title: 'Warm Welcome', desc: 'You are greeted with warmth, no judgment, only acceptance.' },
  { num: '02', title: 'Comfortable Conversation', desc: 'Share as much or as little as you wish, at your own pace.' },
  { num: '03', title: 'Understanding Emotions', desc: 'Together we gently explore what you are feeling and why.' },
  { num: '04', title: 'Goal Discovery', desc: 'We discover what healing and peace looks like for you.' },
  { num: '05', title: 'Your Healing Path', desc: 'A personalised, compassionate path forward is created together.' },
];

const faqs = [
  { q: 'Is therapy confidential?', a: 'Absolutely. Everything shared in our sessions is held in complete confidentiality, with only legally required exceptions.' },
  { q: "What if I don't know what I need?", a: "That's perfectly okay. Many people come feeling unsure — our first conversation is simply about getting to know you." },
  { q: 'Are online sessions available?', a: 'Yes. We offer secure, private video sessions so you can heal from the comfort of your own sacred space.' },
  { q: 'How long are sessions?', a: 'Sessions are 50–60 minutes. We recommend weekly sessions initially to build a strong, trusting foundation.' },
  { q: 'Can I reschedule?', a: 'Yes. Life happens. Please reschedule at least 24 hours in advance through your booking confirmation.' },
  { q: 'Is therapy right for me?', a: "If you're seeking understanding, peace, or growth — yes. Therapy isn't just for crisis; it's for anyone ready to flourish." },
];

const blogs = [
  { tag: 'Emotional Healing', title: 'How to Begin Healing When You Feel Broken', date: 'April 2025', accent: '#DDB7B0' },
  { tag: 'Anxiety', title: 'Understanding Anxiety: Your Body\'s Protective Alarm', date: 'March 2025', accent: '#B8C4B2' },
  { tag: 'Self-Love', title: 'The Art of Being Gentle With Yourself', date: 'March 2025', accent: '#D6BE8A' },
];

// ─── Divider ──────────────────────────────────────────────────────────────────
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

// ─── Page ─────────────────────────────────────────────────────────────────────
const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 2rem 60px',
      }}>
        {/* Subtle grid texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(184,196,178,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(184,196,178,0.07) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        {/* Soft radial glow — toned down */}
        <div style={{
          position: 'absolute', top: '5%', right: '-5%',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(221,183,176,0.10) 0%, transparent 68%)',
          borderRadius: '50%', zIndex: 1, pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* ── Text col ── */}
            <div>
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(28,25,23,0.05)',
                  border: '1px solid rgba(28,25,23,0.10)',
                  borderRadius: '4px',
                  padding: '5px 14px',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.7rem',
                  letterSpacing: '0.14em',
                  color: C.plum,
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.rose, display: 'inline-block' }} />
                Emotional Alchemy & Healing
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={1}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  fontWeight: 600,
                  color: C.plum,
                  lineHeight: 1.12,
                  marginBottom: '1.2rem',
                }}
              >
                Healing Hearts.<br />
                <span style={{ color: C.rose }}>Empowering</span> Lives.
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={2}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '1rem',
                  color: C.mauve,
                  lineHeight: 1.85,
                  marginBottom: '2.2rem',
                  maxWidth: '440px',
                }}
              >
                A safe space to heal, grow, understand your emotions, and rediscover inner peace. You deserve to feel whole.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={3}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              >
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
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={4}
                style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
              >
                {['Confidential', 'Compassionate', 'Online & In-Person'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.rose }} />
                    <span style={{ fontFamily: 'Manrope', fontSize: '0.78rem', color: C.sage }}>{b}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Illustration col ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              style={{
                background: C.surface,
                backdropFilter: 'blur(20px)',
                borderRadius: '12px',
                border: `1px solid ${C.border}`,
                padding: '1.5rem',
                boxShadow: '0 2px 40px rgba(61,43,56,0.08)',
              }}
            >
              <TherapyIllustration />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: C.sage, zIndex: 2 }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* ── STAT BAR ── */}
      <section style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: '28px 2rem',
        background: 'rgba(255,253,252,0.6)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 600,
                color: C.plum,
                lineHeight: 1,
                marginBottom: '4px',
              }}>{s.value}</div>
              <div style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.mauve, letterSpacing: '0.06em' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <SectionLabel>Our Philosophy</SectionLabel>
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: C.plum,
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}>
              A Sanctuary for Your Emotional World
            </h2>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1rem',
              color: C.mauve,
              lineHeight: 1.9,
              marginBottom: '2.5rem',
              maxWidth: '660px',
              margin: '0 auto 2.5rem',
            }}>
              Struvive Emolings is more than a therapy practice — it is an emotional sanctuary.
              We believe in the sacred art of emotional alchemy: transforming pain into wisdom,
              confusion into clarity, and fear into freedom.
            </p>
            <Link to="/about">
              <BtnOutline>
                Our Story & Philosophy
              </BtnOutline>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{
        padding: '80px 2rem',
        background: 'rgba(248,243,240,0.55)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.25rem',
          }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
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
                  padding: '1.75rem 1.5rem',
                  cursor: 'default',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.9rem' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem', fontWeight: 600,
                  color: C.plum, marginBottom: '0.5rem',
                }}>{s.title}</h3>
                <p style={{ fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve, lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIRST SESSION TIMELINE ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3.5rem' }}
          >
            <SectionLabel>Your First Visit</SectionLabel>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: C.plum, fontWeight: 600, marginBottom: '0.75rem',
            }}>
              What to Expect
            </h2>
            <p style={{ fontFamily: 'Manrope', fontSize: '0.95rem', color: C.mauve, lineHeight: 1.7, maxWidth: '520px' }}>
              We know starting therapy can feel vulnerable. Here is what your first session looks like.
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical connector line */}
            <div style={{
              position: 'absolute', left: '25px', top: '26px', bottom: '26px',
              width: '1px', background: C.border,
            }} />

            {timeline.map((step, i) => (
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
                  position: 'relative', zIndex: 1,
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <div style={{
                  background: C.surface,
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${C.border}`,
                  borderRadius: '10px',
                  padding: '1.1rem 1.4rem',
                  flex: 1,
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: C.plum, marginBottom: '0.25rem' }}>
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

      {/* ── FAQ ── */}
      <section style={{
        padding: '80px 2rem',
        background: 'rgba(248,243,240,0.55)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <SectionLabel>FAQs</SectionLabel>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: C.plum, fontWeight: 600 }}>
              Gentle Answers
            </h2>
            <p style={{ fontFamily: 'Manrope', fontSize: '0.88rem', color: C.mauve, marginTop: '0.6rem' }}>
              Questions we hear most often, answered with care.
            </p>
          </motion.div>

          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ marginBottom: '6px' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  background: openFaq === i ? C.charcoal : C.surface,
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${openFaq === i ? C.charcoal : C.border}`,
                  borderRadius: openFaq === i ? '8px 8px 0 0' : '8px',
                  padding: '1.1rem 1.4rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s',
                }}
              >
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.08rem', fontWeight: 600,
                  color: openFaq === i ? C.ivory : C.plum,
                }}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  style={{ color: openFaq === i ? C.rose : C.mauve, flexShrink: 0, marginLeft: '1rem' }}
                >
                  <ChevronDown size={17} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      background: 'rgba(28,25,23,0.04)',
                      border: `1px solid ${C.charcoal}`,
                      borderTop: 'none',
                      borderRadius: '0 0 8px 8px',
                      padding: '1rem 1.4rem 1.25rem',
                    }}>
                      <p style={{ fontFamily: 'Manrope', fontSize: '0.87rem', color: C.plum, lineHeight: 1.85 }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}
          >
            <div>
              <SectionLabel>Resources & Reflections</SectionLabel>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: C.plum, fontWeight: 600 }}>
                Healing Reads
              </h2>
            </div>
            <Link to="/blog">
              <BtnOutline style={{ padding: '9px 20px', fontSize: '0.8rem' }}>
                View All Articles <ArrowRight size={13} />
              </BtnOutline>
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem' }}>
            {blogs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(61,43,56,0.10)' }}
                style={{
                  background: C.surface,
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${C.border}`,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: '3px', background: b.accent }} />
                <div style={{ padding: '1.4rem' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(61,43,56,0.06)',
                    border: '1px solid rgba(61,43,56,0.08)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontFamily: 'Manrope', fontSize: '0.68rem',
                    color: C.plum, marginBottom: '0.8rem',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    fontWeight: 600,
                  }}>
                    {b.tag}
                  </div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.12rem', fontWeight: 600,
                    color: C.plum, lineHeight: 1.4, marginBottom: '0.8rem',
                  }}>
                    {b.title}
                  </h3>
                  <div style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.sage }}>
                    {b.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '80px 2rem', position: 'relative', zIndex: 2 }}>
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
            {/* Subtle rose accent circle */}
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
              Begin Today
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: C.ivory, fontWeight: 600,
              marginBottom: '1rem', lineHeight: 1.2,
            }}>
              Your Healing Journey Starts Here
            </h2>
            <p style={{
              fontFamily: 'Manrope', fontSize: '0.92rem',
              color: 'rgba(255,253,252,0.62)', lineHeight: 1.85,
              marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem',
            }}>
              You don't have to carry everything alone. Take the first gentle step toward peace, clarity, and wholeness.
            </p>
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
                Book Your First Session <ArrowRight size={15} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
