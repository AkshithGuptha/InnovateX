import './About.css';

const focusAreas = [
  { number: '01', title: 'Emerging technology', detail: 'Understand the tools and ideas redefining what is possible.' },
  { number: '02', title: 'Research & discovery', detail: 'Make complex breakthroughs easier to explore and discuss.' },
  { number: '03', title: 'Human ingenuity', detail: 'Meet the people turning ambitious questions into real progress.' },
  { number: '04', title: 'Ideas in perspective', detail: 'Look beyond the headlines to the impact that matters.' },
];

const About = () => (
  <section className="about section-padding" id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-content">
          <div className="about-kicker">01 — WHO WE ARE</div>
          <h2 className="section-title">The future,<br /><span>unpacked.</span></h2>
          <p className="lead">InnovateX is a digital space for curious minds — bringing technology, engineering, artificial intelligence and human ingenuity into one thoughtful conversation.</p>
          <div className="mission-vision">
            <div className="mv-card"><h3>Our vision</h3><p>Make the next wave of innovation easier to understand, question and imagine.</p></div>
            <div className="mv-card"><h3>Our mission</h3><p>Explore meaningful ideas through clear stories, useful context and fresh perspectives.</p></div>
          </div>
        </div>
        <div className="about-visual">
          <div className="focus-heading"><span>THE EDITORIAL LENS</span><span>01 — 04</span></div>
          <div className="focus-list">
            {focusAreas.map((item) => <div className="focus-item" key={item.number}><span className="focus-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="focus-arrow" aria-hidden="true">↗</span></div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;
