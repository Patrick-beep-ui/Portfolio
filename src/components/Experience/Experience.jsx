import { useState, useEffect } from "react";
import experienceData from "../../data/experience.json";
import "../../styles/experience.css";

const Experience = () => {
  const { experience } = experienceData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeJob = experience[activeIndex];

  const handleTabChange = (index) => {
    if (index === activeIndex) return;

    setIsAnimating(true);

    setTimeout(() => {
      setDisplayIndex(index);
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300); 
  };

  return (
    <section className="experience-container section" id="experience">
      <h2 className="section-heading">Experience</h2>

      <div className="experience-content">
        {/* LEFT TABS */}
        <div className="experience-tabs">
          {experience.map((job, index) => (
            <button
              key={index}
              className={`experience-tab ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleTabChange(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className={`experience-details ${isAnimating  ? "fade-out" : "fade-in"}`}>

          {/* CASE: COMPANY WITH MULTIPLE ROLES */}
          {activeJob.roles ? (
            activeJob.roles.map((role, idx) => (
              <div key={idx} className="experience-role">
                <h3 className="role-title">
                  {role.position} —{" "}
                  <span className="department">{role.department}</span>
                </h3>

                <p className="role-date">
                  {role.startDate} – {role.endDate}
                </p>

                <ul className="role-description">
                  {role.responsibilities.map((item, i) => ( 
                    <li key={i} className="text">{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            /* CASE: SINGLE ROLE COMPANY */
            <>
              <h4 className="role-title">{activeJob.position}</h4>
              <p className="role-date">
                {activeJob.startDate} – {activeJob.endDate}
              </p>

              <ul className="role-description">
                {activeJob.responsibilities.map((item, i) => (
                  <li key={i} className="text">{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
