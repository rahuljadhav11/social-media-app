import React, { useState } from "react";
import { Row, Col } from "antd";
import ReactPlayer from 'react-player';
import "./media.scss";

const { Fragment } = React;

const Media = () => {
  const [hoveredVideo, setHoveredVideo] = useState(false);

  const videosPerRow = imageNames =>
    imageNames.map(id => {
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
            width="100%"
            height="600px"
            url={[{ src: require("../../../assets/images/kl1.mp4"), type: "video/mp4" }]}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {videosPerRow(["kl2", "kl3", "kl4", "kl5"])}
      </Row>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {videosPerRow(["kl6", "kl7", "kl8", "kl9"])}
      </Row>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        {videosPerRow(["kl10", "kl11", "kl12", "kl13"])}
      </Row>
    </Fragment>
  );

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
