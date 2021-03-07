import React from "react";

import ProjectList from "../components/ProjectList";

const PROJECT_DUMMY = [
  {
  
    description: "This project creates a stimulator of the Texas Holdem poker game. Two 5-card hands will be drawn. The user will guess which one worth more. If the user's guess is correct, user will get 1 point. ",
    details:"This javascript project is an online multiplayer tic-tac-toe game with real-time database. The website implements user's email authentication upon sign-up and real-time moves by using Firebase.  ",
    id:"4",
    detail: "username: duongminhvietdang@gmail.com, password: 150513031101",
    detail2: "username2: dangvietduongminh@gmail.com. password, 12345678"
    
  },

  
    

  
];

const Project = () => {
  return <ProjectList items={PROJECT_DUMMY} />;
};

export default Project;
