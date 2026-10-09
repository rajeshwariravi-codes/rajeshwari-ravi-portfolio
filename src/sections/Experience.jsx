
import "./Experience.css";

const technologies = [
  "PHP",
  "MySQL",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Git",
  "GitHub",
  "XAMPP",
  "VS Code",
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
            {/* Section Header */}
            <div className="experience-header reveal">
            <span className="experience-index">03</span>

            <div className="experience-label">
                <span className="experience-line"></span>
                <span>EXPERIENCE</span>
            </div>
            </div>

          <h2>
            Experience, <span>in practice.</span>
          </h2>
        </div>

        <article className="experience-entry">

          <div className="experience-index">
            <span className="index-number">01</span>
            <span className="index-line" />
            <span className="index-caption">FIRST CHAPTER</span>
          </div>

          <div className="experience-content">

            <div className="experience-meta">
              <span>DEC 2024 — MAY 2025</span>
              <span className="experience-status">
                <span />
                6-MONTH INTERNSHIP
              </span>
            </div>

            <h3>Full Stack Developer Intern</h3>

            <div className="experience-company">
              Techvolt Software <span>/</span> Coimbatore
            </div>

            <div className="experience-project">
              <div className="project-topline">
                <span>FEATURED PROJECT / 001</span>
                <span>ACADEMIC PLATFORM</span>
              </div>

              <h4>Ask Expert — Expert Cluster</h4>

              <p>
                An academic platform connecting students and experts
                through queries, assessments, and performance tracking.
              </p>

              <div className="experience-contributions">
                <span>Full-stack development</span>
                <span>Role-based authentication</span>
                <span>Query management</span>
                <span>Role–based dashboards</span>
                <span>Database & session handling</span>
                <span>Feedback & issue reporting</span>
              </div>
            
            <a
                className="project-link"
                href="https://github.com/rajeshwariravi-codes/expert-cluster"
                target="_blank"
                rel="noreferrer"
                aria-label="View Ask Expert project on GitHub"
            >
                <span className="project-link-text">VIEW PROJECT</span>
                <span className="project-link-arrow">↗</span>
            </a>

            </div>

            <div className="experience-stack">
              <span className="stack-heading">TECH STACK</span>

              <div className="stack-list">
                {technologies.map((technology) => (
                  <span className="stack-item" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>

        <div className="experience-signoff">
          <span>END OF ENTRY / 001</span>
          <span>BUILDING WITH INTENTION ↗</span>
        </div>

      </div>
    </section>
  );
}

export default Experience;