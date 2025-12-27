import { useState, useEffect } from 'react';
import data from '../data/navbar.json';
import { ICONS } from '../assets/icons'
import '../styles/navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      {/* Page links (unchanged) */}
      <ul className={`nav-links page-links ${menuOpen ? "open" : ""}`}>
        {data.page_links.map((link, index) => (
          <li key={index} className='nav-item'>
            <a href={link.url} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Social links (unchanged) */}
      <ul className={`nav-links social-links ${menuOpen ? "open" : ""}`}>
        {data.social_links.map((link, index) => {
          const Icon = ICONS[link.icon];
          return (
            <li key={index} className='nav-item'>
              <a
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.name}
              >
                {Icon && <Icon size={22} />}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

    </nav>
  );
};

export default NavBar;
