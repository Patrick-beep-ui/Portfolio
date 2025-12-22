import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  if (!projects.length) {
    return <p className="no-projects">No projects found.</p>;
  }

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
