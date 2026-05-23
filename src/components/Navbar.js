import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/struvive logo.png';

// ─── Design Tokens ───────────────────────────────────────────────────────────
const C = {
  charcoal:    '#1C1917',
  charcoalHov: '#292524',
  ivory:       '#FFFDFC',
  rose:        '#DDB7B0',
  gold:        '#D6BE8A',
  sage:        '#B8C4B2',
  plum:        '#3D2B38',
  mauve:       '#9B7A8A',
  border:      'rgba(221,183,176,0.18)',
};

// ─── Nav Links ───────────────────────────────────────────────────────────────
const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog',     path: '/blog' },
  { label: 'Contact',  path: '/contact' },
];

// ─── Navbar Component ────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,253,252,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* ── Brand ── */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          textDecoration: 'none',
        }}
      >
        <img
          src={logo}
          alt="Struvive Emolings Logo"
          style={{ width: '150px', height: '150px', objectFit: 'contain' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.8rem',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '0.06em',
            background: 'linear-gradient(135deg, #3D2B38 0%, #9B7A8A 50%, #D6BE8A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Struvive
          </div>
          <div style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #DDB7B0 0%, #D6BE8A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Emolings
          </div>
        </div>
      </Link>

      {/* ── Desktop Nav ── */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}
        className="desktop-nav"
      >
        {navLinks.map(link => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.85rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? C.rose : C.plum,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: '2px',
              }}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: C.rose,
                  }}
                />
              )}
            </Link>
          );
        })}

        {/* ── CTA Button ── */}
        <Link to="/book" style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: C.charcoalHov }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: C.charcoal,
              color: C.ivory,
              border: 'none',
              borderRadius: '6px',
              padding: '10px 24px',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Book Session <ArrowRight size={13} />
          </motion.button>
        </Link>
      </div>

      {/* ── Mobile Menu Toggle ── */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: C.plum,
          cursor: 'pointer',
          padding: '4px',
        }}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '150px',
              left: 0,
              right: 0,
              background: 'rgba(255,253,252,0.98)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem 2rem 2rem',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? C.rose : C.plum,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link to="/book" style={{ textDecoration: 'none' }}>
              <button style={{
                background: C.charcoal,
                color: C.ivory,
                border: 'none',
                borderRadius: '6px',
                padding: '12px 28px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                cursor: 'pointer',
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}>
                Book a Session <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Responsive Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;