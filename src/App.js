import React from "react";
import "./styles.css";

import { useState } from "react";
import { Drawer, Button, Menu } from "antd";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import "antd/dist/antd.css";

// import components here..
import Header from "./component/header/header";

// import pages here
import Home from "./pages/home/home";
import Charts from "./pages/chart/chart";
import Config from "./pages/config/config";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

export default function App() {
  let history = useHistory();
  const { SubMenu } = Menu;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onHome = () => {
    history.push("./home");
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Button type="primary" onClick={showDrawer}>
          Menu
        </Button>
        <Drawer
          title="Tradflix"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            onClick={handleClick}
            style={{ width: 230 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<MailOutlined />} onClick={onHome}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />}>
              Watch List
            </Menu.Item>
            <Menu.Item key="3" icon={<MailOutlined />}>
              News
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MailOutlined />
                  <span>Configuration</span>
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>

            <SubMenu
              key="sub4"
              title={
                <span>
                  <SettingOutlined />
                  <span>Navigation pages</span>
                </span>
              }
            >
              <Menu.Item key="9">Stock view</Menu.Item>
              <Menu.Item key="10">Chart 1</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>
        <Switch>
          <Route default path="/home" component={Home} />
          <Route exact path="/chart" component={Charts} />
          <Route exact path="/config" component={Config} />
        </Switch>
      </Router>
    </div>
  );
}
