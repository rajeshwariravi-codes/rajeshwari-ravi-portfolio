import "./Development.css";

const focusAreas = [
{
number: "01",
title: "Frontend",
detail: "JavaScript · React.js · Reusable UI",
},
{
number: "02",
title: "Backend",
detail: "PHP ·Node.js · Express.js",
},
{
number: "03",
title: "API Development",
detail: "REST APIs · Express.js · Integration",
},
{
number: "04",
title: "Database & Architecture",
detail: "MySQL · MongoDB · Full-stack flow",
},
];

function Development() {
return ( 
    <section className="development-section" id="development"> 
        <div className="development-container"> 
            {/* Section Header */}
            <div className="development-header reveal">
              <span className="development-index">05</span>

              <div className="development-label">
                  <span className="development-line"></span>
                  <span>CURRENT FOCUS</span>
              </div>
            </div>
            <div className="development-heading">

            <h2>
              Always learning<span>.</span> <span>Always building.</span>
            </h2>

            <p className="development-intro">
              Exploring modern technologies and strengthening my full-stack
              development skills, one project at a time.
            </p>
    </div>

    <div className="development-content">
      <div className="development-focus-list">
        {focusAreas.map((area) => (
          <div className="development-focus-item" key={area.number}>
            <span className="development-focus-number">
              {area.number}
            </span>

            <div className="development-focus-copy">
              <h3>{area.title}</h3>
              <p>{area.detail}</p>
            </div>

            <span className="development-item-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>

      <div className="development-path">
        <span className="development-path-label">
          MY LEARNING PATH
        </span>

        <div className="development-path-track">
            <span>JavaScript</span>
            <i>→</i>
            <span>React.js</span>
            <i>→</i>
            <span>Node.js</span>
            <i>→</i>
            <span>Express.js</span>
            <i>→</i>
            <span>MongoDB</span>
            <i>→</i>
            <span>REST APIs</span>
        </div>
      </div>
    </div>
  </div>
</section>

);
}

export default Development;
