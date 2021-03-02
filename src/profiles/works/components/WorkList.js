import React from "react";

import WorkItem from "./WorkItem";

const WorkList = (props) => {
  return (
    <ul className="work-list">
      {props.items.map((work) => (
        <WorkItem
          image={work.imageUrl}
          title={work.title}
          description={work.description}
          id={work.id}
        />
      ))}
    </ul>
  );
};

export default WorkList;
