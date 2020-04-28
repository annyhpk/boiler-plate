import React from "react";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function NavBar() {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div
        className="logo"
        style={{
          marginLeft: "30%",
          marginTop: "5%",
        }}
      >
        <h2
          style={{
            color: "white",
          }}
        >
          <a href="/">- Logo -</a>
        </h2>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default NavBar;
