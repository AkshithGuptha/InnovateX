import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Innovate<span>X</span></h2>
          <p>Exploring Tomorrow's Innovations Today.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#issues">Magazine Issues</a></li>
            <li><a href="#articles">Latest Articles</a></li>
            <li><a href="#team">Editorial Team</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@innovatex.edu</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get the latest issue straight to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InnovateX Magazine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
