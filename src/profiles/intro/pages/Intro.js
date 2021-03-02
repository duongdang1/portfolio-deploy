import React from "react";

import IntroList from "../components/IntroList";

const INTRO_DUMMY = [
  {
    title: "Hi, my name is",
    description: "Duong Minh Viet Dang ",
    desctiption1: "I am a sophomore majoring in Computer Science and minoring in Mathematics at Union College. ",
    
    imageUrl:
      "https://i.ibb.co/xMgpYHZ/BRS-Tennis-Photo-Andrew-Shurtleff-Photography-LLC.jpg",
    id: "1",
  },
];

const Intro = () => {
  return <IntroList items={INTRO_DUMMY} />;
};

export default Intro;
