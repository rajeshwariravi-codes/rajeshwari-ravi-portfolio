import { School, BookOpen, GraduationCap } from "lucide-react";
import "./Education.css";

const educationData = [
    {
        year: "2019 — 2020",
        degree: "SSLC",
        institution: "Vellalar High School for Girls, Erode",
        score: "72.4%",
        board: "State Board",
        icon: School,
    },
    {
        year: "2021 — 2022",
        degree: "HSC · Bio-Maths",
        institution: "Vellalar Matric Higher Secondary School, Erode",
        score: "82.83%",
        board: "Matriculation",
        icon: BookOpen,
    },
    {
        year: "2022 — 2025",
        degree: "Bachelor of Computer Applications",
        institution: "Bharathidasan College of Arts and Science, Erode",
        score: "88%",
        board: "Web Development · DBMS · Data Structures",
        icon: GraduationCap,
    },
];

function Education() {
    return (
        <section className="education-section" id="education">
            <div className="education-container">

                {/* Section Heading */}
                <div className="education-header reveal">
                    <span className="education-index">06</span>

                    <div className="education-label">
                    <span className="education-line"></span>
                    <span>EDUCATION</span>
                    </div>
                </div>
                <div className="education-heading">
                    <h2>Education</h2>
                </div>

                {/* Timeline */}
                <div className="education-timeline">

                    {educationData.map((item, index) => (
                        <div
                            className={`education-item ${
                                index % 2 === 0 ? "timeline-left" : "timeline-right"
                            }`}
                            key={item.degree}
                        >
                            {/* Left Card */}
                            <div className="education-card-wrapper">
                                {index % 2 === 0 && (
                                    <EducationCard item={item} />
                                )}
                            </div>

                            {/* Timeline Center */}
                            <div className="timeline-center">
                                <span className="timeline-dot">
                                    <item.icon size={17} strokeWidth={1.7} />
                                </span>                           
                            </div>
                            {/* Right Card */}
                            <div className="education-card-wrapper">
                                {index % 2 !== 0 && (
                                    <EducationCard item={item} />
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}


/* Education Card */

function EducationCard({ item }) {
    return (
        <article className="education-card">

            <div className="education-card-top">
                <span className="education-year">
                    {item.year}
                </span>

                <span className="education-score">
                    {item.score}
                </span>
            </div>

            <h3>{item.degree}</h3>

            <p className="education-institution">
                {item.institution}
            </p>

            <p className="education-detail">
                {item.board}
            </p>

        </article>
    );
}

export default Education;