import React from "react";
import "./styles.css";

import { useState } from "react";
import { Drawer, Button, Menu } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  const { SubMenu } = Menu;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
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
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            onClick={handleClick}
            style={{ width: 220 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<MailOutlined />}>
              Option 1
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MailOutlined />
                  <span>Navigation One</span>
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
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <SettingOutlined />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
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
