import {useEffect,useState} from 'react';
import './Header.css';
const navLinks=['Home','About','Issues','Articles','Team','Contact'];
export default function Header(){const[theme,setTheme]=useState(localStorage.getItem('innovatex-theme')||'dark'),[isScrolled,setIsScrolled]=useState(false),[menuOpen,setMenuOpen]=useState(false);
 useEffect(()=>{document.documentElement.setAttribute('data-theme',theme);localStorage.setItem('innovatex-theme',theme);},[theme]);
 useEffect(()=>{const handle=()=>setIsScrolled(window.scrollY>24);handle();window.addEventListener('scroll',handle,{passive:true});return()=>window.removeEventListener('scroll',handle);},[]);
 const close=()=>setMenuOpen(false);
 return <header className={`header ${isScrolled?'is-scrolled':''}`}><div className="container header-container"><a className="logo" href="#home" onClick={close}>innovate<span>x</span><i>.</i></a>
 <nav className={`nav ${menuOpen?'nav-open':''}`} aria-label="Main navigation"><ul className="nav-list">{navLinks.map(link=><li key={link}><a href={`#${link.toLowerCase()}`} className="nav-link" onClick={close}>{link}</a></li>)}</ul></nav>
 <div className="header-actions"><a className="admin-entry-link" href="/admin/login">Admin</a><button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle colour theme">{theme==='dark'?'☼':'☾'}</button><button className={`menu-toggle ${menuOpen?'active':''}`} onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span/><span/></button></div></div>
 <div className={`mobile-nav ${menuOpen?'mobile-nav-open':''}`}>{navLinks.map(link=><a key={link} href={`#${link.toLowerCase()}`} onClick={close}>{link}</a>)}<a href="/admin/login" onClick={close}>Admin login</a></div></header>;
}