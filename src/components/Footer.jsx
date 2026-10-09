
import "./Footer.css";

const socials = [
  {
    name: "GitHub",
    caption: "View my code",
    href: "https://github.com/rajeshwariravi-codes",
    symbol: "GH",
  },
  {
    name: "LinkedIn",
    caption: "Let's connect",
    href: "https://www.linkedin.com/in/rajeshwariravi16",
    symbol: "in",
  },
  {
    name: "Email",
    caption: "Drop a message",
    href: "mailto:rajiravi72351@gmail.com",
    symbol: "✉",
  },
];

function Footer() {
  return (
    <footer className="premium-footer" id="footer">
      <div className="footer-orb footer-orb-one" />
      <div className="footer-orb footer-orb-two" />

      <div className="premium-footer-inner">
        <div className="footer-main-grid">

          <div className="footer-intro">
            <span className="footer-kicker">
              LET'S CONNECT <span />
            </span>

            <a className="footer-name" href="#home">
              Rajeshwari
              <br />
              <span>Ravi.</span>
            </a>

            <p className="footer-job-title">Junior Full Stack Developer</p>

            <p className="footer-tagline">
              Turning ideas into interactive experiences,
              one line of code at a time.
            </p>

            <div className="footer-signature-mark">
              R<span>.</span>
            </div>
          </div>

          <nav className="footer-social-area" aria-label="Social links">
            <span className="footer-kicker">
              FIND ME ELSEWHERE <span />
            </span>

            <div className="footer-social-list">
              {socials.map((social) => (
                <a
                  className="footer-social-card"
                  href={social.href}
                  key={social.name}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                >
                  <span className="footer-social-symbol">
                    {social.symbol}
                  </span>

                  <span className="footer-social-copy">
                    <span className="footer-social-name">
                      {social.name}
                    </span>
                    <span className="footer-social-caption">
                      {social.caption}
                    </span>
                  </span>

                  <span className="footer-social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="footer-note">
            <span className="footer-sparkle">✳</span>

            <p className="footer-mantra">
              BUILD <span>/</span> LEARN <span>/</span>
              <strong>GROW</strong>
            </p>

            <p className="footer-quote">
              Better code.
              <br />
              Brighter tomorrows.
            </p>

            <span className="footer-note-line" />
          </div>

        </div>

        <div className="footer-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 25 C180 25 210 25 330 25 S490 2 600 25 S770 48 900 25 S1080 25 1200 25" />
          </svg>
        </div>

        <div className="premium-footer-bottom">
          <p>
            <span className="footer-bottom-star">✳</span>
            © {new Date().getFullYear()} Rajeshwari Ravi.
            <span className="footer-rights">All rights reserved.</span>
          </p>

          <a href="#home" className="footer-back-top">
            <span>BACK TO TOP</span>
            <span className="footer-top-arrow">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;