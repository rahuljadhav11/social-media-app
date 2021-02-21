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

  const renderYoutubeVideosSet1 = () => (
    <Fragment>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Col span={6} id="youtube1">
          <ReactPlayer
            controls={hoveredVideo === "youtube1"}
            className="video"
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
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=IzC9EzDNL50"
            onMouseEnter={event => setHoveredVideo("youtube2")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube3">
          <ReactPlayer
            controls={hoveredVideo === "youtube3"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=GT1Fclodfjk"
            onMouseEnter={event => setHoveredVideo("youtube3")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube4">
          <ReactPlayer
            controls={hoveredVideo === "youtube4"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=V7FyDVmZcwQ"
            onMouseEnter={event => setHoveredVideo("youtube4")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
      </Row>
    </Fragment>
  )

  const renderYoutubeVideosSet2 = () => (
    <Fragment>
      <Row gutter={16} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Col span={6} id="youtube1">
          <ReactPlayer
            controls={hoveredVideo === "youtube1"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=MOev7psnUhs"
            onMouseEnter={event => setHoveredVideo("youtube1")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube2">
          <ReactPlayer
            controls={hoveredVideo === "youtube2"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=-2y1RUzwAS0"
            onMouseEnter={event => setHoveredVideo("youtube2")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube3">
          <ReactPlayer
            controls={hoveredVideo === "youtube3"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=ET567IvUTCA"
            onMouseEnter={event => setHoveredVideo("youtube3")}
            onMouseLeave={event => setHoveredVideo(null)}
          />
        </Col>
        <Col span={6} id="youtube4">
          <ReactPlayer
            controls={hoveredVideo === "youtube4"}
            className="video"
            width="100%"
            height="250px"
            url="https://www.youtube.com/watch?v=nL9KqGaPHHE"
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
      {renderYoutubeVideosSet1()}
      {renderYoutubeVideosSet2()}
    </Row>
  );
};

export default Media;
