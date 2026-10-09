import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Development from "./sections/Development";
import Education from "./sections/Education";
import Recognition from "./sections/Recognition";
import Contact from "./sections/contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) return;

      const contactTop = contactSection.offsetTop;

      if (
        window.scrollY + window.innerHeight * 0.75 >=
        contactTop
      ) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className="app">


      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Development />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      {showWhatsApp && (
        <a
          href="https://wa.me/919566872225?text=Hello%20Rajeshwari%20Ravi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with me on WhatsApp"
        >
          {/* WhatsApp Logo */}
          {/* <svg
            viewBox="0 0 32 32"
            className="whatsapp-logo"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M19.11 17.23c-.28-.14-1.65-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.27-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32z"
            />

            <path
              fill="currentColor"
              d="M16.02 3.2c-7.08 0-12.83 5.75-12.83 12.83 0 2.26.59 4.47 1.72 6.41L3.08 28.8l6.51-1.71a12.78 12.78 0 0 0 6.43 1.73h.01c7.07 0 12.82-5.75 12.82-12.83S23.1 3.2 16.02 3.2zm0 23.5h-.01c-2 0-3.96-.54-5.66-1.56l-.4-.24-3.86 1.01 1.03-3.76-.26-.39a10.65 10.65 0 1 1 9.16 4.94z"
            />
          </svg> */}

          <FaWhatsapp className="whatsapp-logo" />

          <span></span>

          {/* <span className="whatsapp-float-arrow">
            ↗
          </span> */}

        </a>
      )}

    </div>
  );
}

export default App;