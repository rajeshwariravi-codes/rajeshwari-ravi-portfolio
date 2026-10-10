import {
  FaBriefcase,
  FaMicrophoneAlt,
  FaBrain,
  FaFlask,
  FaMapMarkerAlt,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";

import "./Recognition.css";

const records = [
  {
    id: "01",
    type: "PROJECT",
    year: "FULL STACK",
    title: "Full Stack Developer Intern",
    organization: "GitHub · rajeshwariravi-codes/expert-cluster",
    icon: <FaBriefcase />,
    description:
      "Developed a full-stack academic support platform using PHP, MySQL, JavaScript, HTML5, CSS3, and Bootstrap, enabling real-time student–expert collaboration and test-based learning.",
    location: "Coimbatore, Tamil Nadu",
    project: "Ask Expert – Expert Cluster",
    contributions: [
      "Engineered role-based dashboards with query management, custom assessments, answer submission, and performance tracking through responsive web interfaces.",
      "Implemented secure authentication, session management, feedback systems, and a scalable relational MySQL database to ensure data integrity, security, and platform reliability.",
    ],
    skills: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    id: "02",
    type: "ACADEMIC ACHIEVEMENT",
    year: "AWARD",
    title: "Proficiency Award",
    organization: "Academic Excellence",
    icon: <FaFlask />,
    description:
      "Proficiency Award for consistent academic excellence and outstanding overall performance.",
    contributions: [],
    skills: ["Academic Excellence"],
  },
  {
    id: "03",
    type: "PAPER PRESENTATION",
    year: "1ST PLACE",
    title: "ChatGPT and AI Tools",
    organization: "Intra-Collegiate Paper Presentation",
    icon: <FaMicrophoneAlt />,
    description:
      "1st Place in the Intra-Collegiate Paper Presentation on “ ChatGPT and AI Tools” , demonstrating research and technical communication skills.",
    contributions: [],
    skills: ["Research", "AI Tools", "Technical Communication"],
  },
  {
    id: "04",
    type: "TECHNICAL PAPER",
    year: "PRESENTATION",
    title: "Edge Computing",
    organization: "Technical Paper Presentation",
    icon: <FaBrain />,
    description:
      "Presented a technical paper on “ Edge Computing” , showcasing knowledge of distributed computing and cloud-edge technologies.",
    contributions: [],
    skills: ["Edge Computing", "Distributed Computing", "Cloud-Edge Technologies"],
  },
  {
    id: "05",
    type: "WORKSHOPS",
    year: "COMPLETED",
    title: "Full Stack Development & Office with AI",
    organization: "Technical Workshops",
    icon: <FaFlask />,
    description:
      "Completed workshops in Full Stack Development and Office with AI, strengthening web development and AI-assisted productivity skills.",
    contributions: [],
    skills: [
      "Full Stack Development",
      "Office with AI",
      "AI-Assisted Productivity",
    ],
  },
];

function Recognition() {
  return (
    <section className="mk-recognition" id="recognition">
      <div className="mk-recognition-inner">
        {/* HEADER */}
        <header className="mk-recognition-header">
          <div className="mk-recognition-section-meta">
            <span className="mk-recognition-number">07</span>

            <span className="mk-recognition-label">
              <i />
              CERTIFICATIONS & ACHIEVEMENTS
            </span>
          </div>

          <div className="mk-recognition-intro">
            <h2>
              Certifications &
              <span> Achievements.</span>
            </h2>

            <p>
              Projects and academic achievements that showcase my
              technical skills and learning journey.
            </p>
          </div>
        </header>

        {/* COMPACT CARDS */}
        <div className="mk-recognition-list">
          {records.map((item) => (
            <article
              className="mk-recognition-item"
              key={item.id}
            >
              {/* CARD HEADER */}
              <button
                type="button"
                className="mk-recognition-trigger"
                aria-label={`View details for ${item.title}`}
              >
                <span className="mk-recognition-index">
                  {item.id}
                </span>

                <span className="mk-recognition-icon">
                  {item.icon}
                </span>

                <span className="mk-recognition-title-block">
                  <span className="mk-recognition-type">
                    {item.type}
                  </span>

                  <span className="mk-recognition-title">
                    {item.title}
                  </span>

                  <span className="mk-recognition-organization">
                    {item.organization}
                  </span>
                </span>

                <span className="mk-recognition-year">
                  {item.year}
                </span>

                <span className="mk-recognition-toggle">
                  <FaPlus />
                </span>
              </button>

              {/* DETAILS */}
              <div className="mk-recognition-details">
                <div className="mk-recognition-detail-copy">
                  <span className="mk-recognition-detail-label">
                    OVERVIEW
                  </span>

                  <p>{item.description}</p>

 {item.location && (
                    <div className="mk-recognition-location">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                  )}


                  {item.project && (
                    <div className="mk-recognition-project">
                      <span>PROJECT</span>
                      <strong>{item.project}</strong>
                    </div>
                  )}

                  
                </div>

                <div className="mk-recognition-detail-info">
                  {item.contributions.length > 0 && (
                    <>
                      <span className="mk-recognition-detail-label">
                        KEY CONTRIBUTIONS
                      </span>

                      <ul className="mk-recognition-contributions">
                        {item.contributions.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <span className="mk-recognition-detail-label">
                    SKILLS & KNOWLEDGE
                  </span>

                  <div className="mk-recognition-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mk-recognition-bottom">
          <span>LEARN</span>
          <span className="mk-recognition-bottom-line" />
          <span>BUILD</span>
          <span className="mk-recognition-bottom-line" />
          <span>GROW</span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
}

export default Recognition;