import { useEffect, useState } from 'react';
import './Header.css';

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Issues', '#issues'],
  ['Articles', '#articles'],
  ['Team', '#team'],
  ['Contact', '#contact'],
];

const Header = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('innovatex-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('innovatex-theme', theme);
    } catch {
      // Theme still works for the current session when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        <a className="logo" href="#home" onClick={closeMenu} aria-label="InnovateX home">
          Innovate<span>X</span><i aria-hidden="true">.</i>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="nav-link" onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle color theme"
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav-panel ${menuOpen ? 'visible' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>{label}<span aria-hidden="true">↗</span></a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;