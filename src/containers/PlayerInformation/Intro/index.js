import React from "react";
import { Menu, Icon, Row, Col, Card } from "antd";
import UserImage from "../../../components/UserImage";
import "./intro.scss";

const { Item } = Menu;

const menu = () => (
  <Menu mode="horizontal">
    <Item key="about">
      <Icon className="menu-icon" type="user" />
      <a href="#about" target="_self" />
      ABOUT
    </Item>
    <Item key="stats">
      <Icon className="menu-icon" type="bar-chart" />
      <a href="#stats" target="_self" />
      STATS
    </Item>
    <Item key="media">
      <Icon className="menu-icon" type="video-camera" />
      <a href="#media" target="_self" />
      MEDIA
    </Item>
  </Menu>
);

const userInformation = () => (
  <div className="user-info">
    <div className="user-name">{`KL RAHUL THE K'CLASS`}</div>
    <div className="user-type">{"(WICKET KEEPER BATSMAN)"}</div>
    <ul className="user-actions">
      <li>
        <a href="https://www.instagram.com/rahulkl/" target="_blank" rel="noopener noreferrer">
          <Icon className="action-icon" type="instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/klrahul11/" target="_blank" rel="noopener noreferrer">
          <Icon className="action-icon" type="facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/klrahul11" target="_blank" rel="noopener noreferrer">
          <Icon className="action-icon" type="twitter" />
        </a>
      </li>
    </ul>
  </div>
);

const Intro = () => (
  <Row id="intro" className="intro">
    <Card className="heading">KL RAHUL</Card>
    <Col span={16}>
      {menu()}
      {userInformation()}
    </Col>
    <Col span={8}>
      <UserImage
        position="right"
        imagePath={require("../../../assets/images/kl_home1.png")}
      />
    </Col>
  </Row>
);

export default Intro;
