import React from "react";
import "./About.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "PHP",
  "MySQL",
  "Node.js",
  "Express.js",
  "REST APIs",
];

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Decorative Background */}
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* Section Header */}
        <div className="about-header reveal">
          <span className="about-index">01</span>

          <div className="about-label">
            <span className="about-line"></span>
            <span>ABOUT ME</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-main">

          {/* Left Side */}
          <div className="about-intro reveal">

            <p className="about-eyebrow">
              Full Stack Developer
            </p>

            <h2>
              Turning ideas into
              <span> useful experiences.</span>
            </h2>

            <p className="about-description">
              I’m a Full Stack Developer with a strong interest in building
              clean, responsive, and user-focused web applications. I enjoy
              working across both frontend and backend to turn ideas into
              practical digital experiences.
            </p>

            <p className="about-description">
              My development foundation includes{" "}
              <strong>HTML, CSS, JavaScript, Bootstrap, PHP, MySQL,
              Node.js, Express.js, and REST APIs</strong>, with a focus on
              responsive interfaces, secure backend systems, authentication,
              and structured databases.
            </p>

          </div>

          {/* Right Side */}
          <div className="about-visual reveal">

            {/* Experience Card */}
            <div className="experience-card">

              <div className="experience-top">
                <span className="experience-number">06</span>

                <span className="experience-plus">+</span>
              </div>

              <div className="experience-divider"></div>

              <p className="experience-title">
                MONTHS
              </p>

              <p className="experience-subtitle">
                Full Stack Development
              </p>

              <div className="experience-company">
                <span className="company-dot"></span>
                Techvolt Software
              </div>

            </div>

            {/* Floating Orbit */}
            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>

            <div className="orbit-dot"></div>

          </div>
        </div>

        {/* Internship + Direction */}
        <div className="about-bottom">

          <div className="about-story reveal">
            <span className="story-number">02</span>

            <div>
              <h3>
                Experience that
                <span> shaped my direction.</span>
              </h3>

              <p>
                During my <strong>6-month Full Stack Developer internship
                at Techvolt Software</strong>, I worked on real-world web
                applications involving authentication, role-based systems,
                responsive dashboards, database management, secure session
                handling, and API development.
              </p>
            </div>
          </div>

          <div className="about-story reveal">
            <span className="story-number">03</span>

            <div>
              <h3>
                Currently
                <span> evolving.</span>
              </h3>

              <p>
                I’m currently expanding my skills in{" "}
                <strong>React.js and modern full-stack development</strong>,
                with a focus on building efficient software, improving
                problem-solving ability, and creating solutions that are
                simple, useful, and reliable.
              </p>
            </div>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="about-stack reveal">

          <div className="stack-heading">
            <span>TECHNOLOGIES I WORK WITH</span>
          </div>

          <div className="stack-list">
            {skills.map((skill, index) => (
              <span
                className="stack-item"
                key={skill}
                style={{ "--item-index": index }}
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        {/* Closing Statement */}
        <div className="about-closing reveal">

          <div className="closing-line"></div>

          <p>
            Building. Learning. Evolving.
          </p>

          <span>
            One project at a time.
          </span>

        </div>

      </div>
    </section>
  );
};

export default About;
