import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function MainContent() {
    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
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
    )
}

export default MainContent
