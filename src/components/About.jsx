import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">The Future, <span>Unpacked.</span></h2>
            <p className="lead">
              InnovateX is a premier digital magazine dedicated to exploring the intersection of 
              technology, engineering, artificial intelligence, and human ingenuity.
            </p>
            
            <div className="mission-vision">
              <div className="mv-card">
                <h3>Our Vision</h3>
                <p>To be the leading voice for student innovation, research, and emerging technological trends that will shape tomorrow's world.</p>
              </div>
              <div className="mv-card">
                <h3>Our Mission</h3>
                <p>To highlight groundbreaking research, share compelling stories of innovation, and foster a community of forward-thinking individuals.</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-grid">
              <div className="stat-card glass">
                <span className="stat-number">50+</span>
                <span className="stat-label">Universities</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">12k</span>
                <span className="stat-label">Readers</span>
              </div>
              <div className="stat-card glass">
                <span className="stat-number">200+</span>
                <span className="stat-label">Contributors</span>
              </div>
              <div className="stat-card glass accent-bg">
                <span className="stat-number">#1</span>
                <span className="stat-label">STEM Mag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
