import React, { useState } from "react";
import { Row, Col } from "antd";
import ReactPlayer from 'react-player';
import "./media.scss";

const { Fragment } = React;

const Media = () => {
  const [hoveredVideo, setHoveredVideo] = useState(false);

  const videosPerRow = () =>
    ["kl2", "kl3", "kl4", "kl5"].map(id => {
      return (
        <Col span={6} key={id}>
          <ReactPlayer
            controls={hoveredVideo === id}
            className="video"
            width="100%"
            height="250px"
            url={[{ src: require(`../../../assets/images/${id}.mp4`), type: "video/mp4" }]}
            onMouseEnter={event => setHoveredVideo(id)}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
      )
    })

  const renderVideos = () => (
    <Fragment>
      <Row>
        <Col key="kl1">
          <ReactPlayer
            id="kl1"
            className="opening-video"
            controls
            muted
            width="100%"
            height="600px"
            url={[{ src: require("../../../assets/images/kl1.mp4"), type: "video/mp4" }]}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {videosPerRow()}
      </Row>
    </Fragment>
  );

  const renderYoutubeVideos = () => (
    <Fragment>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Col span={6} id="youtube1">
          <ReactPlayer
            controls={hoveredVideo === "youtube1"}
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=R3fRIgNOdio"
            onMouseEnter={event => setHoveredVideo("youtube1")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube2">
          <ReactPlayer
            controls={hoveredVideo === "youtube2"}
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=g6hY11ILXig"
            onMouseEnter={event => setHoveredVideo("youtube2")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube3">
          <ReactPlayer
            controls={hoveredVideo === "youtube3"}
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=l8a7uHp2-6s"
            onMouseEnter={event => setHoveredVideo("youtube3")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube4">
          <ReactPlayer
            controls={hoveredVideo === "youtube4"}
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=R3fRIgNOdio"
            onMouseEnter={event => setHoveredVideo("youtube4")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
      </Row>
    </Fragment>
  )

  return (
    <Row id="media" className="media">
      <div className="title">
        MEDIA
      </div>
      {renderVideos()}
    </Row>
  );
};

export default Media;
