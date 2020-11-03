import React from 'react';
import Home from "../containers/PlayerInformation/Home";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../css/global/app.scss";

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content>
      <Home />
    </Content>
  </Layout>
);

export default App;
