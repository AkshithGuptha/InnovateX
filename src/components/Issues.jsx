import './Issues.css';

const Issues = () => {
  const issues = [
    {
      id: 1,
      number: "01",
      title: "The AI Frontier",
      date: "Fall 2026",
      desc: "Exploring how generative AI is reshaping research, development, and everyday life.",
      featured: true
    },
    {
      id: 2,
      number: "02",
      title: "Sustainable Tech",
      date: "Winter 2026",
      desc: "Innovations in green engineering and sustainable solutions for a warming planet.",
      featured: false
    },
    {
      id: 3,
      number: "03",
      title: "Quantum Leap",
      date: "Spring 2027",
      desc: "Demystifying quantum computing and its practical applications in the near future.",
      featured: false
    }
  ];

  return (
    <section className="issues section-padding" id="issues">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Magazine <span>Issues</span></h2>
          <p className="section-subtitle">Read our published editions. Download or read online.</p>
        </div>

        <div className="issues-grid">
          {issues.map(issue => (
            <div key={issue.id} className={`issue-card ${issue.featured ? 'featured' : ''}`}>
              <div className="issue-card-image">
                <div className="placeholder-cover">
                  <span>Issue {issue.number}</span>
                </div>
              </div>
              <div className="issue-card-content">
                <div className="issue-meta">
                  <span className="issue-date">{issue.date}</span>
                  {issue.featured && <span className="badge">Latest</span>}
                </div>
                <h3>{issue.title}</h3>
                <p>{issue.desc}</p>
                <div className="issue-actions">
                  <button className="btn btn-primary">Read Issue</button>
                  <button className="btn btn-outline">PDF</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;
