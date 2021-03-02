import React from "react";

import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  return (
    <ul className="project-list">
      {props.items.map((project) => (
        <ProjectItem
          image={project.imageUrl}
          title={project.title}
          description={project.description}
          id={project.id}
          details={project.details}
          detail={project.detail}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
