import { motion } from 'framer-motion';
import { Facebook, Heart, Instagram, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

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

// ─── Component ──────────────────────────────────────────────────────────────
const Footer = () => {
  return (
    <footer style={{
      background: C.ivory,
      borderTop: `1px solid ${C.border}`,
      padding: '80px 2rem 40px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          
          {/* Column 1: Brand & Socials */}
          <div>
            <div style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: '1.6rem', 
              fontWeight: 600, 
              color: C.plum, 
              marginBottom: '0.6rem' 
            }}>
              Struvive Emolings
            </div>
            <div style={{ 
              fontFamily: 'Manrope, sans-serif', 
              fontSize: '0.84rem', 
              color: C.mauve, 
              lineHeight: 1.8, 
              marginBottom: '1.5rem' 
            }}>
              A safe emotional sanctuary where emotions are understood, healed, and transformed into peace and freedom.
            </div>
            
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.05, background: 'rgba(28,25,23,0.06)' }}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    background: 'transparent',
                    border: `1.5px solid ${C.plum}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: C.plum,
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: '1.15rem', 
              fontWeight: 600, 
              color: C.plum, 
              marginBottom: '1.2rem' 
            }}>
              Navigate
            </div>
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' },
              { label: 'Book a Session', path: '/book' },
            ].map(link => (
              <div key={link.path} style={{ marginBottom: '0.6rem' }}>
                <Link
                  to={link.path}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.85rem',
                    color: C.mauve,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = C.rose}
                  onMouseLeave={e => e.target.style.color = C.mauve}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Column 3: Services */}
          <div>
            <div style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: '1.15rem', 
              fontWeight: 600, 
              color: C.plum, 
              marginBottom: '1.2rem' 
            }}>
              Services
            </div>
            {[
              'Anxiety Support Framework', 
              'Emotional Healing Alchemy', 
              'Nervous System Regulation', 
              'Student Growth Counseling', 
              'Relational Healing Patterns', 
              'Self-Worth & Confidence Expansion', 
              'Mindfulness Integration Wellness'
            ].map(s => (
              <div key={s} style={{ 
                marginBottom: '0.6rem', 
                fontFamily: 'Manrope, sans-serif', 
                fontSize: '0.85rem', 
                color: C.mauve 
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <div style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: '1.15rem', 
              fontWeight: 600, 
              color: C.plum, 
              marginBottom: '1.2rem' 
            }}>
              Reach Out
            </div>
            <div style={{ 
              fontFamily: 'Manrope, sans-serif', 
              fontSize: '0.85rem', 
              color: C.mauve, 
              lineHeight: 2 
            }}>
              <div>hello@struviveemolings.com</div>
              <div style={{ color: C.sage, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginTop: '0.2rem' }}>
                Mon–Fri, 9am–6pm
              </div>
              <div style={{ 
                marginTop: '1.2rem', 
                color: C.rose, 
                fontStyle: 'italic', 
                fontFamily: 'Cormorant Garamond, serif', 
                fontSize: '1.15rem',
                lineHeight: 1.4
              }}>
                "You are worthy of healing."
              </div>
            </div>
          </div>
        </div>

        {/* System Alignment Divider Line */}
        <div style={{
          height: '1px',
          background: C.border,
          margin: '2.5rem 0 2rem',
        }} />

        {/* System Footnote & Copyright Details */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: C.plum,
            marginBottom: '1rem',
          }}>
            "Every storm runs out of rain. Every dark night turns into day."
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.76rem',
            color: C.sage,
            letterSpacing: '0.03em',
          }}>
            <span>© 2026 Struvive Emolings. Made with</span>
            <Heart size={12} fill={C.rose} color={C.rose} />
            <span>for healing souls.</span>
          </div>

          {/* Policy Links */}
          <div style={{ marginTop: '0.6rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.74rem',
                color: C.sage,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = C.rose}
              onMouseLeave={e => e.target.style.color = C.sage}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;