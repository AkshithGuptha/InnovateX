import './About.css';

const pillars = [
  { number: '01', title: 'Explore', description: 'Make sense of emerging technologies, research and ideas shaping the world.' },
  { number: '02', title: 'Question', description: 'Go beyond the headlines with thoughtful perspectives and clear explanations.' },
  { number: '03', title: 'Imagine', description: 'Connect curious minds and inspire the next generation of builders.' },
];

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-eyebrow">WHY INNOVATEX</span>
            <h2 className="section-title">Curiosity is where <span>progress begins.</span></h2>
            <p className="lead">
              InnovateX is a digital magazine exploring the ideas behind tomorrow's breakthroughs.
              From artificial intelligence and engineering to science and design, we turn complex
              topics into stories worth thinking about.
            </p>
            <a className="about-link" href="#articles">Find your next deep dive <span aria-hidden="true">↗</span></a>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <span className="pillar-number">{pillar.number}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
                <span className="pillar-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;