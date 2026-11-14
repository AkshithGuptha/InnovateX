import {useSiteData} from '../context/SiteDataContext';
import './Footer.css';
export default function Footer(){const{settings}=useSiteData();return <footer className="footer" id="contact"><div className="container footer-container">
 <div className="footer-brand"><h2>Innovate<span>X</span></h2><p>{settings?.footer_description||'Ideas. Research. Perspective.'}</p></div>
 <div className="footer-links"><h3>Quick Links</h3><ul><li><a href="#about">About Us</a></li><li><a href="#issues">Magazine Issues</a></li><li><a href="#articles">Latest Articles</a></li><li><a href="#team">Editorial Team</a></li></ul></div>
 <div className="footer-contact"><h3>Contact</h3>{settings?.contact_email?<a href={`mailto:${settings.contact_email}`}>{settings.contact_email}</a>:<p>Contact details will be announced soon.</p>}</div>
 <div className="footer-newsletter"><h3>InnovateX</h3><p>Ideas worth exploring. Stories worth sharing.</p><a href="#issues" className="btn btn-outline">Explore editions ↗</a></div>
 </div><div className="footer-bottom"><p>© {new Date().getFullYear()} InnovateX Magazine. All rights reserved.</p></div></footer>}