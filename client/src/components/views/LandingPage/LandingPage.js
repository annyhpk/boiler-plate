import React, { useEffect } from 'react';
import { } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(res => { console.log(res.data) });
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success) {
                    props.history.push('/login');
                } else {
                    alert('Failed to logout');
                }
            });
    };

    return (
        <>
            <Div>
                <h2>시작페이지</h2>

                <button onClick={onClickHandler}>
                    logout
                </button>
            </Div>
        </>
    )
}

export default withRouter(LandingPage)
