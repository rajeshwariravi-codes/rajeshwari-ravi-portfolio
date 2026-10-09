import { useState } from "react";
import "./Contact.css";
import {
    FaGithub,
    FaPhoneAlt,
    FaLinkedinIn,
    FaEnvelope,
    FaMapMarkerAlt 
} from "react-icons/fa";

function Contact() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        setIsSubmitting(true);

        setStatus({
            type: "",
            message: "",
        });

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to send your message."
                );
            }

            setStatus({
                type: "success",
                message: "Your message was sent successfully.",
            });

            form.reset();

        } catch (error) {

            console.error("Contact form error:", error);

            setStatus({
                type: "error",
                message: "Unable to send your message. Please try again.",
            });

        } finally {

            setIsSubmitting(false);

        }
    };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="contact-heading">

          <span className="contact-section-number">
            08
          </span>

          <div className="contact-section-label">
            <span></span>
            CONTACT
          </div>

        </div>


        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <div className="contact-content">

          {/* LEFT — CONTACT INFO */}

          <div className="contact-info">

            <div className="contact-info-intro">
              <span className="contact-mini-label">
                GET IN TOUCH
              </span>

              <h3>
                Let's start a
                <br />
                <span>conversation.</span>
              </h3>

              <p>
              Have a project, opportunity, or idea in mind? Let’s connect, share ideas, and build something meaningful together.
              </p>
            </div>


            {/* CONTACT DETAILS */}

            <div className="contact-details">

              {/* EMAIL */}

              <a
                href="mailto:rajiravi72351@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>

                <div className="contact-detail-text">
                  <span>Email</span>
                  <strong>
                    rajiravi72351@gmail.com
                  </strong>
                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>
              </a>


              {/* PHONE */}
              <a
              href="tel:+919566872225"
              className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <FaPhoneAlt />
                </div>

                <div className="contact-detail-text">
                  <span>Phone</span>
                  <strong>Let's connect</strong>
                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>
              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/rajeshwariravi16"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <FaLinkedinIn />
                </div>

                <div className="contact-detail-text">
                  <span>LinkedIn</span>
                  <strong>
                    Connect with me
                  </strong>
                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>
              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/rajeshwariravi-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <FaGithub />
                </div>

                <div className="contact-detail-text">
                  <span>GitHub</span>
                  <strong>
                    View my repositories
                  </strong>
                </div>

                <span className="contact-detail-arrow">
                  ↗
                </span>
              </a>


              {/* LOCATION */}

              <div className="contact-detail contact-location">

                <div className="contact-detail-icon">
                  <FaMapMarkerAlt  />
                </div>

                <div className="contact-detail-text">
                  <span>Location</span>
                  <strong>
                    Surampatti Valasu, Erode District, Tamil Nadu, India
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT — CONTACT FORM */}

          <div className="contact-form-wrapper">

            <div className="form-top">
              <span>01</span>
              <p>SEND A MESSAGE</p>
            </div>


            <form className="contact-form" onSubmit={handleSubmit}>

              {/* NAME */}

              <div className="form-field">
                <label htmlFor="name"> NAME </label>
                <input id="name" type="text" name="name" placeholder="Your name" />
              </div>

              {/* EMAIL */}

              <div className="form-field">
                <label htmlFor="email"> EMAIL </label>
                <input id="email" type="email" name="email" placeholder="your@email.com" />
              </div>

              {/* MESSAGE */}

              <div className="form-field">
                <label htmlFor="message"> MESSAGE </label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." ></textarea>
              </div>


              {/* BUTTON */}

                <button
                    type="submit"
                    className="contact-submit"
                    disabled={isSubmitting}
                >
                    <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </span>

                    <span className="submit-arrow">
                        {isSubmitting ? "..." : "↗"}
                    </span>
                </button>

            </form>

            {status.message && (
                <p className={`form-status ${status.type}`}>
                    {status.message}
                </p>
            )}

          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="contact-bottom">

          <span></span>

          <p>
            THINK • BUILD • CONNECT
          </p>

          <span></span>

        </div>

      </div>
    </section>
  );
}

export default Contact;