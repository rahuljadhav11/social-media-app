import React from 'react';
import { Menu, Icon, Row, Col, Card, Avatar } from "antd";
import "./home.scss";

const { Item } = Menu;

const coverImages = () => (
  <Row className="cover-images">
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl2.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl3.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl5.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl17.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl13.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl14.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl12.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl9.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl10.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
    <Col>
      <Avatar className="cover" src={require("../../assets/images/kl11.jpg")} alt="KL Rahul Cover" size={192} shape="square" />
    </Col>
  </Row>
)

const menu = () => (
  <Menu mode="horizontal">
    <Item key="home">
      <Icon className="menu-icon" type="home" />
      HOME
    </Item>
    <Item key="about">
      <Icon className="menu-icon" type="user" />
      ABOUT
    </Item>
    <Item key="stats">
      <Icon className="menu-icon" type="bar-chart" />
      STATS
    </Item>
    <Item key="media">
      <Icon className="menu-icon" type="video-camera" />
      MEDIA
    </Item>
  </Menu>
);

const userInformation = () => (
  <div className="user-info">
    <div className="user-name">{`KL RAHUL THE K'CLASS`}</div>
    <ul className="user-actions">
      <li>
        <a href="https://www.instagram.com/rahulkl/" target="_blank">
          <Icon className="action-icon" type="instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/klrahul11/" target="_blank">
          <Icon className="action-icon" type="facebook" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/klrahul11" target="_blank">
          <Icon className="action-icon" type="twitter" />
        </a>
      </li>
    </ul>
  </div>
)

const userImage = () => (
  <img id="user-image" src={require("../../assets/images/kl_home.png")} alt="KL Rahul" />
)

const Home = () => (
  <div className="background-cover">
    {coverImages()}
    <Row id="home" className="home">
      <Card className="heading">KL RAHUL</Card>
      <Col span={16}>
        {menu()}
        {userInformation()}
      </Col>
      <Col span={8}>{userImage()}</Col>
    </Row>
  </div>
);

export default Home;
