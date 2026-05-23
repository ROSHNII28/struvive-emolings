import { AnimatePresence, motion } from 'framer-motion';
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

// ─── Data Arrays ────────────────────────────────────────────────────────────
const posts = [
  { tag: 'Emotional Healing', icon: '💗', title: 'How to Begin Healing When You Feel Broken', date: 'April 15, 2025', read: '5 min', color: C.rose, desc: 'When everything feels shattered, the path to wholeness begins with one small act of self-compassion. This guide walks you gently through where to start.' },
  { tag: 'Anxiety', icon: '🕊️', title: 'Understanding Anxiety: Your Body\'s Protective Alarm', date: 'March 28, 2025', read: '6 min', color: C.sage, desc: 'Anxiety is not your enemy. When we learn to listen to what it\'s trying to tell us, it transforms from a threat into a teacher.' },
  { tag: 'Self-Love', icon: '🌸', title: 'The Art of Being Gentle With Yourself', date: 'March 12, 2025', read: '4 min', color: C.rose, desc: 'Self-compassion is not weakness — it is the foundation of true healing. Discover how to soften your inner voice and befriend yourself.' },
  { tag: 'Mindfulness', icon: '🧘', title: 'Five Grounding Practices for Overwhelming Days', date: 'February 22, 2025', read: '7 min', color: C.gold, desc: 'When the world feels too loud and too fast, these five simple practices bring you back to your body, your breath, and the present moment.' },
  { tag: 'Burnout', icon: '🌿', title: 'Recognizing Burnout Before It Breaks You', date: 'February 8, 2025', read: '5 min', color: C.sage, desc: 'Burnout whispers before it screams. Learn the early signs and how to tend to yourself before exhaustion becomes a crisis.' },
  { tag: 'Journaling', icon: '📖', title: 'Journaling as a Path to Emotional Clarity', date: 'January 30, 2025', read: '4 min', color: C.rose, desc: 'The blank page holds no judgment. Discover how a simple journaling practice can become your most powerful emotional processing tool.' },
  { tag: 'Emotional Intelligence', icon: '✨', title: 'What Emotional Intelligence Really Means', date: 'January 15, 2025', read: '6 min', color: C.rose, desc: 'Emotional intelligence is the quiet superpower that transforms how we relate to ourselves and others. Here\'s how to cultivate it gently.' },
  { tag: 'Grief', icon: '🕯️', title: 'Holding Grief: A Letter to Anyone Who is Hurting', date: 'January 2, 2025', read: '3 min', color: C.gold, desc: 'Grief is love with nowhere to go. This is a gentle letter for anyone navigating loss of any kind — reminding you that your grief is valid.' },
];

const allTags = ['All', ...Array.from(new Set(posts.map(p => p.tag)))];

