import "./Hero.css";
import profileImage from "../assets/images/profile.png";
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope
} from "react-icons/fa";

function Hero() {
    return (
        <section id="home" className="hero">

            {/* Background decorative elements */}
            <div className="hero-background-glow"></div>
            <div className="hero-background-ring hero-ring-one"></div>
            <div className="hero-background-ring hero-ring-two"></div>

            <div className="hero-container">

                {/* =========================================
                    LEFT SIDE — HERO CONTENT
                ========================================= */}

                <div className="hero-content">

                    <p className="hero-intro">
                        HELLO, I'M
                    </p>

                    <h1 className="hero-title">
                        Rajeshwari{" "}
                        <span>Ravi.</span>
                    </h1>

                    <h2 className="hero-role">
                        Junior Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        I'm a <strong>Full Stack Developer</strong> who loves
                        turning ideas into clean, functional, and user-focused
                        digital experiences.
                    </p>

                    <p className="hero-description hero-description-second">
                        From crafting responsive interfaces to building secure
                        backend systems and REST APIs, I enjoy working across
                        the stack to create products that are not just
                        functional — but thoughtfully built.
                    </p>

                    <p className="hero-motto">
                        Building. Learning. Evolving.
                        <span> One project at a time.</span>
                    </p>

                    <div className="hero-actions">

                        <a
                            href="#projects"
                            className="primary-btn"
                        >
                            <span>Explore My Work</span>
                            <span className="btn-arrow">↗</span>
                        </a>

                        <a
                            href="/Rajeshwari_Ravi.pdf"
                            className="secondary-btn"
                            download="Rajeshwari_Ravi_Resume.pdf"
                        >
                            <span>Download Resume</span>
                            <span className="btn-arrow">↓</span>
                        </a>

                    </div>

                    <div className="hero-socials">

                        <a
                            href="https://github.com/rajeshwariravi-codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon github"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/rajeshwariravi16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="mailto:rajiravi72351@gmail.com"
                            className="social-icon email"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>

                    </div>

                </div>


                {/* =========================================
                    RIGHT SIDE — PROFILE IMAGE
                ========================================= */}

                {/* RIGHT SIDE — HERO VISUAL */}
                <div className="hero-visual">

                    {/* Main image atmosphere */}
                    <div className="hero-image-glow"></div>

                    {/* Orbit rings */}
                    <div className="hero-image-ring hero-image-ring-one"></div>
                    <div className="hero-image-ring hero-image-ring-two"></div>

                    {/* Small decorative particles */}
                    <span className="hero-spark hero-spark-one">✦</span>
                    <span className="hero-spark hero-spark-two">✦</span>
                    <span className="hero-spark hero-spark-three">·</span>

                    {/* Profile image */}
                    <div className="hero-image-container">

                        <img
                            src={profileImage}
                            alt="Rajeshwari Ravi"
                            className="hero-profile-image"
                        />

                    </div>


                    {/* =========================================
                        CARD 01 — MY APPROACH
                    ========================================= */}

                    <div className="hero-tagline-card">

                        <span className="tagline-dot"></span>

                        <div className="tagline-card-content">

                            <small>My Approach</small>

                            <p>Code With Purpose.</p>
                            <p>Design With Intention.</p>

                        </div>

                    </div>


                    {/* =========================================
                        CARD 02 — TECH STACK
                    ========================================= */}

                    <div className="hero-tech-card">

                        <div className="tech-card-top">

                            <span className="tech-icon">✦</span>

                            <small>Tech Stack</small>

                        </div>

                        <div className="tech-list">

                            <span>React</span>
                            <i></i>

                            <span>PHP</span>
                            <i></i>

                            <span>Node.js</span>

                        </div>

                    </div>


                    {/* =========================================
                        CARD 03 — CURRENTLY
                    ========================================= */}

                    <div className="hero-floating-card">

                        <span className="floating-dot"></span>

                        <div>

                            <small>Currently</small>

                            <p>Building &amp; Learning</p>

                        </div>

                        <span className="status-arrow">↗</span>

                    </div>

                </div>

            </div>

            {/* Scroll indicator */}

            <a
                href="#about"
                className="hero-scroll"
                aria-label="Scroll to About section"
            >
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </a>

        </section>
    );
}

export default Hero;
