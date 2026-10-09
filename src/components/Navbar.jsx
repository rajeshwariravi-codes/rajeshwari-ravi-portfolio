import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const sections = ["home", "about", "skills", "projects", "contact"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            let currentSection = "home";

            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        currentSection = sectionId;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);
        closeMenu();
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={() => handleNavClick("home")}
                >
                    <span>R</span>R
                </a>

                {/* Navigation */}
                <nav
                    className={`navbar-links ${
                        menuOpen ? "navbar-links-open" : ""
                    }`}
                >
                    <a
                        href="#home"
                        className={`navbar-link ${
                            activeSection === "home" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("home")}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={`navbar-link ${
                            activeSection === "about" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("about")}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={`navbar-link ${
                            activeSection === "skills" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("skills")}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={`navbar-link ${
                            activeSection === "projects" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("projects")}
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className={`navbar-link ${
                            activeSection === "contact" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("contact")}
                    >
                        Contact
                    </a>
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className={`navbar-cta ${
                        activeSection === "contact" ? "active" : ""
                    }`}
                    onClick={() => handleNavClick("contact")}
                >
                    <span>Let's Talk</span>
                    <span className="navbar-cta-arrow">↗</span>
                </a>

                {/* Mobile Menu */}
                <button
                    className={`navbar-menu ${
                        menuOpen ? "navbar-menu-open" : ""
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
}

export default Navbar;