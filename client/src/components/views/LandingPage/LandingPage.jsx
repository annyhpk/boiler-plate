import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Navbar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Contents/MainContent';

const SiteLayout = styled(Layout)`
    margin-left: 200px;
`

function LandingPage() {

    return (
        <Layout>
            <Navbar />
            <SiteLayout>
                <Header />
                    <Content />
                <Footer />
            </SiteLayout>
        </Layout>
    )
}

export default LandingPage;
