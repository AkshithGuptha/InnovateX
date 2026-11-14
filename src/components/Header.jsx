import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = ['Home', 'About', 'Issues', 'Articles', 'Team', 'Contact'];

  return (
    <header className={`header ${isScrolled ? 'glass sticky' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home">Innovate<span>X</span></a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
