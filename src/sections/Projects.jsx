import { useState } from "react";
import "./Projects.css";

import expertCluster1 from "../assets/images/expert-cluster-1.png";
import expertCluster2 from "../assets/images/expert-cluster-2.png";
import expertCluster3 from "../assets/images/expert-cluster-3.png";
import expertCluster4 from "../assets/images/expert-cluster-4.png";
import expertCluster5 from "../assets/images/expert-cluster-5.png";

const screenshots = [
{
image: expertCluster1,
title: "Project Overview",
alt: "Expert Cluster project overview",
},
{
image: expertCluster2,
title: "Admin Dashboard",
alt: "Expert Cluster admin dashboard",
},
{
image: expertCluster3,
title: "Expert Registration Form",
alt: "Expert Cluster expert registration form",
},
{
image: expertCluster4,
title: "Expert Collaboration",
alt: "Expert Cluster expert collaboration interface",
},
{
image: expertCluster5,
title: "Experts Access Control Interface",
alt: "Expert Cluster interface for managing expert access and controls",
},
];

const features = [
"Role-based authentication",
"Student–expert collaboration",
"Query management",
"Custom assessments",
"Performance tracking",
"Feedback & reporting",
"Session management",
"Relational database",
];

const technologies = [
"PHP",
"MySQL",
"JavaScript",
"HTML5",
"CSS3",
"Bootstrap",
"XAMPP",
];

function Projects() {
const [activeImage, setActiveImage] = useState(0);

const showPrevious = () => {
setActiveImage((current) =>
current === 0 ? screenshots.length - 1 : current - 1
);
};

const showNext = () => {
setActiveImage((current) =>
current === screenshots.length - 1 ? 0 : current + 1
);
};

return ( 
<section className="projects-section" id="projects"> 
  <div className="projects-container">

    {/* Section Header */}
    {/* Section Header */}
            <div className="projects-header reveal">
            <span className="projects-index">04</span>

            <div className="projects-label">
                <span className="projects-line"></span>
                <span>PROJECTS</span>
            </div>
            </div>
    <div className="projects-header">
      <h2>
        Projects<span>.</span>
      </h2>
    </div>

    {/* Featured Project Layout */}
    <article className="project-showcase">

      {/* LEFT: Image Gallery */}
      <div className="project-gallery">
        <div className="project-gallery-main">

          <div className="project-image-topbar">
            <span className="project-window-dots">
              <i />
              <i />
              <i />
            </span>

            <span className="project-image-counter">
              {String(activeImage + 1).padStart(2, "0")}
              <span>
                {" "}/ {String(screenshots.length).padStart(2, "0")}
              </span>
            </span>
          </div>

          <div className="project-image-stage">
            <img
              key={screenshots[activeImage].image}
              src={screenshots[activeImage].image}
              alt={screenshots[activeImage].alt}
              className="project-main-image"
            />

            <button
              type="button"
              className="project-gallery-arrow project-gallery-prev"
              onClick={showPrevious}
              aria-label="View previous screenshot"
            >
              ←
            </button>

            <button
              type="button"
              className="project-gallery-arrow project-gallery-next"
              onClick={showNext}
              aria-label="View next screenshot"
            >
              →
            </button>
          </div>

          <div className="project-image-caption">
            <span>{screenshots[activeImage].title}</span>
            <span>EXPERT CLUSTER / UI</span>
          </div>
        </div>

        {/* Five Clickable Thumbnails */}
        <div
          className="project-thumbnails"
          aria-label="Project screenshots"
        >
          {screenshots.map((screenshot, index) => (
            <button
              type="button"
              key={screenshot.title}
              className={`project-thumbnail ${
                activeImage === index ? "active" : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`Show screenshot ${index + 1}: ${screenshot.title}`}
              aria-pressed={activeImage === index}
            >
              <img src={screenshot.image} alt="" />

              <span className="project-thumbnail-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <p className="project-gallery-hint">
          SELECT A VIEW <span>—</span> EXPLORE THE PROJECT
        </p>
      </div>

      {/* RIGHT: All Project Content */}
      <div className="project-right-content">

        {/* Project Introduction */}
        <div className="project-intro">
          <span className="project-eyebrow">
            01 — FEATURED PROJECT
          </span>

          <h2 className="project-title">
            Expert {" "}
            <span>Cluster.</span>
          </h2>

          <p className="project-subtitle">ASK EXPERT</p>

          <p className="project-description">
            A full-stack academic support platform connecting
            students and experts through structured queries,
            assessments, and performance tracking.
          </p>

          <div className="project-meta">
            <span>
              <span className="project-meta-symbol">◷</span>
              Dec 2024 — May 2025
            </span>
            <span>{" "}</span>
            <span>
              <span className="project-meta-symbol">✳</span>
              Full Stack Development
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="project-features">
          <span className="project-section-label">
            KEY FEATURES <span>08</span>
          </span>

          <div className="project-feature-list">
            {features.map((feature, index) => (
              <div className="project-feature" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="project-technologies">
          <span className="project-section-label">
            BUILT WITH
          </span>

          <div className="project-tech-list">
            {technologies.map((technology) => (
              <span className="project-tech" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="project-repository">
          <span className="project-section-label">
            EXPLORE THE CODE
          </span>

          <a
            href="https://github.com/rajeshwariravi-codes/expert-cluster"
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link"
          >
            <span className="project-github-icon">GH</span>

            <span className="project-github-copy">
              <span>GitHub Repository</span>
              <small>Explore the source code</small>
            </span>

            <span className="project-github-arrow">↗</span>
          </a>
        </div>

      </div>
    </article>

    {/* Closing Detail */}
    <div className="projects-footer-line">
      <span>BUILD</span>
      <span className="projects-footer-slash">/</span>
      <span>LEARN</span>
      <span className="projects-footer-slash">/</span>
      <span>GROW</span>
      <span className="projects-footer-rule" />
    </div>

  </div>
</section>

);
}

export default Projects;
