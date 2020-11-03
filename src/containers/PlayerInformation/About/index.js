import React from "react";
import { Row, Col } from "antd";
import UserImage from "../../../components/UserImage";
import "./about.scss";

const about = () => (
  <div className="user-info">
    <div className="title">LOKESH RAHUL</div>
    <div className="dob">18 April 1992</div>
    <div className="info">
      Rahul rose through the ranks of Under-19 cricket and broke into the
      Karnataka first-class side and had a decent debut season in 2010-11. He
      was left out of the squad for the succeeding season, but he returned for
      the 2012-13 season, in which he had a prolific run of form, becoming the
      highest run-getter of the season, propelling himself into contention for
      the highest honour of them all – an India Test cap. With an ideal mentor
      in Rahul Dravid, KL Rahul shares more than his first name with the Indian
      legend; the dogged resistance, the compact, airtight technique, and the
      unimpeachable focus at the crease are all common factors between the two
      batting technicians. Rahul does need to work a tad more on his nerves,
      though, after his tame dismissal on 199 in Chennai further reinforced his
      image as a timorous player. However, with age on his side, Rahul can work
      on his nerves and with an all-conditions' technique to go with it, he is
      an exciting prospect for India's long and challenging overseas season and
      he would like to reinforce his spot as a long-term option for India as a
      premier Test opener.
    </div>
  </div>
);

const About = () => (
  <Row id="about" className="about">
    <Col span={8}>
      <UserImage
        position="left"
        imagePath={require("../../../assets/images/kl_home2.png")}
      />
    </Col>
    <Col span={16}>{about()}</Col>
  </Row>
);

export default About;
