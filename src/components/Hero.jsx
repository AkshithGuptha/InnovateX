import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-container fade-in">
        <div className="hero-content">
          <div className="hero-eyebrow"><span /> THE IDEAS EDITION · VOL. 01</div>
          <h1 className="hero-title">
            The future<br />is <span className="accent">a work</span><br /><em>in progress.</em>
          </h1>
          <p className="hero-tagline">
            Stories, breakthroughs and bold perspectives at the intersection of technology and human imagination.
          </p>
          <div className="hero-actions">
            <a href="#issues" className="btn btn-primary">Explore the issue <span aria-hidden="true">↗</span></a>
            <a href="#about" className="btn btn-outline">Discover InnovateX</a>
          </div>
          <div className="hero-note"><span className="hero-note-line" /> A digital magazine for the endlessly curious</div>
        </div>

        <div className="hero-featured-issue" aria-label="Featured magazine cover: The AI Frontier">
          <div className="issue-orbit orbit-one" />
          <div className="issue-orbit orbit-two" />
          <div className="issue-card-3d">
            <div className="issue-cover">
              <div className="cover-topline"><span>INNOVATEX</span><span>VOL. 01 / 2026</span></div>
              <div className="cover-art" aria-hidden="true">
                <div className="cover-glow" />
                <div className="cover-core"><span>✳</span></div>
                <div className="cover-ring ring-a" />
                <div className="cover-ring ring-b" />
                <div className="cover-ring ring-c" />
              </div>
              <div className="cover-copy">
                <span className="cover-kicker">THE AI FRONTIER</span>
                <h2>Beyond<br /><i>the</i> algorithm.</h2>
                <p>How intelligence is changing the way we create, discover and build.</p>
              </div>
              <div className="cover-bottom"><span>IDEAS FOR WHAT'S NEXT</span><span>01 — 06</span></div>
            </div>
            <div className="issue-spine" />
          </div>
          <div className="floating-label label-top"><span>01</span> THINK / CREATE</div>
          <div className="floating-label label-bottom">A NEW PERSPECTIVE <span>↗</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to learn about InnovateX"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
};

export default Hero;