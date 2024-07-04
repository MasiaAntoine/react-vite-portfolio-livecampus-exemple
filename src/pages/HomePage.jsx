import React from "react";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

const HomePage = ({ isDarkMode }) => {
  return (
    <>
      <Presentation isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
    </>
  );
};

export default HomePage;
