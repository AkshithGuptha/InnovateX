import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-background" aria-hidden="true"><div className="gradient-sphere sphere-1" /><div className="gradient-sphere sphere-2" /><div className="grid-overlay" /></div>
    <div className="container hero-container fade-in">
      <div className="hero-content">
        <div className="eyebrow"><span className="eyebrow-dot" /> THE IDEAS SHAPING WHAT'S NEXT</div>
        <h1 className="hero-title">Curiosity is<br />the <span className="accent">spark.</span><br />Innovation is<br />the <span className="outline-word">future.</span></h1>
        <p className="hero-tagline">A closer look at the breakthroughs, bold thinkers and emerging technologies moving our world forward.</p>
        <div className="hero-actions"><a href="#issues" className="btn btn-primary">Explore the magazine <span aria-hidden="true">↗</span></a><a href="#about" className="btn btn-outline">Discover InnovateX</a></div>
        <div className="hero-note"><span className="note-line" /> IDEAS. RESEARCH. PERSPECTIVE.</div>
      </div>
      <div className="hero-featured-issue" aria-label="Featured editorial artwork: The AI Frontier">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="issue-card-3d"><div className="issue-cover">
          <div className="cover-topline"><span>INNOVATEX</span><span>VOL. 01 / 2026</span></div>
          <div className="cover-art" aria-hidden="true"><div className="art-core" /><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-crosshair" /></div>
          <div className="cover-copy"><span className="cover-kicker">THE NEXT FRONTIER</span><h2>The<br /><em>AI</em> Era.</h2><p>How intelligence is being reimagined.</p></div>
          <div className="cover-index">01 <span>—</span> 04</div>
        </div><div className="issue-badge"><span /> FEATURED EDITION</div></div>
        <div className="floating-caption"><span>01 / 03</span><span>THE FUTURE, UNPACKED</span></div>
      </div>
    </div>
    <a href="#about" className="scroll-cue" aria-label="Scroll to discover"><span /> SCROLL TO EXPLORE</a>
  </section>
);
export default Hero;
