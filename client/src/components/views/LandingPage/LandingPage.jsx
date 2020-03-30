import React, { useEffect } from 'react';
import { } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => { console.log(res.data) });
    }, [])

    return (
        <>
            <Div>
                <h2>시작페이지</h2>
            </Div>
        </>
    )
}

export default LandingPage
