import { useState } from "react";
import "./Skills.css";

import xamppLogo from "../assets/images/xampp.png";
import chatgptLogo from "../assets/images/chatGPT.png";
import gammaLogo from "../assets/images/gamma.png";

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: "frontend",
      number: "01",
      title: "Frontend",
      description: "Interfaces & experiences",
      tag: "THE VISUAL LAYER",
      symbol: "</>",
      skills: [
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Backend",
      description: "Logic & server systems",
      tag: "THE ENGINE ROOM",
      symbol: "{ }",
      skills: [
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "REST APIs",
          logo: null,
        },
      ],
    },
    {
      id: "database",
      number: "03",
      title: "Database",
      description: "Data & storage",
      tag: "THE DATA LAYER",
      symbol: "⌘",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      id: "tools",
      number: "04",
      title: "Tools",
      description: "Workflow & development",
      tag: "MY WORKBENCH",
      symbol: "⚙",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "XAMPP",
          logo: xamppLogo,
        },
      ],
    },
    {
      id: "ai",
      number: "05",
      title: "AI / Productivity",
      description: "Tools for smarter productivity",
      tag: "WORK SMARTER",
      symbol: "✳",
      skills: [
        {
          name: "ChatGPT",
          logo: chatgptLogo,
        },
        {
          name: "GitHub Copilot",
          logo: "https://cdn.simpleicons.org/githubcopilot",
        },
        {
          name: "Gemini",
          logo: "https://cdn.simpleicons.org/googlegemini",
        },
        {
          name: "Canva AI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        {
          name: "Notion AI",
          logo: "https://cdn.simpleicons.org/notion",
        },
        {
          name: "Gamma",
          logo: gammaLogo,
        },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      {/* Background decoration */}
      <div className="skills-bg" aria-hidden="true">
        <div className="skills-bg-orb skills-bg-orb-one" />
        <div className="skills-bg-orb skills-bg-orb-two" />
        <div className="skills-bg-grid" />
      </div>

      <div className="skills-container">
        {/* Heading */}
        <header className="skills-heading">
          <div className="skills-heading-top">
            <span className="skills-section-number">02</span>

            <span className="skills-section-label">
              <span className="skills-live-dot" />
              MY DIGITAL TOOLKIT
            </span>
          </div>

          <h2>
            Skills that
            <br />
            <span className="skills-heading-accent">
              bring ideas to life<span className="skills-heading-dot">.</span>
            </span>
          </h2>

          <div className="skills-heading-bottom">
            <p>
              From crafting beautiful interfaces to building functional
              systems, here are the technologies I use to turn ideas into
              reality.
            </p>

            <div className="skills-total">
              <strong>{String(
                categories.reduce(
                  (total, category) => total + category.skills.length,
                  0
                )
              ).padStart(2, "0")}</strong>
              <span>TECHNOLOGIES<br />AND TOOLS</span>
            </div>
          </div>
        </header>

        {/* Bento card layout */}
        <div className="skills-bento">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <article
                key={category.id}
                className={`skill-category-card skill-card-${category.id} ${
                  isActive ? "skill-category-active" : ""
                }`}
                style={{ "--card-index": index }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="skill-card-decoration" aria-hidden="true">
                  <span>{category.symbol}</span>
                </div>

                <div className="skill-card-top">
                  <span className="skill-card-number">
                    / {category.number}
                  </span>

                  <span className="skill-card-tag">{category.tag}</span>
                </div>

                <div className="skill-card-heading">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                  <span className="skill-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="skill-card-divider" />

                <div className="skill-chip-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      className="skill-chip"
                      key={skill.name}
                      style={{ "--chip-index": skillIndex }}
                    >
                      <span className="skill-chip-icon">
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt=""
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <span className="skill-code-icon">&lt;/&gt;</span>
                        )}
                      </span>

                      <span className="skill-chip-name">{skill.name}</span>
                    </div>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <span className="skill-card-footer-line" />
                  <span>
                    {String(category.skills.length).padStart(2, "0")} ITEMS
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom signature */}
        <footer className="skills-bottom">
          <span className="skills-bottom-line" />
          <p>DESIGN WITH PURPOSE. BUILD WITH PASSION.</p>
          <span className="skills-bottom-mark">✳</span>
        </footer>
      </div>
    </section>
  );
}

export default Skills;