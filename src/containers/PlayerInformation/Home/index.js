import React, { useState, useEffect } from "react";
import { Spin } from 'antd';
import Intro from "../Intro";
import About from "../About";
import Stats from "../Stats";
import Media from "../Media";
import CoverImages from "../CoverImages";
import StoryLine from "../StoryLine";
import "./home.scss";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const coverImagePaths = [...Array(10).keys()].map(index => (
    require(`../../../assets/images/kl${index + 11}.jpg`)
  ));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, []);

  return (
    isLoading ? (
      <div className="spin"><Spin /></div>
    ) : (
      <div className="background-cover">
      <CoverImages imagePaths={coverImagePaths} />
      <Intro />
      <About />
      <Stats />
      <StoryLine />
      <Media />
    </div>
    )
  );
};

export default Home;
