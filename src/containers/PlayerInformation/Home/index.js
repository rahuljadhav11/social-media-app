import React from "react";
import Intro from "../Intro";
import About from "../About";
import Stats from "../Stats";
import Media from "../Media";
import CoverImages from "../CoverImages";
import StoryLine from "../StoryLine";
import "./home.scss";

const Home = () => {
  const coverImagePaths = [...Array(10).keys()].map(index => (
    require(`../../../assets/images/kl${index + 11}.jpg`)
  ));

  return (
    <div className="background-cover">
      <CoverImages imagePaths={coverImagePaths} />
      <Intro />
      <About />
      <Stats />
      <StoryLine />
      <Media />
    </div>
  );
};

export default Home;
