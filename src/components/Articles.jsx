import './Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      category: "Artificial Intelligence",
      readTime: "5 min read",
      title: "The Ethics of Autonomous Systems",
      excerpt: "As AI systems take on more decision-making roles, how do we ensure they align with human values and ethical standards?",
      author: "Dr. Sarah Chen"
    },
    {
      id: 2,
      category: "Engineering",
      readTime: "8 min read",
      title: "Materials of the Future",
      excerpt: "Graphene and beyond: How new nanomaterials are revolutionizing battery technology and structural engineering.",
      author: "James Wilson"
    },
    {
      id: 3,
      category: "Biotech",
      readTime: "6 min read",
      title: "CRISPR and the Next Generation",
      excerpt: "A deep dive into the latest advancements in gene editing and what it means for the future of personalized medicine.",
      author: "Elena Rodriguez"
    }
  ];

  return (
    <section className="articles section-padding" id="articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span>Articles</span></h2>
          <p className="section-subtitle">Deep dives into the ideas shaping tomorrow.</p>
        </div>

        <div className="articles-grid">
          {articles.map((article, idx) => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <div className={`article-placeholder-img img-${idx}`}></div>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                <h3><a href="#">{article.title}</a></h3>
                <p>{article.excerpt}</p>
                <div className="article-footer">
                  <span className="article-author">By {article.author}</span>
                  <a href="#" className="read-more">Read More &rarr;</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
