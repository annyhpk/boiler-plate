import React, { useEffect } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import Navbar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const { Content } = Layout;

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => { console.log(res.data) });
    }, [])

    return (
        <Layout>
            <Navbar />
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header />
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
                <Footer />
            </Layout>
        </Layout>
    )
}

export default LandingPage;
