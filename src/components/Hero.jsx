import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="accent">Innovate</span>X
          </h1>
          <p className="hero-tagline">Exploring Tomorrow's Innovations Today</p>
          <div className="hero-actions">
            <a href="#issues" className="btn btn-primary">Read Latest Issue</a>
            <a href="#articles" className="btn btn-outline">Explore Articles</a>
          </div>
        </div>
        
        <div className="hero-featured-issue">
          <div className="issue-card-3d">
            <div className="issue-cover">
              {/* Placeholder for AI generated cover image */}
              <div className="cover-placeholder">
                <span className="issue-number">01</span>
                <h2>The AI Frontier</h2>
                <p>Volume 1 &middot; Fall 2026</p>
              </div>
            </div>
            <div className="issue-badge">Featured Issue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
