import React from "react";

import IntroItem from "./IntroItem";

const IntroList = (props) => {
  return (
    <ul className="work-list">
      {props.items.map((intro) => (
        <IntroItem
          image={intro.imageUrl}
          title={intro.title}
          description={intro.description}
          description1={intro.desctiption1}
          
          id={intro.id}
        />
      ))}
    </ul>
  )
};

export default IntroList;
