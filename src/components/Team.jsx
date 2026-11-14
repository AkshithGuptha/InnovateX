import './Team.css';

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Dr. Alice Morgan",
      role: "Editor-in-Chief",
      initials: "AM"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Managing Editor",
      initials: "DC"
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Lead Designer",
      initials: "SJ"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Technical Editor",
      initials: "MJ"
    }
  ];

  return (
    <section className="team section-padding" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The <span>Editorial Team</span></h2>
          <p className="section-subtitle">Meet the minds behind InnovateX.</p>
        </div>

        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-photo">
                <div className="photo-placeholder">
                  {member.initials}
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="member-socials">
                  <a href="#" aria-label="LinkedIn">LI</a>
                  <a href="#" aria-label="Twitter">X</a>
                  <a href="#" aria-label="Email">EM</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
