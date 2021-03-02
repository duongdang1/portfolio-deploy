import React from "react";

import AboutItem from "./AboutItem";

const AboutList = (props) => {
  return (
    <ul className="work-list">
      {props.items.map((about) => (
        <AboutItem
          image={about.imageUrl}
          title={about.title}
          description={about.description}
          description1={about.desctiption1}
          status={about.status}
          id={about.id}
        />
      ))}
    </ul>
  )
};

export default AboutList;