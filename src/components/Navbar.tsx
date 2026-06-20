import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/#work' },
  { label: 'Projects', to: '/projects' },
  { label: 'Leadership', to: '/#team' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-mark">&#10215;</span> IDEV INC
        </Link>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              {link.to.startsWith('/#') ? (
                <a href={link.to.replace('/', '/')}>{link.label}</a>
              ) : (
                <Link to={link.to} className={location.pathname === link.to ? 'active' : ''}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
