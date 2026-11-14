import { useSiteData } from '../context/SiteDataContext';
import ContentState from './ContentState';
import './Hero.css';
export default function Hero(){
 const {settings,issues,loading,error}=useSiteData();const featured=issues[0];
 const title=settings?.hero_title||'Curiosity is the spark. Innovation is the future.';
 return <section className="hero" id="home"><div className="hero-background" aria-hidden="true"><div className="gradient-sphere sphere-1"/><div className="gradient-sphere sphere-2"/><div className="grid-overlay"/></div>
 <div className="container hero-container fade-in"><div className="hero-content"><div className="eyebrow"><span className="eyebrow-dot"/>{settings?.hero_eyebrow||'THE IDEAS SHAPING WHAT’S NEXT'}</div>
 <h1 className="hero-title">{title}</h1><p className="hero-tagline">{settings?.hero_description||'A closer look at the breakthroughs, bold thinkers and emerging technologies moving our world forward.'}</p>
 <div className="hero-actions"><a href="#issues" className="btn btn-primary">Explore the magazine <span>↗</span></a><a href="#about" className="btn btn-outline">Discover InnovateX</a></div><div className="hero-note"><span className="note-line"/> IDEAS. RESEARCH. PERSPECTIVE.</div></div>
 <div className="hero-featured-issue">{loading?<div className="issue-cover hero-empty-cover">Loading latest edition…</div>:featured?<div className="issue-card-3d"><div className="issue-cover hero-dynamic-cover">{featured.cover_url&&<img src={featured.cover_url} alt={featured.title}/>}<div className="cover-topline"><span>INNOVATEX</span><span>{featured.edition}</span></div><div className="cover-copy"><span className="cover-kicker">LATEST EDITION</span><h2>{featured.title}</h2><p>{featured.description}</p></div></div><div className="issue-badge"><span/> FEATURED EDITION</div></div>:<div className="issue-cover hero-empty-cover">Your next edition starts here.</div>}
 <div className="floating-caption"><span>INNOVATEX</span><span>THE FUTURE, UNPACKED</span></div></div></div><a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE</a></section>;
}