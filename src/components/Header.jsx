import { useEffect, useState } from 'react';
import './Header.css';

const navLinks = ['Home', 'About', 'Issues', 'Articles', 'Team', 'Contact'];

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        <a className="logo" href="#home" onClick={closeMenu} aria-label="InnovateX home">innovate<span>x</span><i>.</i></a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} className="nav-link" onClick={closeMenu}>{link}</a></li>)}
          </ul>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle colour theme">{theme === 'dark' ? '☼' : '☾'}</button>
          <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation"><span /><span /></button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'mobile-nav-open' : ''}`}>
        {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>)}
      </div>
    </header>
  );
};
export default Header;
