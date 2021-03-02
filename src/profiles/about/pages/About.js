import React from "react";

import AboutList from "../components/AboutList";

const ABOUT_DUMMY = [
  {
    title: "About Me",
    description: "I am a sophomore majoring in Computer Science and minoring in Mathematics at Union College, NY.",
    desctiption1: "My passion is in cybersecurity, computer system and computer networking.",
    status:" Here are a few technologies and programming languages I have been working with recently: ",
    imageUrl: "https://i.ibb.co/y5GtyPR/File-000-3.jpg",
    id: "2",
  },
];

const About = () => {
  return <AboutList items={ABOUT_DUMMY} />;
};

export default About;