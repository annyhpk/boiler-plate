import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const SiteLayout = styled(Content)`
  margin-left: 200px;
`;

function LandingPage() {
  return (
    <SiteLayout>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, textAlign: "center" }}
      >
        <h2>Let's Coding</h2>
        <br />
        Just Do...
        <br />
        <br />
        <br />
        <br />
        ...
        <br />
        <br />
        <br />
        <br />
        ...
      </div>
    </Content>
    </SiteLayout>
  );
}

export default LandingPage;
