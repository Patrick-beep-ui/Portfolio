import { useState } from "react";
import "../../styles/projects.css";
import projectsData from "../../data/projects.json";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = projectsData.projects;

  const categories = [
    "All",
    ...new Set(projects.flatMap(project => project.categories))
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(project =>
          project.categories.includes(activeCategory)
        );

  return (
    <section className="projects-container section" id="projects">
      <h2 className="section-heading">Projects</h2>

      <div className="projects-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ProjectsList
        key={activeCategory}
        projects={filteredProjects}
      />
    </section>
  );
};

export default Projects;
