import {useSiteData} from '../context/SiteDataContext';
import './About.css';
export default function About(){const{settings}=useSiteData();const areas=settings?.focus_areas||[];
 return <section className="about section-padding" id="about"><div className="container"><div className="about-grid"><div className="about-content">
 <div className="about-kicker">01 — WHO WE ARE</div><h2 className="section-title">{settings?.about_title||'The future, unpacked.'}</h2>
 <p className="lead">{settings?.about_description||'InnovateX is a digital space for curious minds, bringing technology, engineering, artificial intelligence and human ingenuity into one thoughtful conversation.'}</p>
 <div className="mission-vision"><div className="mv-card"><h3>Our vision</h3><p>{settings?.vision||'Make the next wave of innovation easier to understand, question and imagine.'}</p></div><div className="mv-card"><h3>Our mission</h3><p>{settings?.mission||'Explore meaningful ideas through clear stories, useful context and fresh perspectives.'}</p></div></div>
 </div><div className="about-visual"><div className="focus-heading"><span>THE EDITORIAL LENS</span><span>{String(areas.length).padStart(2,'0')} FOCUS AREAS</span></div><div className="focus-list">{areas.filter(x=>x.title||x.detail).map((item,index)=><div className="focus-item" key={item.title||index}><span className="focus-number">{String(index+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="focus-arrow">↗</span></div>)}</div></div></div></div></section>;
}