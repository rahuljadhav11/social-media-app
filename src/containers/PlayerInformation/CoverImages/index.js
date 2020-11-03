import React from "react";
import { Row, Col, Avatar } from "antd";
import "./cover-images.scss";

const renderCoverImages = imagePaths => (
  imagePaths.map(imagePath => (
    <Col key={imagePath}>
      <Avatar
        className="cover"
        src={imagePath}
        alt="KL Rahul Cover"
        size={192}
        shape="square"
      />
    </Col>
  ))
);

const CoverImages = ({ imagePaths }) => (
  <Row className="cover-images">{renderCoverImages(imagePaths)}</Row>
);

export default CoverImages;
