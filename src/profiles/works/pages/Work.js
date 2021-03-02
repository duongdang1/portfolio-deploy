import React from "react";

import WorkList from "../components/WorkList";

const WORK_DUMMY = [
  {
    title: "Here are some works that I have done",
    id:"3",
  },
];

const Work = () => {
  return <WorkList items={WORK_DUMMY} />;
};

export default Work;
