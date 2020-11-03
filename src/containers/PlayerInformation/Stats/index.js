import React from "react";
import { Row, Col, Table } from "antd";
import UserImage from "../../../components/UserImage";
import "./stats.scss";

const battingStatsColumns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'MATCHES',
    dataIndex: 'matches',
    key: 'matches'
  },
  {
    title: 'INNINGS',
    dataIndex: 'innings',
    key: 'innings'
  },
  {
    title: 'RUNS',
    dataIndex: 'runs',
    key: 'runs',
  },
  {
    title: 'HIGHEST SCORE',
    dataIndex: 'highest_score',
    key: 'highest_score'
  },
  {
    title: 'AVERAGE',
    dataIndex: 'average',
    key: 'average'
  },
  {
    title: 'STRIKE RATE',
    dataIndex: 'strike_rate',
    key: 'strike_rate'
  },
  {
    title: '100s',
    dataIndex: 'hundreds',
    key: 'hundreds'
  },
  {
    title: '200s',
    dataIndex: 'double_hundreds',
    key: 'double_hundreds'
  },
  {
    title: '50s',
    dataIndex: 'fifties',
    key: 'fifties'
  }
];

const battingStatsData = [
  {
    key: 'TEST',
    matches: '36',
    innings: '60',
    runs: '2006',
    highest_score: '199',
    average: '34.59',
    strike_rate: '56.46',
    hundreds: '5',
    double_hundreds: '0',
    fifties: '11'
  },
  {
    key: 'ODI',
    matches: '32',
    innings: '31',
    runs: '1239',
    highest_score: '112',
    average: '47.65',
    strike_rate: '87.07',
    hundreds: '4',
    double_hundreds: '0',
    fifties: '7'
  },
  {
    key: 'T20I',
    matches: '41',
    innings: '38',
    runs: '1461',
    highest_score: '110',
    average: '45.66',
    strike_rate: '146.1',
    hundreds: '2',
    double_hundreds: '0',
    fifties: '11'
  },
  {
    key: 'IPL',
    matches: '67',
    innings: '58',
    runs: '1977',
    highest_score: '100',
    average: '42.06',
    strike_rate: '138.16',
    hundreds: '1',
    double_hundreds: '0',
    fifties: '16'
  },
  {
    key: 'FIRST CLASS',
    matches: '78',
    innings: '131',
    runs: '5802',
    highest_score: '337',
    average: '46.04',
    strike_rate: '56.06',
    hundreds: '14',
    double_hundreds: '0',
    fifties: '29'
  }
];

const battingStats = () => (
  <div>
    <div className="title">
      BATTING CAREER
    </div>
    <Table
      columns={battingStatsColumns}
      dataSource={battingStatsData}
      pagination={false}
    />
  </div>
)

const rankingStats = () => (
  <div className="rankings">
    <div className="title">ICC RANKINGS</div>
    <Row>
      <Col span={8}>
        <div className="format">TEST</div>
        <div className="rank">43rd</div>
      </Col>
      <Col span={8}>
        <div className="format">ODI</div>
        <div className="rank">36th</div>
      </Col>
      <Col span={8}>
        <div className="format">T20</div>
        <div className="rank">2nd</div>
      </Col>
    </Row>
  </div>
)

const Stats = () => (
  <Row id="stats" className="stats">
    <Col span={16} className="table-stats">
      {rankingStats()}
      {battingStats()}
    </Col>
    <Col span={8}>
      <UserImage
        position="right"
        imagePath={require("../../../assets/images/kl_home3.png")}
      />
    </Col>
  </Row>
);

export default Stats;