// ─── Page Component ──────────────────────────────────────────────────────────
const BlogPage = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeTag === 'All' ? posts : posts.filter(p => p.tag === activeTag);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ── HERO ── */}
      <section style={{ padding: '140px 2rem 70px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        {/* Subtle grid background mapping */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(184,196,178,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(184,196,178,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(221,183,176,0.10) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Resources & Reflections</SectionLabel>
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
            fontWeight: 600, color: C.plum, lineHeight: 1.15,
            marginBottom: '1.2rem',
          }}>
            Healing Reads
          </h1>

          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '1rem',
            color: C.mauve,
            lineHeight: 1.9,
            maxWidth: '500px',
            margin: '0 auto 2rem',
          }}>
            Thoughtful articles, gentle guides, and emotional wisdom — written with love, for souls on a healing journey.
          </p>

          {/* Article Count Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(28,25,23,0.05)',
            border: '1px solid rgba(28,25,23,0.10)',
            color: C.plum,
            borderRadius: '4px', padding: '6px 16px',
            fontFamily: 'Manrope', fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.rose, display: 'inline-block' }} />
            {posts.length} Articles
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED POST ── */}
      <section style={{ padding: '0 2rem 60px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 24px 60px rgba(61,43,56,0.08)' }}
            style={{
              background: C.surface,
              backdropFilter: 'blur(20px)',
              border: `1px solid ${C.border}`,
              borderLeft: `3px solid ${C.rose}`,
              borderRadius: '0 12px 12px 0',
              padding: 'clamp(2rem, 4vw, 3.2rem)',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: '0 2px 30px rgba(61,43,56,0.04)',
            }}
          >
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(28,25,23,0.05)',
                border: '1px solid rgba(28,25,23,0.10)',
                borderRadius: '4px',
                padding: '4px 12px',
                fontFamily: 'Manrope', fontSize: '0.68rem', fontWeight: 600,
                color: C.plum, marginBottom: '1.2rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                ✦ Featured Article
              </div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 600, color: C.plum, lineHeight: 1.25, marginBottom: '1rem',
              }}>
                How to Begin Healing When You Feel Broken
              </h2>

              <p style={{ fontFamily: 'Manrope', fontSize: '0.9rem', color: C.mauve, lineHeight: 1.85, marginBottom: '1.8rem' }}>
                When everything feels shattered, the path to wholeness begins with one small act
                of self-compassion. This guide walks you gently through where to start when you don't know where to begin.
              </p>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '1.8rem' }}>
                <span style={{ fontFamily: 'Manrope', fontSize: '0.75rem', color: C.sage }}>April 15, 2025</span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.rose, display: 'inline-block' }} />
                <span style={{ fontFamily: 'Manrope', fontSize: '0.75rem', color: C.sage }}>5 min read</span>
              </div>

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
                }}
              >
                Read Article <span style={{ fontSize: '1.1rem', lineHeight: 0 }}>→</span>
              </motion.button>
            </div>

            {/* Micro Quote Panel */}
            <div style={{
              background: 'rgba(248,243,240,0.55)',
              border: `1px solid ${C.border}`,
              borderRadius: '10px',
              padding: '2.2rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.8rem', lineHeight: 1 }}>💗</div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: C.plum,
                lineHeight: 1.7,
              }}>
                "Healing doesn't mean the damage never existed. It means the damage no longer controls your life."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ── */}
      <section style={{ padding: '0 2rem 40px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'Manrope', fontSize: '0.72rem', letterSpacing: '0.12em',
              color: C.sage, textTransform: 'uppercase', marginRight: '0.4rem', fontWeight: 600,
            }}>
              Filter:
            </span>
            {allTags.map(tag => (
              <motion.button
                key={tag}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? C.charcoal : C.surface,
                  color: activeTag === tag ? C.ivory : C.plum,
                  border: `1.5px solid ${activeTag === tag ? C.charcoal : C.plum}`,
                  borderRadius: '6px',
                  padding: '6px 16px',
                  fontFamily: 'Manrope',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tag}
              </motion.button>
            ))}

            <div style={{ marginLeft: 'auto', fontFamily: 'Manrope', fontSize: '0.78rem', color: C.sage }}>
              {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* ── POST GRID ── */}
      <section style={{ padding: '0 2rem 80px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.4rem' }}
            >
              {filtered.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(61,43,56,0.10)' }}
                  style={{
                    background: C.surface,
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${C.border}`,
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: '3px', background: post.color }} />

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{
                        background: 'rgba(61,43,56,0.06)',
                        border: '1px solid rgba(61,43,56,0.08)',
                        borderRadius: '4px',
                        padding: '3px 10px',
                        fontFamily: 'Manrope', fontSize: '0.68rem', fontWeight: 600,
                        color: C.plum, letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>
                        {post.tag}
                      </div>
                      <div style={{ fontSize: '1.3rem' }}>{post.icon}</div>
                    </div>

                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.15rem', fontWeight: 600, color: C.plum,
                      lineHeight: 1.4, marginBottom: '0.6rem',
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      fontFamily: 'Manrope', fontSize: '0.84rem', color: C.mauve,
                      lineHeight: 1.7, marginBottom: 'auto', paddingBottom: '1.2rem',
                    }}>
                      {post.desc}
                    </p>

                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      borderTop: `1px solid ${C.border}`, paddingTop: '0.9rem',
                      marginTop: '0.5rem',
                    }}>
                      <span style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.sage }}>{post.date}</span>
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'Manrope', fontSize: '0.72rem', fontWeight: 600,
                        color: C.plum, letterSpacing: '0.04em',
                      }}>
                        <span style={{ width: '12px', height: '1px', background: C.sage, display: 'inline-block' }} />
                        {post.read} read
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── NEWSLETTER STRIP ── */}
      <section style={{
        padding: '80px 2rem',
        background: C.charcoal,
        position: 'relative', zIndex: 2, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '-60px', right: '-60px',
          width: '220px', height: '220px',
          background: 'radial-gradient(circle, rgba(221,183,176,0.12) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}
        >
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
            Stay Connected
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: C.ivory, fontWeight: 600, marginBottom: '1rem', lineHeight: 1.2,
          }}>
            Healing in Your Inbox
          </h2>

          <p style={{
            fontFamily: 'Manrope', fontSize: '0.92rem',
            color: 'rgba(255,253,252,0.62)', lineHeight: 1.85,
            marginBottom: '2rem',
          }}>
            New articles, gentle reflections, and tools for your emotional wellbeing — delivered twice a month, straight to you.
          </p>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="subscribed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'rgba(221,183,176,0.15)',
                  border: '1px solid rgba(221,183,176,0.3)',
                  borderRadius: '6px',
                  padding: '1rem 1.5rem',
                  fontFamily: 'Manrope', fontSize: '0.9rem', color: C.ivory,
                  fontWeight: 600,
                }}
              >
                🌸 You're in — welcome to the community.
              </motion.div>
            ) : (
              <motion.div key="input-form" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: '1 1 220px',
                    background: 'rgba(255,253,252,0.06)',
                    border: '1.5px solid rgba(221,183,176,0.3)',
                    borderRadius: '6px',
                    padding: '13px 18px',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.88rem',
                    color: C.ivory,
                    outline: 'none',
                    maxWidth: '320px',
                    transition: 'all 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = C.rose}
                  onBlur={e => e.target.style.borderColor = 'rgba(221,183,176,0.3)'}
                />
                <motion.button
                  whileHover={{ scale: 1.04, background: C.ivory, color: C.charcoal }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => email && setSubscribed(true)}
                  style={{
                    background: C.rose,
                    color: C.ivory,
                    border: 'none',
                    borderRadius: '6px',
                    padding: '13px 32px',
                    fontFamily: 'Manrope', fontSize: '0.92rem',
                    fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <p style={{ fontFamily: 'Manrope', fontSize: '0.72rem', color: C.mauve, marginTop: '1.2rem', letterSpacing: '0.04em' }}>
            No spam, ever. Unsubscribe with a single click.
          </p>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default BlogPage;