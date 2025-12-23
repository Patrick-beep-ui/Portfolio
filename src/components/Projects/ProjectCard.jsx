import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"
import ProjectGallery from "./ProjectGallery"

const ProjectCard = ({ project }) => {
  const { title, description, technologies, media, github, live } = project
  const [open, setOpen] = useState(false);

  return (
    <>
    <article className="project-card" onClick={() => setOpen(true)}>
      
      {/* Cover */}
      <div className="project-cover">
        <img src={media.cover} alt={title} />
      </div>

      {/* Info */}
      <div className="project-info">
        
        {/* Links */}
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" id="github-link">
              <FaGithub />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

        <h3 className="project-title">{title}</h3>

        <p className="project-description">{description}</p>

        {/* Tech stack */}
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

      </div>
    </article>

    <ProjectGallery
    project={project}
    isOpen={open}
    onClose={() => setOpen(false)}
    />
  </>
  )
}

export default ProjectCard
